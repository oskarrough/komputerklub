// Filename: collections/projects
define([
  'app',
  'backbone',
  // Pull in the Model module from above
  'models/estate-model'
], function(app, Backbone, EstateModel){
  var EstateCollection = Backbone.Collection.extend({

    model: EstateModel,
    
    //url: '../data/estateCollection.json',
    // calls to circumvent the crossdomain problem
    //url: 'http://drupal7.maschinentempel.de/node.json?type=estate',
    //url: 'http://unrealestate.kopfwelt.com/data.json',
    // Following is a temporary copy/paste from above URL
    url: '../data/estateCollectionDrupal.json',

    byNeighbourhood: function(neighbourhood) {
      return this.filter(function(estate) {
        return (estate.get('neighbourhood') === neighbourhood);
      });
    },

    // The Drupal API returns items under "list"
    parse: function(response) {
      return response.list;
    },

    comparator: function(model) {
      return model.get('name');
    }

  });
  // You don't usually return a collection instantiated
  return EstateCollection;
});