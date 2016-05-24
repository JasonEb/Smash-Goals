var React = require('react');

var SmashForm = React.createClass({
  getInitialState: function () {
    return ({
      items: SmashListStore.all()
    });
  },

  smashListChanged: function () {
    var self = this;
    self.setState({ items: SmashListStore.all()})
  },

  componentDidMount: function () {
    SmashListStore.addChangedHandler(this.smashListChanged);
    SmashListStore.fetch();
  },

  render: function () {
    var smashListItems = this.state.items.map(function(item, idx){
        return <li key={idx}>{item}</li>;
    });

    debugger
    return (
      <div className="list">

        <h3 className="list-header">Special</h3>

        <ul className="list-items">
          {smashListItems}
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
