'use strict';


require(['config'], function (config) {

    require(['jquery', 'router'], function($, AppRouter) {

        var app = {
            initialize: function () {
                var router = new AppRouter();
                Backbone.history.start({
                    pushState: true
                });

                // Prevent server redirects, and enable client-side routing
                $(document).on('click', 'a[data-client-route]', function(evt) {
                    evt.preventDefault();
                    router.navigate('about', true);
                });
            }
        };

        app.initialize();


    });

});
