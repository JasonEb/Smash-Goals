var React = require('react');

var Item = React.createClass({
  handleKeyDown: function(e) {
    var key = e.keyCode;
    var itemText = e.target.textContent;
    var deletable = (key === 8 || key === 46) && itemText.length <= 0

    if (deletable){
      e.preventDefault();
      SmashListStore.delete(this.props.item.id);
    }
  },

  render: function() {
    var item = this.props.item;
      return (
        <li contentEditable={true} onKeyDown={this.handleKeyDown}>
          {item.description}
        </li>
      )
  }
})

module.exports = Item;
