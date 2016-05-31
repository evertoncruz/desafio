function ShotCtrl( $scope, $http ) {

    var token = "b3cc92325f54afe8842b3971aad00d7048ae31e73685e574a9df910d92fe22b9";

    $http.get( "https://api.dribbble.com/v1/shots/?access_token=" + token )
        .success( function( response ) {

            $scope.shots = response;

        } );

}

angular.module( "activities" ).controller( "ShotCtrl", ShotCtrl );