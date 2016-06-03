( function() {
    'use strict';

    function ImagemCtrl( $scope, ImagemMdl, $location  ) {

        // :: ATRIBUTOS

        /**
         * Camada com regras de View.
         * @access public
         */
        var view = {
            imagens: ImagemMdl.model.imagens,
            imagemSelecionada: ImagemMdl.model.imagemSelecionada || {}
        };

        // :: MÉTODOS

        /**
         * @access public
         */
        function visualizarImagem ( imagem ) {

            ImagemMdl.model.imagemSelecionada = imagem;
            $location.path( '/detalhes' );

        }

        function listarImagem() {
            ImagemMdl.listarImagem();
        }

        listarImagem();

        /**
         * Exposição de dados para as views
         */
        angular.extend( this, {
            // :: VIEW
            view: view,

            // :: METODO
            visualizarImagem: visualizarImagem,

        } );
    }

    ImagemCtrl.$inject = [ '$scope', 'ImagemMdl', '$location' ];

    angular
        .module( 'appImagem' )
        .controller( 'ImagemCtrl', ImagemCtrl );
} )();
