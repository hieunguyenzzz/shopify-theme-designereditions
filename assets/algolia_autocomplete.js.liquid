(function(algolia) {
  'use strict';
  if (!algolia.config.autocomplete_enabled) return;

  var algoliasearch = algolia.externals.algoliasearch;
  var autocomplete = algolia.externals.autocomplete;
  var aa = algolia.externals.aa;

  var client = algoliasearch(
    algolia.config.app_id,
    algolia.config.search_api_key
  );

  function createMultiQuerySource() {
    let queue = [];
    let lastResults = [];
    let lastSearch = Promise.resolve();

    function requestSearch(index) {
      return Promise.resolve()
        .then(() => {
          if (queue.length) {
            lastSearch = client.search(queue);
            queue = [];
          }
          return lastSearch;
        })
        .then((result) => {
          if (result) {
            lastResults = result.results;
          }
          return lastResults[index];
        });
    }

  return function multiQuerySource(singleIndex, params, extendHits = null) {
      return function search(query, cb) {
        const index =
          queue.push({ indexName: singleIndex.indexName, query, params }) - 1;
        requestSearch(index)
        .then((res) => {
          var extendedHits = [];
          if (extendHits) {
            extendedHits = extendHits(res);
          } else {
            extendedHits = res.hits
          }
          return cb(extendedHits, res);
        })
          .catch((err) => cb([], err));
      };
    };
  }

  var multiQuerySource = createMultiQuerySource();

  function index(name) {
    return client.initIndex('' + algolia.config.index_prefix + name);
  }

  function autocompleteSection(config, section) {
    var params = config[section];

    var templates = {
      empty: function displayEmptyResultSet(props) {
        return algolia.render(
          params.templates.empty,
          algolia.assign({}, props, { translations: algolia.translations })
        );
      },
      suggestion: function displaySuggestion(hit) {
        return algolia.render(
          params.templates.hit,
          algolia.assign({ _distinct: params.distinct }, hit, {
            translations: algolia.translations,
          })
        );
      },
    };

    if (params.templates.footer) {
      templates.footer = function displayFooter(props, content) {
        if (!content.nbHits) return null;
        if (content.nbHits <= params.hitsPerPage) return null;
        if (!algolia.config.instant_search_enabled) return null;
        if (!algolia.config.autocomplete_see_all) return null;

        return algolia.render(params.templates.footer, {
          query: props.query,
          nbHits: content.nbHits,
          translations: algolia.translations,
          helpers: algolia.helpers,
        });
      };
    }

    // Filters for stock policy
    var stockPolicyFilter = null;

    /**
     * Filters for stock policy are valid only if:
     * - stock policy has been defined, AND
     * - we are targeting products search index
     */
    if (algolia.config.stock_policy && section === 'products') {
      if (algolia.config.stock_policy === 'allow') {
        /**
         * For 'allow', we don't need to add any filter as we want to continue
         * displaying all out of stock items.
         */
      } else if (algolia.config.stock_policy === 'deny') {
        // For 'deny' we will filter out all items based on inventory quantity
        stockPolicyFilter = 'inventory_quantity > 0';
      } else if (algolia.config.stock_policy === 'continue') {
        /**
         * For 'continue' we will filter on `inventory_available` attribute whose
         * value is dependent on:
         * `inventory_quantity > 0 OR inventory_policy == 'continue'`
         */
        stockPolicyFilter = 'inventory_available:true';
      }
    }

    var searchOpts = {
      clickAnalytics: true,
      hitsPerPage: params.hitsPerPage,
      highlightPreTag: '<span class="aa-highlight">',
      highlightPostTag: '</span>',
    };
    if (params.distinct) {
      searchOpts.distinct = true;
    }

    // Add the stock policy filter if applicable
    if (stockPolicyFilter) {
      searchOpts.filters = stockPolicyFilter;
    }

    function extendHits(answer) {
      return answer.hits.map(function(hit, i) {
        return algolia.assign({}, hit, {
          _position: i + 1,
          _queryID: answer.queryID,
          _index: algolia.config.index_prefix + section,
        });
      });
    };

    return {
      name: section,
      source: multiQuerySource(index(section), searchOpts, extendHits),
      displayKey: 'title',
      templates: templates,
    };
  }

  function readjust($this, data) {
    if (!data) return;
    var $node = data.$node.get(0);
    var $dropdown = data.dropdown.$menu.get(0);

    var width = $this.offsetWidth;
    var vpWidth = document.body.clientWidth;
    var rect = $this.getBoundingClientRect();
    var offset = {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft,
    };
    var left = offset.left;
    var right = vpWidth - width - left;
    var top = offset.top;
    var height = $this.offsetHeight;

    var align = left < right ? 'left' : 'right';
    var dist = Math.min(left, right);

    // For small centered inputs, take half the screen
    if (4 * dist > vpWidth) {
      align = 'left';
      dist = Math.round(vpWidth / 4);
    }

    var newWidth = vpWidth - 2 * dist;

    // For big inputs, follow the input
    if (width >= 600) {
      align = 'left';
      dist = left;
      newWidth = width;
    }

    $node.style.left = '';
    $node.style.right = '';
    $node.style.top = top + height + 8 + 'px';
    $node.style[align] = dist + 'px';
    $node.style.width = newWidth + 'px';

    var suffix = 'lg';
    if (newWidth < 300) suffix = 'xs';
    else if (newWidth < 600) suffix = 'sm';
    else if (newWidth < 900) suffix = 'md';

    $dropdown.classList.remove(
      'aa-dropdown-menu-size-xs',
      'aa-dropdown-menu-size-sm',
      'aa-dropdown-menu-size-md',
      'aa-dropdown-menu-size-lg',
      'aa-dropdown-menu-size-lg'
    );
    $dropdown.classList.add('aa-dropdown-menu-size-' + suffix);
  }

  var config = {
    articles: {
      hitsPerPage: algolia.config.articles_autocomplete_hits_per_page,
      index: index('articles'),
      templates: {
        empty: algolia.compileTemplate('autocomplete_articles_empty'),
        hit: algolia.compileTemplate('autocomplete_article'),
      },
    },
    pages: {
      hitsPerPage: algolia.config.pages_autocomplete_hits_per_page,
      index: index('pages'),
      templates: {
        empty: algolia.compileTemplate('autocomplete_pages_empty'),
        hit: algolia.compileTemplate('autocomplete_page'),
      },
    },
    collections: {
      hitsPerPage: algolia.config.collections_autocomplete_hits_per_page,
      index: index('collections'),
      templates: {
        empty: algolia.compileTemplate('autocomplete_collections_empty'),
        hit: algolia.compileTemplate('autocomplete_collection'),
      },
    },
    products: {
      distinct: algolia.config.show_products,
      hitsPerPage: algolia.config.products_autocomplete_hits_per_page,
      index: index('products'),
      templates: {
        empty: algolia.compileTemplate('autocomplete_products_empty'),
        footer: algolia.compileTemplate('autocomplete_footer'),
        hit: algolia.compileTemplate('autocomplete_product'),
      },
    },
  };

  if (algolia.config.powered_by) {
    // eslint-disable-next-line no-console
    console.log('Algolia: Autocomplete');
  }

  algolia.appendStyle(
    algolia.render(algolia.compileTemplate('autocomplete.css'), {
      colors: algolia.config.colors,
    })
  );

  var autocompleteInstance = autocomplete(
    algolia.config.input_selector + ', .algolia-shopify-autocomplete',
    {
      debug: algolia.config.autocomplete_debug,
      hint: false,
      appendTo: 'body',
      templates: {
        dropdownMenu: algolia.render(algolia.compileTemplate('autocomplete'), {
          storeName: algolia.storeName,
          with: {
            articles: algolia.config.index_articles,
            collections: algolia.config.index_collections,
            pages: algolia.config.index_pages,
            footer: algolia.config.instant_search_enabled && algolia.config.autocomplete_see_all,
            poweredBy: algolia.config.powered_by,
            products: algolia.config.index_products,
          },
        }),
        empty: '<div></div>',
      },
    },
    [
      algolia.config.index_collections &&
        autocompleteSection(config, 'collections'),
      algolia.config.index_articles && autocompleteSection(config, 'articles'),
      algolia.config.index_pages && autocompleteSection(config, 'pages'),
      algolia.config.index_products && autocompleteSection(config, 'products'),
    ].filter(function(x) {
      return Boolean(x);
    })
  );

  // Hack to handle buggy onclick event on iOS
  autocompleteInstance.each(function(i) {
    var data = autocompleteInstance.eq(i).data('aaAutocomplete');
    var suggestionClass =
      '.' +
      data.dropdown.cssClasses.prefix +
      '-' +
      data.dropdown.cssClasses.suggestion;
    var onSuggestionClick = data.dropdown._onSuggestionClick.bind(
      data.dropdown
    );

    var touchmoved;
    data.dropdown.$menu
      .on('touchend', suggestionClass, function(e) {
        if (touchmoved === false) {
          e.preventDefault();
          e.stopPropagation();
          onSuggestionClick.apply(this, arguments);
        }
      })
      .on('touchmove', function() {
        touchmoved = true;
      })
      .on('touchstart', function() {
        touchmoved = false;
      });
  });

  // Event listeners
  autocompleteInstance.on('autocomplete:selected', function(obj, datum, name) {
    if (algolia.config.analytics_enabled) {
      var clickData = {
        index: datum._index,
        eventName: 'click',
        queryID: datum._queryID,
        objectIDs: [datum.objectID],
        positions: [datum._position],
      };

      // Send the click event
      aa.clickedObjectIDsAfterSearch(clickData);
      /**
       * Uncomment the following function call to start storing data in
       * local storage for conversion tracking
       */
      // algolia.saveForConversionTracking(clickData);
    }
    switch (name) {
      case 'products': {
        var addVariantId =
          !algolia.config.show_products && datum.objectID !== datum.id;
        window.location.href =
          '/' +
          name +
          '/' +
          datum.handle +
          (addVariantId ? '?variant=' + datum.objectID : '');
        break;
      }
      case 'articles':
        window.location.href =
          '/blogs/' + datum.blog.handle + '/' + datum.handle;
        break;
      default:
        window.location.href = '/' + name + '/' + datum.handle;
    }
  });

  autocompleteInstance.on('autocomplete:redrawn', function() {
    var that = this;
    var i;
    autocompleteInstance.each(function(j, item) {
      if (item === that) {
        i = j;
        return false;
      }
      return true;
    });
    readjust(this, autocompleteInstance.eq(i).data('aaAutocomplete'));
  });

  window.addEventListener('resize', function() {
    autocompleteInstance.each(function(i) {
      readjust(this, autocompleteInstance.eq(i).data('aaAutocomplete'));
    });
  });
})(window.algoliaShopify);
