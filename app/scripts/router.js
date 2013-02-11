define([
  // Application.
  "app",
  "collections/option-collection",
  "collections/estate-collection",
  "views/estateList-view",
  "views/estateFilter-view",
  "views/estateDetail-view",
  "views/estateMode-view"
],

function(app, OptionCollection, EstateCollection, EstateListView, EstateFilterView, EstateDetailView, EstateModeView) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "list",
      "neighbourhood": "list",
      "show/:nid": "detail"
    },

    list: function() {
      var optionCollection = new OptionCollection();
      var estateCollection = new EstateCollection();
      estateCollection.fetch({
        success: function(estates) {
          var estateListView = new EstateListView({collection: estates});
          estateListView.render();

          var estateFilterView = new EstateFilterView({collection: optionCollection});
          estateFilterView.render();

          var estateModeView = new EstateModeView();
          estateModeView.render();
        }
      });
    },

    detail: function(nid) {
      console.log('node id:' + nid);
      var estateDetailView = new EstateDetailView();
      estateDetailView.render();
    }

  });

  return Router;

});