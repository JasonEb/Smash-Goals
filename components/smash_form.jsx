var React = require('react');

var SmashForm = React.createClass({
  render: function () {
    return (
      <div className="list">

        <h3 className="list-header">Special</h3>

        <ul className="list-items">
          <li>Fireball gimp</li>
          <li>Green Missile Misfire read</li>
          <li>Super Jump Punch OoS punish</li>
          <li>Luigi Cyclone gimp</li>
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
