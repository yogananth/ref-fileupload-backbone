'use strict';

define( ['jquery', 'backbone', 'dust'], function($, Backbone, dust) {
    var BaseView = Backbone.View.extend({
        template        :   null,

        initialize: function(options) {
            if (options) {
                this.template       =   options.template;
                this.el             =   options.el ? options.el : this.el;
                this.model          =   options.model ? options.model : {};
            }
        },

        render: function(callback) {
            var view = this;

            var templatePath = '/templates/US/en/' + this.template + '.js';

            require([templatePath], function(tmpl) {
                var data = (view.model instanceof Backbone.Model) ? view.model.toJSON() : JSON.stringify(view.model);

                dust.render (view.template, data, function(err, out) {
                    if (err) {
                        console.error (err);
                        console.log (view);
                    } else {
                        view.$el.html(out);
                    }
                });
            });
        }
    });

    return BaseView;
});