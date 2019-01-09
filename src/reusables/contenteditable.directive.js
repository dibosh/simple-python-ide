import angular from 'angular';

// collected from https://stackoverflow.com/questions/28583651/contenteditable-with-ng-model-doesnt-work

export default {
  name: 'contenteditable',
  definition: ['$sce', function ($sce) {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function (scope, element, attrs, ngModel) {
        if (!ngModel) return;

        ngModel.$render = function () {
          element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
        };

        element.on('blur keyup change', function () {
          scope.$evalAsync(read);
        });
        read(); 
        
        function read() {
          var html = element.html();
          if (attrs.stripBr && html == '<br>') {
            html = '';
          }
          ngModel.$setViewValue(html);
        }
      }
    };
  }]
};