// Filename: models/project
define([
  'app',
  'backbone'
], function(app, Backbone){

  var OptionModel = Backbone.Model.extend({

    defaults: {
      key: "Hightower",
      value: ""
    }

  });

  // Return the model for the module
  return OptionModel;
});