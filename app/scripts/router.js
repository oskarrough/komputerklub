define([
  // Application.
  "app",
  "views/estateList-view"

],

function(app, EstateListView) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "list"
    },

    list: function() {
      console.log('list view');
      var estateListView = new EstateListView();
      estateListView.render();
    }
  });

  return Router;

});
