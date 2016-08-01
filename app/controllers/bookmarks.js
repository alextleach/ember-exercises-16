import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addBookmark(){
      const newBookmark = {
        nickname: this.nickname || '',
        url: this.url || '',
      }

      fetch('https://tiny-tn.herokuapp.com/collections/al-bookmarks', {
        method: 'post',
        body: JSON.stringify(newBookmark),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json())
        .then((bookmark) => {
          this.set('model', [...this.model, bookmark]);
        });
    }
  }
});
