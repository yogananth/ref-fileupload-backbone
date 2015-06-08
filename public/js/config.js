'use strict';

requirejs.config({
    baseUrl: '/js',

    paths: {
        'jquery'        :   '../components/jquery/dist/jquery.min',
        'backbone'      :   '../components/backbone/backbone-min',
        'underscore'    :   '../components/underscore/underscore-min',
        'dust'          :   '../components/dustjs-linkedin/dist/dust-full.min',
        'BaseView'      :   'views/baseView'
    },

    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },

        'bootstrap': {
            deps: ['jquery']
        },

        'dust': {
            exports: "dust"
        }        
    }
})