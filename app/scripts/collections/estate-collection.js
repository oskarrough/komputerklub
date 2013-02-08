// Filename: collections/projects
define([
  'app',
  'backbone',
  // Pull in the Model module from above
  'models/estate-model'
], function(app, Backbone, EstateModel){
  var EstateCollection = Backbone.Collection.extend({

    model: EstateModel,
    url: '../data/estateCollection.json',

    toJSON : function() {
      return this.map(function(model){ return model.toJSON(); });
    },

    comparator: function(model) {
      return model.get('name');
    }

  });
  // You don't usually return a collection instantiated
  return EstateCollection;
});