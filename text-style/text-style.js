(function(angular) {
    function textStyleController($scope, $element, $attrs, $filter) {
        let $ctrl = this;

        $ctrl.$onInit = function() {
            $ctrl.styles = [{
                    text: 'Bold',
                    selected: false
                },
                {
                    text: 'Italic',
                    selected: false
                },
                {
                    text: 'Underline',
                    selected: false
                }
            ];
            
            // console.log($ctrl.selectLimit)
            // all options are selectable if min limit is not specified
            $ctrl.selectLimit = $ctrl.selectLimit || $ctrl.styles.length;
            $ctrl.selectedStyle = [];
        }

        $ctrl.onUpdate = function(opt) {
            // Check the min selection limit and also check if the selected option is apply or remove
            if ($ctrl.selectedStyle.length >= $ctrl.selectLimit && !opt.selected) {
                alert(`Only ${$ctrl.selectLimit} style(s) can be applied at a time.`);
                return;
            }
            opt.selected = !opt.selected;
            $ctrl.selectedStyle = [];
            $ctrl.styles.map((el, idx) => {
                el.selected === true ? $ctrl.selectedStyle.push(el.text) : false;
            });
            // call the callback method from the binding
            $ctrl.onStyleUpdate({ styles: $ctrl.styles });
        }
    }

    angular.module('textEditor')
        .component('textStyle', {
            templateUrl: './text-style/text-style.html',
            controller: textStyleController,
            bindings: {
                selectLimit: '<',
                onStyleUpdate: '&'
            }
        });
})(window.angular);