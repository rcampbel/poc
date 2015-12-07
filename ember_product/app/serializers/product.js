import DS from 'ember-data';


export default DS.JSONSerializer.extend({
	normalizeResponse : function (store, primaryModelClass, payload, id, requestType, isSingle) {
		return {
			data :{
				id : payload.productId,
				type : "product",
				attributes : {
					collection : payload.collection,
					longDesc : payload.longDesc,
					shortDesc : payload.shortDesc,
					lowPriceFmt : payload.lowPriceFmt,
					highPriceFmt : payload.highPriceFmt,
					swatchSeq : payload.defaultSwatchSequence
				},
				relationships : {
					sku : {
						data: payload.items.map(function(item){
							return {type : "sku", id : item.itemId};
						})
					}
				}
			},
			included : payload.items.map(function(item){
				return {
					type: "sku",
					id: item.itemId,
					attributes : {
						colorId : item.swatchSequence,
						colorName : item.definingAttrs.Color.value,
						size : item.definingAttrs.Size.value
					}
				};
			})
		};
	}
});









