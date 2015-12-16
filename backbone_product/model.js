 ANFApp = ANFApp || {};

	ANFApp._global = ANFApp._global || {};
	ANFApp._global.model = ANFApp._global.model || {};

	ANFApp._global.model.Radio = Backbone.Model.extend({
		default : {
			disabled : false,
			selected : false,
			text : "",
			value : "",
			name : ""
		},
		isValueEqual : function(value) {
			return this.get("value") === value;
		}
	}); 

	// Start : MODELS

	ANFApp.model = ANFApp.model || {};
	ANFApp.model._product = ANFApp.model._product || {};

	ANFApp.model._product.Attribute = Backbone.Model.extend({
		default : {
			"name":null,
			"description":null,
			"value":null,
			"sequence":0,
			"valueSequence":0
		}
	}); 

	ANFApp.model._product.Price = Backbone.Model.extend({
		default : {
			list : {
				raw : 0,
				formated: "$0.00"
			},
			offer : {
				raw : 0,
				formated: "$0.00"
			},
			priceFlag: "1"
		}
	}); 

	ANFApp.model._product.Sku = Backbone.Model.extend({
		default : {
			"descriptiveAttrs":{},
			"longSku":"",
			"price" : new ANFApp.model._product.Price(),
			"prodImg":"",
			"shortSku":"",
			"swatchSequence":"01",
			"taxItemType":"CLT",
			"definingAttrs" : [],
			"itemId":"",
			"inventory":{  
				"inventoryStatus":"Unavailable",
				"inventory":0,
				"published":false
			},
			"priceFlag":"1"
		}
	}); 

	ANFApp.model._product.Product = Backbone.Model.extend({
			default: {
				"productId":"",
				"name":"",
				"collection":"",
				"longDesc":"",
				"shortDesc":"",
				"isGiftCard":false,
				"ofpImage":"1",
				"modelBackground":"default",
				"priceFlag":"1",
				"crossSellProductIds":[],
				"sizeChartSeq":"1",
				"displaySoldOut":false,
				"published":false,
				"price" : null,
				"swatchAttrId":"Color",
				"defaultSwatchSequence":"",
				"swatchSequences":[],
				"swatchSequencesExcludeSoldOut":[],
				"productAttrs":[],
				"productAttrsComplex":{},
				"items":[],
				"newArrival": false,
				"maxPurchaseQty": 2,
				"loadDate":""
			}
	}); 

	ANFApp.model._product.ATB = ANFApp.model._product.Product.extend({
		colorMap : {},
		sizeMap : {},
		initialize: function(model) {
			var items = model.items.toArray(),
				avaiableSizeCollection = new Backbone.Collection(null,{
					model : ANFApp._global.model.Radio
				}),
				avaiableColorCollection = new Backbone.Collection(null,{
					model : ANFApp._global.model.Radio
				});

			this.colorMap = _.groupBy(items, function(item) {
				return item.get('swatchSequence');
			});

			this.sizeMap = _.groupBy(items, function(item) {
				var sizeAttribute = item.get('definingAttrs').findWhere({"name": "Size"});
				return sizeAttribute.get('value');
			});


			_.keys(this.colorMap).forEach(function(key) {
				var item = _.first(this.colorMap[key]);
				avaiableColorCollection.add({
					disabled : false,
					selected : (model.currentSelectedSeq === key),
					text : item.get('definingAttrs').findWhere({"name": "Color"}).get('value'),
					value : key,
					name : "size"
				})
			}, this);

			avaiableSizeCollection.add(
				_.keys(this.sizeMap).map(function(key) {
					var item = _.first(this.sizeMap[key]);

					return {
						disabled : false,
						selected : false,
						text : item.get('definingAttrs').findWhere({"name": "Size"}).get('value'),
						value : "",
						name : "size"
					};
				 }, this)
			 );

			this.set("avaiableSizeCollection", avaiableSizeCollection);
			this.set("avaiableColorCollection", avaiableColorCollection);

			return this;
		},
		default : {
			currentSelectedSize: null,
			currentSelectedSeq : null    		
		}
	});









