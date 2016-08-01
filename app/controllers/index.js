import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPerson(){
      const newEntry = {
        first: this.first || '',
        last: this.last || '',
        address: this.address || '',
        phone: this.phone || '',
      }

      fetch('https://tiny-tn.herokuapp.com/collections/al-people', {
        method: 'post',
        body: JSON.stringify(newEntry),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json())
        .then((person) => {
          this.set('model', [...this.model, person]);
        });
    }
  }
});
