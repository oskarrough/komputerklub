// Filename: models/project
define([
  'app',
  'backbone'
], function(app, Backbone){

  var EstateModel = Backbone.Model.extend({

    defaults: {
      title: "Hightower",
      image: "",
      neighbourhood: "Kreuzberg",
      price: 444,
      size: 10,
      rooms: 2
    },

    toJSON : function() {
      return _.clone(this.attributes);
    }
  });

  // Return the model for the module
  return EstateModel;
});