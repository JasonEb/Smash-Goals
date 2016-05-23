var React = require('react');

var SmashForm = React.createClass({
  render: function () {
    return (
      <div className="list">

        <h3 className="list-header">Special</h3>

        <ul className="list-items">
          <li>Fireball</li>
          <li>Green Missile</li>
          <li>Super Jump Punch</li>
          <li>Luigi Cyclone</li>
          <li>
            <input className="list-form" type="text" placeholder="Enter a request">
            </input>
          </li>
        </ul>

      </div>
    );
  }
});

module.exports = SmashForm;
