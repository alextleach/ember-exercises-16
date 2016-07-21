import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deletePerson(person) {
      fetch('https://tiny-tn.herokuapp.com/collections/al-people/' + person._id, {
        method: 'delete',
      }).then(() => {
        const updatedList = this.model.filter((item) => {
          return item._id !== person._id;
        });

        this.set('model', updatedList);
      })
    },

    toggleForm() {
      this.toggleProperty('showForm');
    },
    addPerson() {

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
          this.setProperties({
              'first': '',
              'last': '',
              'address': '',
              'phone': ''
            });
          this.set('model', [...this.model, person]);
        });
    },
  }
});
