var React = require('react');

var Item = React.createClass({
  handleClick: function(e) {
  },
  render: function() {
    var item = this.props.item;

    return (
      <li onClick={this.handleClick}>
        {item.description}
      </li>
    )
  }
})

module.exports = Item;
