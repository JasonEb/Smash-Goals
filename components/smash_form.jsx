var React = require('react'),
    SmashListStore = require('../stores/smash_list_store.js');

var SmashForm = React.createClass({
  getInitialState: function () {
    return ({
      items: []
    });
  },

  smashListChanged: function () {
    var self = this;
    self.setState({ items: SmashListStore.all()});
  },

  componentDidMount: function () {
    SmashListStore.addChangedHandler(this.smashListChanged);
    SmashListStore.fetch();
  },

  render: function () {
    var items = [
        {id: 1, description: "Fireball gimp"},
        {id: 2, description: "Luigi Missle misfire read"},
        {id: 3, description: "Super Jump Punch OoS punish"}
      ];

    return (
      <div className="list">

        <h3 className="list-header">Special</h3>

        <ul className="list-items">
          {
            items.map(function (item) {
              return <li key={item.id}>{item.description}</li>
            })
          }
          <li>
            <input className="list-form" type="text" placeholder="Enter a goal!">
            </input>
          </li>
        </ul>

      </div>
    );
  }
});

module.exports = SmashForm;
