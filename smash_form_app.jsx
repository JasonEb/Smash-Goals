var React = require('react'),
    ReactDOM = require('react-dom'),
    SmashForm = require('./components/smash_form.jsx');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<SmashForm />, document.getElementById('main'));
});

SmashListStore = require('./stores/smash_list_store.js');
