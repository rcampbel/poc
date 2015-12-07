import DS from 'ember-data';

const modelNameFromPayloadKeyLkup = {};
const keyForAttributeLkup = {};
const keyForRelationshipLkup = {};

export default DS.JSONSerializer.extend({
	primaryKey: "itemId",
	modelNameFromPayloadKey: function(payloadKey) {
		return this._super(modelNameFromPayloadKeyLkup[payloadKey] || payloadKey);
	},
	keyForAttribute: function(attr, method) {
		return keyForAttributeLkup[attr] || attr;
	},
	keyForRelationship: function(key, relationship, method) {
		return keyForRelationshipLkup[key] || key;
	}
});