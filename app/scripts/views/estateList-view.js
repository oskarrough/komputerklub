define([
  // Application.
  "app",
  "backbone",
  "text!templates/estateList.ejs"
],

function(app, Backbone, estateListTemplate) {
  var self,
  EstateListView = Backbone.View.extend({

    // Represents the actual DOM element that corresponds to your View
    // (There is a one to one relationship between View Objects and DOM elements)
    el: '#js-main',
    template: _.template(estateListTemplate),

    // View constructor
    initialize: function() {
      // Storing the View context
      self = this;
      this.collection.bind("filter", this.render, this);
    },

    events: {
      'click #js-hate': 'onEstateHate',
      'click #js-love': 'onEstateLove'
    },

    onEstateLove: function(event) {
      $(event.currentTarget)
        .toggleClass('is-active')
        .parents('.view__item').toggleClass('is-loved');
    },

    onEstateHate: function(event) {
      $(event.currentTarget)
        .toggleClass('is-active')
        .parents('.view__item').slideUp(100).toggleClass('is-hated');
    },

    render: function() {
      self.$el.html(_.template(estateListTemplate, {estates: this.collection.models}));
      return self;
    }
  });

  return EstateListView;
});