var React = require('react');

var Item = React.createClass({

  render: function() {
    var item = this.props.item;
      return (
        <li contentEditable={true}>{item.description}
        </li>
      )
  }
})

module.exports = Item;
