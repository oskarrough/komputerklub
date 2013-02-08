define([
  // Application.
  "app",
  "backbone",
  "text!templates/estateList.ejs"
],

function(app, Backbone, estateListTemplate) {
  var self,
  EstateListView = Backbone.View.extend({

    // Represents the actual DOM element that corresponds to your View (There is a one to one relationship between View Objects and DOM elements)
    el: '#main',
    template: _.template(estateListTemplate),

    // View constructor
    initialize: function() {

        // Storing the View context
        self = this;

        // Setting the View's model property to the passed in Model
        /*
        this.model = new Model({
            message: "You are now using Backbone, Require, and jQuery!"
        });
        */

    },
    render: function() {
      self.$el.html(self.template());
      return self;
    }
    //template: jobs
  });

  return EstateListView;
});