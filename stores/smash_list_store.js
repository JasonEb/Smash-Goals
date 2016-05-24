var _smash_list_items = [];
var _callbacks = [];

var SmashListStore = {
  changed: function () {
    //this should be called whenever the collection changes.
    //Calls every callback in _callbacks
      _callbacks.forEach(function(callback){
        callback();
      });
  },

  addChangedHandler: function (callback) {
    _callbacks.push(callback);
  },

  removeChangedHandler: function (callback) {
    var idx = _callbacks.indexOf(callback);

    if ( idx !== -1 ) {
      _callbacks.splice(idx, 1);
    }
  },

  //CRUD
  all: function () {
    return _smash_list_items.slice();
  },

  fetch: function () {
    _smash_list_items = [
        {id: 1, description: "Fireball gimp"},
        {id: 2, description: "Luigi Missle misfire read"},
        {id: 3, description: "Super Jump Punch OoS punish"}
      ];

    SmashListStore.changed();
  },

  updateSmashList: function (id, payload) {
    var smash_list_item = SmashListStore.find(id);

    if (smash_list_item !== -1 ) {
      $.ajax({
        url: 'api/smash_list_items/' + id,
        data: {smash_list_item: payload},
        type: 'PATCH',
        success: function (result) {
          smash_list_item.goal = result.goal;
          SmashListStore.changed();
        }
      });
    }
  },

  find: function (id) {
    var smash_list_item, i;
    for(i = 0; i < _smash_list_items.length; i++){
      smash_list_item = _smash_list_items[i];

      if (smash_list_item.id === id) {
        return smash_list_item;
      }
    }

    return -1;
  }
};

module.exports = SmashListStore;
