// Filename: models/project
define([
  'app',
  'backbone'
], function(app, Backbone){

  var EstateModel = Backbone.Model.extend({

    defaults: {
      title: "Hightower",
      image: "undefined",
      neighbourhood: "undefined",
      price: "undefined",
      size: "undefined",
      rooms: "undefined"
    }

  });

  // Return the model for the module
  return EstateModel;
});