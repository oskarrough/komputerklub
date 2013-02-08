define([
  // Application.
  "app",
  "models/estate-model",
  "collections/estate-collection",
  "views/estateList-view",
  "views/estateFilter-view"

],

function(app, EstateModel, EstateCollection, EstateListView, EstateFilterView) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "list"
    },

    list: function() {
      var estateCollection = new EstateCollection();
      estateCollection.fetch({
        success: function(estates) {
          var estateListView = new EstateListView({collection: estates});
          estateListView.render();

          var estateFilterView = new EstateFilterView({collection: estates});
          estateFilterView.render();
        }
      });
    }
  });

  return Router;

});