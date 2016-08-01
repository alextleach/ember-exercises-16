import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return fetch ('https://tiny-tn.herokuapp.com/collections/blogs')
      .then((res) => res.json());
  }
});
