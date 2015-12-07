import Ember from 'ember';
import DS from 'ember-data';
var x = [];
export default DS.Model.extend({
	sku : DS.hasMany('sku'),
	collection : DS.attr(),
	longDesc : DS.attr(),
	shortDesc : DS.attr(),
	lowPriceFmt : DS.attr(),
	highPriceFmt : DS.attr(),
	swatchSeq : DS.attr(),

	//computed attributes
	avaiableColors : Ember.computed('sku', function() {
		let skus = this.get('sku'),
			cSeq = this.get('swatchSeq'),
			touched = [],
			avaiableColors = [];

		return skus.reduce(function(pValue, cValue){
			let colorId = cValue.get('colorId'),
				colorName = cValue.get('colorName');

			if (!touched.contains(colorId)) {
				touched.push(colorId);
				pValue.push({
					value: colorId,
					text : colorName,
					selected : (cSeq === colorId)
				});
			}

			return pValue;

		}, []);
	}),
	avaiableSizes : Ember.computed('sku', 'swatchSeq', function() {
		let skus = this.get('sku');
		let sSeq = this.get('swatchSeq');

		return skus.filterBy('colorId', sSeq)
					.map(function(sku, index){
						return {
							value: sku.get('id'),
							text: sku.get('size')
						};
					})
					.sort(function (a, b) {
						return a.text > b.text;
					});
	}),
	action : {
		updateSeq: function() {}
	}

});
