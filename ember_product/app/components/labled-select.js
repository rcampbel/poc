import Ember from 'ember';

export default Ember.Component.extend({
	actions : {
		updateValue: function(event){
			this.set('selected', event.target.value);
			console.log(event.target.value);
		}
	}
});
