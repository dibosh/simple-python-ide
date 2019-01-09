import template from './home.html';

function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('home', {
    url: '',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    template: template
  });

};

export default HomeConfig;