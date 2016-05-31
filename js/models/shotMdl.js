( function() {
    'use strict';

    function ShotMdl(  $http ) {

        // :: ATRIBUTOS

        var model = {
            shots: {},
            shotSelecionado: {}
        };

        // :: MÉTODOS

        /**
         * @access public
         * @param {sinistro} numero do sinistro
         */
        function listarShotPopulares( successCallback, finallyCallback ) {

            var token = 'b3cc92325f54afe8842b3971aad00d7048ae31e73685e574a9df910d92fe22b9';

            $http.get( "https://api.dribbble.com/v1/shots/?access_token=" + token )
                .success( function(  response ) {

                    successCallback && successCallback( response );

                } )
                .error( function(){} )
                .finally( function(){} );
            }

            // :: EXPOSIÇÃO DE DADOS

        /**
         * Exposição de dados para as controllers
         */
        return {
            // :: ATRIBUTOS
            model: model,

            // :: MÉTODOS
            listarShotPopulares: listarShotPopulares
        };

       }




    ShotMdl.$inject = [ '$http' ];

    angular
        .module( 'appshot' )
        .factory( 'ShotMdl', ShotMdl );

})();
