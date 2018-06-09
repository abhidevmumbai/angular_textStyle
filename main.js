angular.module('textEditor', [])
    .controller('editorController', function() {
        this.selectLimit = 2;
        this.editorText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque eros elementum convallis congue. Suspendisse egestas risus sed lacus mollis, at pulvinar ipsum viverra. Sed bibendum lacus scelerisque arcu suscipit, eu blandit dolor facilisis. Quisque pharetra sagittis rhoncus. Vivamus felis nisl, tincidunt non nisi at, venenatis pretium arcu. Donec hendrerit id urna malesuada scelerisque. Nullam laoreet lobortis venenatis. Quisque blandit dolor quis dignissim pulvinar. Proin sodales quis est ac gravida.';

        // Style update handler
        this.onStyleUpdate = function(styles) {
            this.selectedStyle = styles;
        }
    });