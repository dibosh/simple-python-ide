import angular from 'angular';
import 'prismjs/themes/prism.css';
import 'prismjs/prism.js';
import './style.css';
import template from './template.html';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';

class HighlightedInputController {
  constructor($element) {
    this.codeElement = angular.element($element).find('code');
  }

  $onInit() {
    this.input = {
      content: ''
    };
    // this will prevent onInputContentChange to be fired too many times on every
    // keystroke change 
    this.onInputContentChange = debounce(this.onInputContentChange, 300);
  }

  onInputContentChange() {
    if (!isEmpty(this.input.content)) {
      this.onContentUpdate({content: this.codeElement.text()});
    } 
  }
}


export default {
  name: 'highlightedInputComponent',
  definition: {
    bindings: {
      onContentUpdate: '&'
    },
    template,
    controller: HighlightedInputController
  }
};