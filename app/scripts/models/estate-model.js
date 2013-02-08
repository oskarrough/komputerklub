// Filename: models/project
define([
  'app',
  'backbone'
], function(app, Backbone){

  var EstateModel = Backbone.Model.extend({

    defaults: {
      name: "Hightower"
    },

    toJSON : function() {
      return _.clone(this.attributes);
    }
  });

  // Return the model for the module
  return EstateModel;
});