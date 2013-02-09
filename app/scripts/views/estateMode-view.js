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
    el: '#mode',
    template: _.template(estateModeTemplate),

    // View constructor
    initialize: function() {

        // Storing the View context
        self = this;
    },

    events: {
      'click .list': 'onModeList',
      'click .grid': 'onModeGrid'
    },

    // event handler

    onModeList: function () {
      $('.entry-list ul').removeClass('grid').addClass('list');
    },

    onModeGrid: function () {
      $('.entry-list ul').removeClass('list').addClass('grid');
    },

    render: function() {
      self.$el.html(self.template());

      return self;
    }

  });

  return EstateModeView;
});