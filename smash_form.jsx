var React = require('react');
var ReactDOM = require('react-dom');

var SmashForm = React.createClass({
  render: function () {
    return(
      <div class="smash-list">

        <div class="list-header">
          <section>Special</section>
          <section class="header-edge">[]</section>
        </div>

        <ul class="list-items">
          <li>&#8226; Fireball</li>
          <li>↔  Green Missile</li>
          <li>↑  Super Jump Punch</li>
          <li>↓  Luigi Cyclone</li>
        </ul>
      </div>
    );
  }
});

module.exports = SmashForm;
