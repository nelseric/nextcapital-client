export default Ember.Route.extend({
  // The code below is the default behavior, so if this is all you
  // need, you do not need to provide a setupController implementation
  // at all.
  setupController: function(controller, model) {
    controller.set('model', model);
    this.set("user", this.store.find("user", 1))
    this.set("id", model.id)
  }
});