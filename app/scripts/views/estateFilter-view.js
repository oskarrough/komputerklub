define([
  // Application.
  "app",
  "backbone",
  "text!templates/estateFilter.ejs"
],

function(app, Backbone, estateFilterTemplate) {
  var self,
  EstateFilterView = Backbone.View.extend({

    // Represents the actual DOM element that corresponds to your View (There is a one to one relationship between View Objects and DOM elements)
    el: '#filter',
    template: _.template(estateFilterTemplate),

    // View constructor
    initialize: function() {

        // Storing the View context
        self = this;
    },

    events: {
      'click .filterItem': 'onFilterItemClicked',
      'click #js-toggle-panel--left': 'onFilterButtonClicked'
    },

    // event handler

    onFilterItemClicked: function() {
      this.collection.sort();
      this.trigger('onFilterItemClicked');
    },

    onFilterButtonClicked: function() {
        $('body').toggleClass('panel-is-active--left');
    },


    render: function() {
      self.$el.html(self.template());

      return self;
    }

  });

  return EstateFilterView;
});