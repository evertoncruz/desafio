( function() {
    'use strict';

    function ShotMdl(  $http ) {

        // :: ATRIBUTOS

        var model = {
            shots: {}
        };

        // :: MÉTODOS

        /**
         * Lista o histórico de demandas do cliente
         * @access public
         */
        function listarShots( successCallback ) {

            var mensagemDeErro = 'Não foi possível carregar a lista de shots';

            var token = "b3cc92325f54afe8842b3971aad00d7048ae31e73685e574a9df910d92fe22b9";

            var url = "https://api.dribbble.com/v1/shots/?access_token=" + token;           

            $http.get( url )
                .success( function( response ) {

                    model.shots = response;
                    successCallback && successCallback();

                } )
                .error( function( erro ) {
                    console.log( erro );
                } )
                .finally( function() {

                } );
        }


        // :: EXPOSIÇÃO DE DADOS

        /**
         * Exposição de dados para as controllers
         */
        return {
            
            // :: ENTIDADE
            model: model,

            // :: MÉTODOS
            listarShots: listarShots

        };
    }

    ShotMdl.$inject = [ "$http" ];

    angular
        .module( "activities" )
        .factory( "ShotMdl", ShotMdl );

} )();
