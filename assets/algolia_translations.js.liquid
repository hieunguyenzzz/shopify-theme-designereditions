(function(algolia) {
  'use strict';
  algolia.translations = {
    search: 'Current search',
    noCollectionFound: 'No collection found',
    allProducts: 'See all products',
    matching: 'matching',
    sortBy: 'Sorted by',
    relevance: 'Relevance',
    outOf: 'out of',
    resultsFound: 'results found',
    oneResultFound: '1 result found',
    noResultFound: 'No result found',
    addToCart: 'Add to cart',
    searchForProduct: 'Search for products',
    selectedFilter: 'Selected filters',
    clearAll: 'Clear all',
    noPageFound: 'No page found',
    outOfStock: 'Out of stock',
  };

  algolia.translation_helpers = {
    no_result_for: function(text, render) {
      return 'No result for query ' + render(text);
    },
    in: function() {
      return 'in ' + this.processingTimeMS / 1000 + 's';
    },

    try_clear_or_change_input: function(text, render) {
      var regex = new RegExp(/<\/a>|<a[a-z "-=]*>/, 'g');
      var html_tags = text.match(regex);
      return (
        'Try ' +
        render(html_tags[0]) +
        ' clearing filters ' +
        render(html_tags[1]) +
        ' or ' +
        render(html_tags[2]) +
        ' changing your input ' +
        render(html_tags[3])
      );
    },

    outOf: function() {
      return (
        this.page * this.hitsPerPage +
        1 +
        '-' +
        Math.min((this.page + 1) * this.hitsPerPage, this.nbHits) +
        ' out of'
      );
    },

    by: function(text, render) {
      return 'by ' + render(text);
    },

    translation: function(text, render) {
      return algolia.translations[render(text)];
    },
  };
})(window.algoliaShopify);
