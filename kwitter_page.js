//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBrMCDrC5pnn0tJpHiLrwRSFERW5cAoiNs",
      authDomain: "kwitter-app-350f7.firebaseapp.com",
      databaseURL: "https://kwitter-app-350f7-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-350f7",
      storageBucket: "kwitter-app-350f7.appspot.com",
      messagingSenderId: "400175638313",
      appId: "1:400175638313:web:c88b00ff942e187c3db938"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function send(){
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0

            });
            document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
