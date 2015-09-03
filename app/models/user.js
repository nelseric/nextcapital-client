import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  email: attr(),
  password: attr(),
  todos: DS.hasMany('todo')
});
