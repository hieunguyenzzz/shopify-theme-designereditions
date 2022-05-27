/* See https://www.algolia.com/doc/integration/shopify/advanced-customization/customizing-instant-search/#hogan */

(function(algolia) {
  'use strict';
  var Hogan = algolia.externals.Hogan;

  var formatPrice = function formatPrice(value) {
    return algolia.formatMoney(Number(value) * 100);
  };

  function formattedPriceWithComparison(price, compare_at_price, price_ratio) {
    var comparing =
      Number(compare_at_price) && Number(compare_at_price) > Number(price);
    var discount_ratio = 1.0 - price_ratio;
    var res = '<b>' + formatPrice(price) + '</b>';
    if (comparing) {
      res +=
        ' <span class="ais-hit--price-striked"><span>' +
        formatPrice(compare_at_price) +
        '</span></span> ';
      res +=
        ' <span class="ais-hit--price-discount" style="font-weight: ' +
        Math.floor(discount_ratio * 10) * 100 +
        ';">-' +
        Math.floor(discount_ratio * 100) +
        '%</span>';
    }

    return res;
  }

  var escapeHtml = function escapeHtml(unsafe) {
    return (unsafe || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  algolia.helpers = {
    formatNumber: function formatNumber(text, render) {
      return Number(render(text)).toLocaleString();
    },
    formattedPrice: function formattedPrice(text, render) {
      return formatPrice(render(text));
    },
    formattedPriceWithoutDecimals: function formattedPriceWithoutDecimals(
      text,
      render
    ) {
      return formatPrice(render(text)).replace(/\.\d+$/, '');
    },
    autocompletePrice: function autocompletePrice() {
      if (this._distinct) {
        var min = this.variants_min_price;
        var max = this.variants_max_price;
        if (min !== max) {
          return '<b>' + formatPrice(min) + ' - ' + formatPrice(max) + '</b>';
        }
      }
      return formattedPriceWithComparison(this.price, null);
    },
    instantsearchPrice: function instantsearchPrice() {
      if (this._distinct) {
        var min = this.variants_min_price;
        var max = this.variants_max_price;
        if (min !== max) {
          return '<b>' + formatPrice(min) + ' - ' + formatPrice(max) + '</b>';
        }
      }
      return formattedPriceWithComparison(
        this.price,
        this.compare_at_price,
        this.price_ratio
      );
    },
    instantsearchLink: function instantsearchLink() {
      var addVariantId = !this._distinct && this.objectID !== this.id;
      return (
        '/products/' +
        this.handle +
        (addVariantId ? '?variant=' + this.objectID : '')
      );
    },
    fullTitle: function fullTitle() {
      var res = this.title;
      if (
        !this._distinct &&
        this.variant_title &&
        this.variant_title !== 'Default Title' &&
        this.variant_title !== 'Default'
      ) {
        res += ' (' + this.variant_title + ')';
      }

      return escapeHtml(res);
    },
    fullHTMLTitle: function fullHTMLTitle() {
      var res = '';

      if (this._highlightResult.title && this._highlightResult.title.value) {
        res = algolia.helpers.fullEscapedAttribute(
          this._highlightResult.title.value
        );
      }

      if (
        !this._distinct &&
        this.variant_title &&
        this.variant_title !== 'Default Title' &&
        this.variant_title !== 'Default'
      ) {
        res += ' <span class="algolia-variant">(' + res + ')</span>';
      }
      return res;
    },
    fullEscapedAttribute(attribute) {
      return new DOMParser().parseFromString(attribute, 'text/html')
        .documentElement.textContent;
    },
    fullEscapedHTMLTitle: function fullEscapedHTMLTitle() {
      var res = '';

      if (this._highlightResult.title && this._highlightResult.title.value) {
        res = algolia.helpers.fullEscapedAttribute(
          this._highlightResult.title.value
        );
      }

      if (
        !this._distinct &&
        this.variant_title &&
        this.variant_title !== 'Default Title' &&
        this.variant_title !== 'Default'
      ) {
        res += ' <span class="algolia-variant">(' + res + ')</span>';
      }
      return res;
    },
    fullEscapedHTMLProductType: function fullEscapedHTMLProductType() {
      if (
        this._highlightResult.product_type &&
        this._highlightResult.product_type.value
      ) {
        return algolia.helpers.fullEscapedAttribute(
          this._highlightResult.product_type.value
        );
      } else {
        return '';
      }
    },
    fullEscapedHTMLVendor: function fullEscapedHTMLVendor() {
      if (this._highlightResult.vendor && this._highlightResult.vendor.value) {
        return algolia.helpers.fullEscapedAttribute(
          this._highlightResult.vendor.value
        );
      } else {
        return '';
      }
    },
    floor: function floor(text, render) {
      return '' + Math.floor(Number(render(text)));
    },
    ceil: function ceil(text, render) {
      return '' + Math.ceil(Number(render(text)));
    },
    sizedImage: function sizedImage(text, render) {
      var image = this._distinct ? this.product_image : this.image;
      if (!image) {
        return 'http://cdn.shopify.com/s/images/admin/no-image-compact.gif';
      }
      var size = render(text).replace(/^\s+|\s+$/g, ''); // Render and trim
      if (size === 'original') {
        return image;
      }
      return image.replace(/\/(.*)\.(\w{2,4})/g, '/$1_' + size + '.$2');
    },
  };

  [
    'pico',
    'icon',
    'thumb',
    'small',
    'compact',
    'medium',
    'large',
    'grande',
    'original',
  ].forEach(function(size) {
    algolia.helpers[size + 'Image'] = (function(_size) {
      return function() {
        var image = this._distinct ? this.product_image : this.image;

        if (!image) {
          return 'http://cdn.shopify.com/s/images/admin/no-image-compact.gif';
        }

        if (_size === 'original') {
          return image;
        }

        return image.replace(/\/(.*)\.(\w{2,4})/g, '/$1_' + _size + '.$2');
      };
    })(size); // We need to create a new scope so that the internal size has the good value.
  });

  /* Create an Hogan lambda, which doesn't respect the mustache doc */
  var helpers = algolia.assign(
    {},
    algolia.helpers,
    algolia.translation_helpers
  );
  var helpersNames = Object.keys(helpers);
  var i = helpersNames.length;
  var helpersArray = new Array(i);
  while (i--) helpersArray[i] = [helpersNames[i], helpers[helpersNames[i]]];

  algolia.hoganHelpers = helpersArray.reduce(function(res, options) {
    var name = options[0];
    var helper = options[1];

    var newRes = algolia.assign({}, res);

    newRes[name] = function() {
      return function(text) {
        var render = function(value) {
          return Hogan.compile(value, algolia.hoganOptions).render(this);
        }.bind(this);

        return helper.call(this, text, render);
      }.bind(this);
    };

    return newRes;
  }, {});
})(window.algoliaShopify);
