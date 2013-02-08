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
    },

    parse: function(response) {
      response.image = response.field_image;
      response.price = response.field_price;
      response.size = response.field_size;
      response.rooms = response.field_rooms;
      response.image = response.field_image;
      // @todo: not sure where this check should be made? Oskar.
      // if(response.image.length < 1) {
      //   response.image = 'No image';
      // }
      return response;
    }

  });

  // Return the model for the module
  return EstateModel;
});