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

        this.collection.bind("filter", this.render, this);
    },
    render: function() {
console.log('render');
        self.$el.html(_.template(estateListTemplate, {estateCollection: this.collection.models}));

        return self;
    }
  });

  return EstateListView;
});