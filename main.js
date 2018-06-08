angular.module('textEditor', [])
    .controller('editorController', function() {
        this.editorText = 'Welcome to Angular 1.6.5';

        this.onStyleUpdate = function(styles) {
            this.selectedStyle = styles;
            // console.log(styles);
            styles.map((el) => {
                // console.log(el);

                // Check if the text is already formatted along with the selected option
                if (el.selected) {
                	if(!document.queryCommandState(el.text)) {
                		document.execCommand(el.text, false, '');
                	} else {
                		return;
                	}
                } else {
                	if(document.queryCommandState(el.text)) {
                		document.execCommand(el.text, false, '');
                	} else {
                		return;
                	}
                }
            });
        }
    });