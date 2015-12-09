 ANFApp = ANFApp || {};

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
    	defalut : {
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
        	defalut: {
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