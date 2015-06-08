'use strict';

define(['jquery', 'backbone', 'BaseView'], function($, Backbone, BaseView) {
    
    var AppRouter = Backbone.Router.extend({

        routes: {
            'about'         : 'showAbout'
        },

        showAbout: function() {

            var AboutView = BaseView.extend({
                el          :   '#dynaSection',
                template    :   'about'
            });

            var aboutView = new AboutView();
            aboutView.render();
        }

    });

    return AppRouter;
})