import angular from 'angular';

// reusables module
let reusables = angular.module('reusables', [require('angular-sanitize')]);

// components
import highlightedInputComponentConfig from './highlighted.input.component';
reusables.component(
  highlightedInputComponentConfig.name, 
  highlightedInputComponentConfig.definition
);

// directives

import contentEditableDirectiveConfig from './contenteditable.directive';
reusables.directive(
  contentEditableDirectiveConfig.name, 
  contentEditableDirectiveConfig.definition
);

export default reusables;