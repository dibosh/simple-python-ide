import angular from 'angular';
import '@uirouter/angularjs';
import 'bootstrap/dist/css/bootstrap.css';
import './home';
import './reusables';

// Create and bootstrap application
const requires = [
  'ui.router',
  'home',
  'reusables'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);