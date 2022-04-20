require('dotenv').config()
const Instagram = require('instagram-web-api')
var fs = require('fs'),
  request = require('request')
const get = require('lodash.get')
const username = process.env.INSTAGRAM_USERNAME
const password = process.env.INSTAGRAM_PASSWORD
console.log({
  username,
  password
})

const client = new Instagram({ username, password })
  ; (async () => {
    await client.login()
    const profile = await client.getProfile()
    console.log(profile)
    getdata().then(saveData)
  })()
let data = {}
const getdata = async () => {
  const data =
    await client.getPhotosByUsername({
      username:
        'meraki.wedding.planner',
    })
  return data
}
const saveData = (res) => {
  data = res
  const nodes = get(
    res,
    'user.edge_owner_to_timeline_media.edges',
    []
  )
    .map((item) => item.node)
    .filter(Boolean)
  saveFile(
    './out/data.json',
    JSON.stringify(data, null, 2),
    function (err) {
      if (err) return console.log(err)
      console.log('data.json -> done')
    }
  )
  let process = 0
  nodes.forEach((item) => {
    dowloadImage(
      item.display_url,
      './out/images/' +
      item.id +
      '.jpg',
      () => {
        console.log(
          `image: ${item.id
          } (${++process})/${nodes.length
          }`
        )
      }
    )
  })
}
const saveFile = (
  filename,
  content,
  callback
) => {
  fs.writeFile(
    filename,
    content,
    callback
  )
}
const dowloadImage = async (
  uri,
  filename,
  callback
) => {
  var download = function (
    uri,
    filename,
    callback
  ) {
    request.head(
      uri,
      function (err, res, body) {
        console.log(
          'content-type:',
          res.headers['content-type']
        )
        console.log(
          'content-length:',
          res.headers['content-length']
        )

        request(uri)
          .pipe(
            fs.createWriteStream(
              filename
            )
          )
          .on('close', callback)
      }
    )
  }

  download(uri, filename, callback)
}
