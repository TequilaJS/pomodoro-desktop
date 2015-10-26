(function() {
    'use strict';

    angular
        .module('window.manager')
        .directive('titleBar', titleBar);

    titleBar.$inject = [];

    function titleBar () {
        var directive = {
            bindToController: true,
            controller: TitleBarController,
            controllerAs: 'vmTitleBar',
            link: link,
            restrict: 'E',
            scope: {},
            templateUrl: 'src/window-manager/title-bar.template.html'
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    function TitleBarController () {
        var gui = require('nw.gui'),
            win = gui.Window.get(),
            vmTitleBar = this;

        (function init(){
            /* Frameless window has no shadow #2903
                See https://github.com/nwjs/nw.js/issues/2903
             */
            win.setTransparent(!win.isTransparent);
            win.setTransparent(!win.isTransparent);
        })();

        vmTitleBar.closeWindow = closeWindow;
        vmTitleBar.minimizeWindow = minimizeWindow;

        function closeWindow() {
            win.close();
        }

        function minimizeWindow() {
            win.minimize();
        }
    }


})();