( function() {
    'use strict';

    /**
     * Classe com diversos utilitários para auxiliar as VMs.
     * @access public
     */
    function utils( ngDialog ) {

        /**
         * Abre um modal com template remoto.
         * @access public
         */
        function openModal( templateUrl, className ) {

            ngDialog.open( {
                template: templateUrl,
                className: className || ''
            } );
        }



        return {
            openModal: openModal,
            closeAllDialogs: ngDialog.closeAll
        };
    }

    utils.$inject = [ 'ngDialog' ];

    angular
        .module( 'appshot' )
        .factory( 'utils', utils );
} )();
