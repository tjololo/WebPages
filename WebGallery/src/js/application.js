define([
    'views/image-view',
    'views/menu-view'
],
    function (ImageView, MenuView) {
        "use strict";

        return {
            initialize: function () {

                var image = new ImageView({
                    el: document.getElementById('content')
                });
                var menu = new MenuView({
                    el: document.getElementById('menu')
                });
            }
        };
    }
);