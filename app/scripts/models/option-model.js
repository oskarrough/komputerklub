// Filename: models/project
define([
  'app',
  'backbone'
], function(app, Backbone){

  var OptionModel = Backbone.Model.extend({

    defaults: {
      id: 1,
      key: "",
      value: ""
    }

  });

  // Return the model for the module
  return OptionModel;
});