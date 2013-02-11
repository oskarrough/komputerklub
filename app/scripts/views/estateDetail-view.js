define([
  // Application.
  "app",
  "backbone",
  "text!templates/estateDetail.ejs",
  "models/estate-model"
],

function(app, Backbone, estateDetailTemplate, EstateModel) {
  var self,
  EstateListView = Backbone.View.extend({

    // Represents the actual DOM element that corresponds to your View (There is a one to one relationship between View Objects and DOM elements)
    el: '#js-main',
    template: _.template(estateDetailTemplate),

    // View constructor
    initialize: function() {
        // Storing the View context
        self = this;
    },

    render: function() {
        self.$el.html(_.template(estateDetailTemplate, {
          estate: new EstateModel()
        }));
        return self;
    }

  });

  return EstateListView;
});