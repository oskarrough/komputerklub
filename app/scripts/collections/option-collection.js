// Filename: collections/projects
define([
  'app',
  'backbone',
  // Pull in the Model module from above
  'models/option-model'
], function(app, Backbone, Store, OptionModel) {

  var OptionCollection = Backbone.Collection.extend({

    model: OptionModel

    // Save all of the todo items under the `"todos"` namespace.
    //localStorage: new Store("options")

  });

  // You don't usually return a collection instantiated
  return OptionCollection;
});