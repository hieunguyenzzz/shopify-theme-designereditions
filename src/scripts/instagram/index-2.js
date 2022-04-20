import dotenv from "dotenv";
import fs from "fs";
import get from "lodash.get";
import fetch from "node-fetch";
import request from "request";
dotenv.config();
let process = 0;
let totalfile = 0;
const getLink = ({
  query_hash = "8c2a529969ee035a5063f2fc8602a0fd",
  id = "50047412668",
  first = 24,
  after = "",
} = {}) => {
  const variablesString = encodeURI(
    JSON.stringify({
      id,
      first,
      after,
    })
  );
  return `https://www.instagram.com/graphql/query/?query_hash=${query_hash}&variables=${variablesString}`;
};
const saveFile = (filename, content, callback) => {
  fs.writeFile(filename, content, callback);
};

const run = async (res) => {
  const url = getLink();
  const data = await getData(url);
  let items = get(data, "data.user.edge_owner_to_timeline_media.edges");
  const fileName = "./out/data/instagram-feed.json";
  saveFile(fileName, JSON.stringify(data, null, 2), function (err) {
    if (err) return console.log(err);
    console.log(fileName + " -> done");
  });
  totalfile = totalfile + items.length;
  items.forEach(({ node: item }) => {
    dowloadImage(
      item.display_url,
      "./out/images/instagram-feed-" + item.id + ".jpg",
      () => {
        console.log(`image: ${item.id} (${++process})/${totalfile}`);
      }
    );
  });
  let endCursor = get(
    data,
    "data.user.edge_owner_to_timeline_media.page_info.end_cursor"
  );
  while (endCursor) {
    const url = getLink({
      after: endCursor,
    });
    const data = await getData(url);
    let items = get(data, "data.user.edge_owner_to_timeline_media.edges");
    const fileName = `./out/data/instagram-feed-${endCursor}.json`;
    saveFile(fileName, JSON.stringify(data, null, 2), function (err) {
      if (err) return console.log(err);
      console.log(fileName + " -> done");
    });
    totalfile = totalfile + items.length;
    items.forEach(({ node: item }, i) => {
      dowloadImage(
        item.display_url,
        "./out/images/instagram-feed-" + item.id + ".jpg",
        () => {
          console.log(`image: ${item.id} (${++process})/${totalfile}`);
        }
      );
    });
    endCursor = get(
      data,
      "data.user.edge_owner_to_timeline_media.page_info.end_cursor"
    );
    console.log("endCursor", data, endCursor);
  }
};
const getData = async (url) => {
  return await fetch(url).then((res) => res.json());
};
const dowloadImage = async (uri, filename, callback) => {
  var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
      console.log("content-type:", res.headers["content-type"]);
      console.log("content-length:", res.headers["content-length"]);
      request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
    });
  };
  download(uri, filename, callback);
};

run();
