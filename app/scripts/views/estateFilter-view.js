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
    el: '#js-filter',
    template: _.template(estateFilterTemplate),

    // View constructor
    initialize: function() {

        // Storing the View context
        self = this;
    },

    events: {
      'click input[type="checkbox"]': 'onFilterItemClicked',
      'click #js-toggle-panel--left': 'onFilterButtonClicked'
    },

    // event handler

    onFilterItemClicked: function(event) {
      var selectedNeighbourhood = $(event.currentTarget).val();
      /*
      var filtered = this.collection.byNeighbourhood(selectedNeighbourhood);
      */
      /*
      console.log( filtered.length );
      console.log( JSON.stringify(this.collection) );
      */
      //this.collection.trigger('filter'); // should be in the collection

      //app.router.navigate("neighbourhood:" + selectedNeighbourhood, {trigger: true});
      app.router.navigate("neighbourhood", {trigger: true});

      //this.trigger('onFilterItemClicked');
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