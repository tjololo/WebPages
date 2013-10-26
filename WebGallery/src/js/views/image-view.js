define([
        'jqueryLoader',
		'underscoreLoader',
		'backboneLoader',
		'text!templates/image.html'
	],
	function(
        $,
		_,
		Backbone,
		MainTemplate
	) {
		"use strict";
		
		return Backbone.View.extend({
			template : _.template(MainTemplate),
			
			initialize : function() {
				
				this.render();
			},
			
			render : function() {
				this.$el.append(this.template({}));
				return this;
			}
		});
	}
);
