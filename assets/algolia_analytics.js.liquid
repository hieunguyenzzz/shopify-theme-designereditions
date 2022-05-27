(function(algolia) {
  'use strict';
  var aa = algolia.externals.aa;

  var enabled = algolia.config.analytics_enabled;
  if (!enabled) return;

  aa.init({
    appId: algolia.config.app_id,
    apiKey: algolia.config.search_api_key,
  });

  const localStorageKey = 'algolia_analytics_clicked_objects';

  /**
   * Saves details in local storage for conversion tracking
   */
  algolia.saveForConversionTracking = function (data) {
    /**
     * We're using a try, catch here to handle any possible exceptions
     * resulting from local storage or JSON parsing.
     */
    try {
      // Get any data previously stored
      const previousClickItemsString = localStorage.getItem(localStorageKey) || '[]';
      const previousClickItems = JSON.parse(previousClickItemsString);

      var conversionData = data;

      // Changing the event to 'convert' from 'click'
      conversionData.eventName = 'convert';
      // Removing the `positions` property
      delete conversionData.positions;

      // Add the current products data to local storage
      previousClickItems.push(conversionData)
      localStorage.setItem(localStorageKey, JSON.stringify(previousClickItems))
    } catch (error) {
      // No need to do anything in this scenario
    }
  };
})(window.algoliaShopify);
