import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

class HomeCtrl {
  constructor() {
    this.results = [];
    this.codeContent = '';
    this.codeRunURL = 'http://localhost:8080/run';
  }

  _makeRunRequest(sourceCode) {
    return axios.post(this.codeRunURL, {code: sourceCode});
  }

  onCodeContentUpdate(content) {
    this.codeContent = content;
  }

  runCode() {
    if (!isEmpty(this.codeContent.trim())) {
      this._makeRunRequest(this.codeContent)
        .then((response) => {
          this.results = response.data;
        })
        .catch(err => console.log(err));
    }
  }
}

export default HomeCtrl;