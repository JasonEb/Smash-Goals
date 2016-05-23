var React = require('react'),
    ReactDOM = require('react-dom');

var Item = React.createClass({
  render: function() {
    return (
      <li className={itemClass}>
      </li>
    )
  },

  handleComplete: function() {
  }
})

module.exports = Item;
