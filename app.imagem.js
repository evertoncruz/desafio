angular.module( "appImagem",  ['ngRoute'] )
    .config(
        function( $routeProvider  ) {
            'use strict';

            $routeProvider
            .when( '/', {
                    templateUrl: 'views/imagens.html',
                    controller: 'ImagemCtrl',
                    controllerAs: 'ImagemVM'
                } )
            .when( '/detalhes', {
                templateUrl: 'views/detalhes.html',
                controller: 'ImagemCtrl',
                controllerAs: 'ImagemVM'
            } );
        }
    );