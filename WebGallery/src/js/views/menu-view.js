define([
    'jqueryLoader',	//Included by default, but needed in less instances now that views have cached '$el'
    'underscoreLoader',
    'backboneLoader',
    'text!templates/menu.html'
],
    function ($, _, Backbone, template) {
        "use strict";

        return Backbone.View.extend({
            template: _.template(template),

            events: {
                'mouseenter': 'mouseover',
                'mouseleave': 'mouseout'
            },

            initialize: function () {
                this.render();
            },

            render: function () {
                this.$el.append(this.template({}));

                return this;
            },

            mouseover: function () {
                this.$el.addClass('menu-up').removeClass('menu-down');
            },

            mouseout: function (e) {
                var topPos = ((this.$el.offset().top) + 10);
                var mousePos = e.pageY;
                if (mousePos < topPos) {
                    this.$el.addClass('menu-down').removeClass('menu-up');
                }
            }
        });
    }
);
