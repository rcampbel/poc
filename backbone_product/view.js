 	ANFApp = ANFApp || {};
	ANFApp._global = ANFApp._global || {};

	// Global Helper functions
	ANFApp._global.View = Backbone.View.extend({
		bindComponent : function(options) {
    		var opt = {
    			key : "",
    			component : null
    		};

    		opt = _.extendOwn(opt, options);

    		if (typeof opt.key === "string" && opt.key.trim().length >= 1 &&
    			typeof component === "object" && component !== null && 
    			typeof component.render === "function") {
    			this.listenTo(this.model, "change:"+watch, component.render);
    		}
		},
		bindComponents : function(optionsArray) {
			if (typeof optionsArray === "object" && optionsArray !== null) {
				if (!(optionsArray instanceof Array)) {
					optionsArray = [optionsArray];
				}

				optionsArray.forEach(this.bindComponent, this);
			}
		}
	});

	ANFApp._global.View.Radio = ANFApp._global.View.extend({
		template: _.template(ANFApp._global.template.Radio || ""),
  //   	initialize: function(){
		// },
    	render: function() {
			this.$el.html(this.template(_.extend({}, {cid: this.cid}, this.model.attributes))) ;
			return this;
		}
	});

	ANFApp._global.View.RadioList = ANFApp._global.View.extend({
    	tagName: "div",
    	className: "radio-list",
    	// events: {},
    	radioElements : [],
    	initialize: function(){
			this.render();
			
			this.radioElements = [];

			this.collection.models.forEach(function(myLocalModel) {
				var radioElement = new ANFApp._global.View.Radio({
					model : myLocalModel 
				});

				radioElement.render().$el.appendTo(this.$el);

			}, this);
    	},
    	render: function() {
			return this;
		}
	});


    // Start : MODELS

    ANFApp.view = ANFApp.view || {};
    ANFApp.view._product = ANFApp.view._product || {};





  	ANFApp.view._product.Price = ANFApp._global.View.extend({
    	tagName: "div",
    	className: "product__price",
    	template: _.template(ANFApp.template._product.Price || ""),
    	// events: {},
		initialize: function() {
			this.listenTo(this.model, "change", this.render);
			this.render();
	 	},
    	render: function() {
			this.$el.html(this.template(this.model.attributes));
			return this;
		}
	});

	ANFApp.view._product.ATBProduct = ANFApp._global.View.extend({
    	el: "#primary-content",
    	//className: "product",
    	template: _.template(ANFApp.template._product.Product || ""),
    	// events: {},
    	initialize: function(){
			this.render();

    		this.bindComponent({
    			key : "currentPrice",
    			component : new ANFApp.view._product.Price({
	    			model: this.model.get('price'),
	    			el: this.$('.product__price')
	    		})
    		});

    		console.log(this.model.get('avaiableColorCollection'));

    		this.bindComponent({
    			key : "avaiableColorCollection",
    			component : new ANFApp._global.View.RadioList({
	    			collection: this.model.get('avaiableColorCollection'),
	    			el: this.$('.product__seqs')
	    		})
    		});
			
			this.bindComponent({
    			key : "avaiableSizeCollection",
    			component : new ANFApp._global.View.RadioList({
	    			collection: this.model.get('avaiableSizeCollection'),
	    			el: this.$('.product__sizes')
	    		})
    		});

    	},
    	render: function() {
			this.$el.html(this.template(this.model.attributes));
			return this;
		}
	});