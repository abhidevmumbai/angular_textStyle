(function(angular) {
    function textStyleController($scope, $element, $attrs, $filter) {
        let $ctrl = this;
        $ctrl.styles = [{
                text: 'Bold',
                selected: false
            },
            {
                text: 'Italic',
                selected: false
            },
            {
                text: 'Underlined',
                selected: false
            }
        ];
        $ctrl.$onInit = function() {
        }

        $ctrl.onUpdate = function(opt) {
        	$ctrl.selectedStyle = [];
        	$ctrl.styles.map((el, idx) => {
        		el.selected === true ? $ctrl.selectedStyle.push(el.text) : false;
        	});
        	// $ctrl.onStyleUpdate({styles: $ctrl.selectedStyle});
        	$ctrl.onStyleUpdate({styles: $ctrl.styles});
        }
    }

    angular.module('textEditor')
        .component('textStyle', {
            templateUrl: './text-style/text-style.html',
            controller: textStyleController,
            bindings: {
                singleSelect: '<',
                onStyleUpdate: '&'
            }
        });
})(window.angular);