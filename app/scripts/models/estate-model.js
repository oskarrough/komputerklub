// Filename: models/project
define([
  'app',
  'backbone'
], function(app, Backbone){

  var EstateModel = Backbone.Model.extend({

    defaults: {
      nid: null,
      title: "Hightower",
      image: "undefined",
      neighbourhood: "undefined",
      price: "undefined",
      size: "undefined",
      rooms: "undefined"
    },

    parse: function(response) {
      response.image = response.field_image[0]['file']['uri'];
      response.neighbourhood = response.field_neighbourhood['id'];
      response.price = response.field_price;
      response.size = response.field_size;
      response.rooms = response.field_rooms;
      return response;
    }

  });

  // Return the model for the module
  return EstateModel;
});