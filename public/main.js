// instantiate module:
angular.module('app', [])
  .config(() => {
    // init firebase
    firebase.initializeApp({
    	apiKey: "AIzaSyB04vn6MznapzPPCL4epJXx5NLAh2xkp0Q",
    	authDomain: "votes-32968.firebaseapp.com",
    	databaseURL: "https://votes-32968.firebaseio.com",
    	storageBucket: "votes-32968.appspot.com"

    });
  })
  .controller('MainCtrl', function ($scope) {
    const main = this;

    main.heading = 'Rock the Vote!!!';

    main.curry = function () {
      // fb curry +1
      firebase.database().ref('/votes/curry')
        .set(main.curryCount + 1);
    };
    main.bron = function () {
      // fb lebron +1
      firebase.database().ref('/votes/bron')
        .set(main.bronCount + 1);
    };
    firebase.database().ref('/votes').on('value', (snap) => {
      const data = snap.val(); // {curry: 1, bron: 2}
      main.curryCount = data ? data.curry : 0 ;
      main.bronCount = data ? data.bron : 0;
      $scope.$apply();
    });
  });
		// firebase.database().ref('/votes').on('value', (snap) => {
		// 	console.log(snap.val());
		// 	const data = snap.val();
		// 	main.heading = data;
		// 	//callbacks don't trigger digest cycle in angular.
		// 	//so need scope, here and as arg in MainCtrl function, above.
		// 	$scope.$apply();
		// })

		// 	firebase.database().ref('/votes').on('child_added', (snap) => {
  //     const data = snap.val()
  //     console.log('child_added', data);
  // 		// main.heading = data
  //     // $scope.$apply()
  //   })

  //     firebase.database().ref('/votes').on('child_changed', (snap) => {

  //     const data = snap.val()
  //     console.log('child_changed', data)
  //     // main.heading = data
  //     // $scope.$apply()
  //   })



