( function() {
    'use strict';

    function ShotCtrl( $scope, ShotMdl  ) {

        // :: ATRIBUTOS

        /**
         * Camada com regras de View.
         * @access public
         */
        var view = {
            shots: {},
            shotSelecionado: ShotMdl.model.shotSelecionado || {}
        };

        // :: MÉTODOS

        /**
         * @access public
         */
        function visualizarShot ( shot ) {

            ShotMdl.model.shotSelecionado = shot;
            window.location.href = 'shot.html';

        }

        function listarShotPopulares() {

            ShotMdl.listarShotPopulares( function( response ) {

                view.shots = response;

            } );

        }

        listarShotPopulares();


        console.log(ShotMdl.model);

        /**
         * Exposição de dados para as views
         */
        angular.extend( this, {
            // :: VIEW
            view: view,

            // :: METODO
            visualizarShot: visualizarShot,

        } );
    }

    ShotCtrl.$inject = [ '$scope', 'ShotMdl' ];

    angular
        .module( 'appshot' )
        .controller( 'ShotCtrl', ShotCtrl );
} )();
