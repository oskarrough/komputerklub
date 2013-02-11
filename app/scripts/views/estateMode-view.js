define([
  // Application.
  "app",
  "backbone",
  "text!templates/estateMode.ejs"
],

function(app, Backbone, estateModeTemplate) {
  var self,
  EstateModeView = Backbone.View.extend({

    // Represents the actual DOM element that corresponds to your View (There is a one to one relationship between View Objects and DOM elements)
    el: '#js-view-mode',
    template: _.template(estateModeTemplate),

    // View constructor
    initialize: function() {

        // Storing the View context
        self = this;
    },

    events: {
      'click #js-view-mode-list': 'onModeList',
      'click #js-view-mode-grid': 'onModeGrid'
    },

    // event handler

    onModeList: function () {
      $('.view').removeClass('view--grid').addClass('view--list');
      $(event.currentTarget).toggleClass('is-active');
    },

    onModeGrid: function () {
      $('.view').removeClass('view--list').addClass('view--grid');
      $(event.currentTarget).toggleClass('is-active');
    },

    render: function() {
      self.$el.html(self.template());

      return self;
    }

  });

  return EstateModeView;
});