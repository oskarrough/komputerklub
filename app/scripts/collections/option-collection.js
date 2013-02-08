// Filename: collections/projects
define([
  'app',
  'backbone',
  // Pull in the Model module from above
  'models/option-model'
], function(app, Backbone, OptionModel){
  var OptionCollection = Backbone.Collection.extend({

    model: OptionModel

  });
  // You don't usually return a collection instantiated
  return OptionCollection;
});