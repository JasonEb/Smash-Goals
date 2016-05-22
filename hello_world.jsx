var React = require('react');
var ReactDOM = require('react-dom');
var SmashForm = require('./smash_form.jsx');

var MyComponent = React.createClass({
  render: function () {
    return(
      <div>Testing my component</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<SmashForm />, document.getElementById('main'));
});
