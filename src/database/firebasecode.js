var firebase = require ("firebase/app");
require ("firebase/auth");
require ("firebase/analytics")
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      var firebaseConfig = {
        apiKey: "AIzaSyDh2wGnZF4LQK0MZ44gXDJb1rC-RFyL-mg",
        authDomain: "opli-949f9.firebaseapp.com",
        databaseURL: "https://opli-949f9.firebaseio.com",
        projectId: "opli-949f9",
        storageBucket: "opli-949f9.appspot.com",
        messagingSenderId: "237592635712",
        appId: "1:237592635712:web:a46524cfffcd123f29b2a5",
        measurementId: "G-250N8H7FLZ"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

      //Firebase auth
      var mAuth = firebase.auth();
      //obtiene el current user
      function usuarioReciente(){
        return mAuth.currentUser;
      }
      var email, password, error;
      //crear un usuario nuevo
      function registrar (email,password) {
        mAuth.createUserWhitEmailAndPasword(email,password).catch(function(error){
          var errorCode = error.code;
          var errorMessage = errorCode;
          if (errorCode == 'auth/weak-password') {
            alert('La contraseña es muy debil');
          } else {
            alert(errorMessage);
          }
        });
      }
      //manda correo de verificacion
      function emailVerification (currentUser){
        currentUser.sendEmailVerification().then(function(){
          alert ("Correo de verificacion enviado al email");
        });
      }

      //verifica si hay un usuario activo

