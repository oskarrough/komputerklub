// Filename: collections/projects
define([
  'app',
  'backbone',
  // Pull in the Model module from above
  'models/estate-model'
], function(app, Backbone, EstateModel){
  var EstateCollection = Backbone.Collection.extend({

    model: EstateModel,
    
    // Following is a copy/paste from this url: http://drupal7.maschinentempel.de/node.json?type=estate
    url: '../data/estateCollectionDrupal.json',

    toJSON : function() {
      return this.map(function(model){
        return model.toJSON();
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