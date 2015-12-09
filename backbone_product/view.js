 	ANFApp = ANFApp || {};

    // Start : MODELS

    ANFApp.view = ANFApp.view || {};
    ANFApp.view._product = ANFApp.view._product || {};

  	ANFApp.view._product.Price = Backbone.View.extend({
    	tagName: "div",
    	className: "product__price",
    	template: _.template(ANFApp.template._product.Price || ""),
    	// events: {},
    	// initialize: function(){},
    	render: function() {
			this.$el.html(this.template(this.model.attributes));
			return this;
		}
	});

	ANFApp.view._product.Product = Backbone.View.extend({
    	el: "body",
    	className: "product",
    	template: _.template(ANFApp.template._product.Product || ""),
    	// events: {},
    	// initialize: function(){},
    	render: function() {

    		var productPrice = new ANFApp.view._product.Price({
    			model: this.model.get('price'),
    			el: this.$('.product__price')
    		});
			
			productPrice.render();
			
			this.$el.html(this.template(this.model.attributes));
			return this;
		}
	});