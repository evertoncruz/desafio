( function() {
    'use strict';

    function ImagemMdl(  $http ) {

        // :: ATRIBUTOS

        var model = {
            imagens: [],
            imagemSelecionada: {}
        };

        // :: MÉTODOS

        /**
         * @access public         
         */
        function listarImagem( successCallback, finallyCallback ) {
            if ( model.imagens.length ) {
                return;
            }

            var token = '0411e3d34224560700c14930f890bc5b944907552c91c6b8323a4b76fadb7580';

            $http.get( "https://api.dribbble.com/v1/shots/?access_token=" + token )
                .success( function(  response ) {
                    angular.copy( response, model.imagens );
                } )
                .error( function() {
                    alert( 'Não foi possível carregar a relação de imagens. Tente novamente mais tarde!' );
                } )
                .finally( function() {
                    finallyCallback && finallyCallback();
                } );
            }

            // :: EXPOSIÇÃO DE DADOS

        /**
         * Exposição de dados para as controllers
         */
        return {
            // :: ATRIBUTOS
            model: model,

            // :: MÉTODOS
            listarImagem: listarImagem
        };

       }




    ImagemMdl.$inject = [ '$http' ];

    angular
        .module( 'appImagem' )
        .factory( 'ImagemMdl', ImagemMdl );

})();
