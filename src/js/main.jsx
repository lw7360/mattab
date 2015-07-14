require('../../bower_components/material-design-lite/material.min.css');
require('../../bower_components/material-design-lite/material.min.js');
require('../styl/styles.styl');


const React = require('react');

const Header = require('./components/Header.jsx');
const Page = require('./components/Page.jsx');

const header = document.getElementById('header');
const container = document.getElementById('container');

React.render(<Header/>, header);
React.render(<Page/>, container);
