var React = require('react'),
    Item = require('./smash_form_item.jsx'),
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

  handleSubmit: function (e) {
    e.preventDefault();

    var newItem = {
      //assumming id is next here
      id: this.state.items.slice(-1)[0].id + 1,
      description: e.target.children[0].value,
      completed: false
    };

    SmashListStore.add(newItem);
    e.target.children[0].value = "";
  },

  render: function () {
    var items = this.state.items.map(function (item, idx) {
      return <Item key={idx} item={item}/>
    })

    return (
      <div className="list">

        <h3 className="list-header">Smash Goals</h3>

        <ul className="list-items">
          {items}
          <li>
            <form onSubmit={this.handleSubmit}>
              <input className="list-form" type="text" placeholder="Enter a goal!"/>
            </form>
          </li>
        </ul>

      </div>
    );
  }
});

module.exports = SmashForm;
