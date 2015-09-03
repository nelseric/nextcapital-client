import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  description: attr(),
  is_complete: attr(),
  user: DS.belongsTo('user')
});
