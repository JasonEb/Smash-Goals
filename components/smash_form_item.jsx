var React = require('react'),
    ReactDOM = require('react-dom');

var Item = React.createClass({
  render: function() {
    var itemClass = this.props.completed ? 'item completed' : 'item'
    return (
      <li className={itemClass}>
        <span className='complete-button' onClick={this.handleComplete}>{'\u2714'}</span>
        <div className='description'>{this.props.description}</div>
        <span className='delete-button'>{'\u2718'}</span>
      </li>
    )
  },

  handleComplete: function() {
    ListStore.toggleCompleteness(this.props.id)
  }
})

module.exports = Item;
