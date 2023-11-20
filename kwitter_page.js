//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCDKGdVw8HuohiRrylXJ0GKAyGZ6l9PIoY",
      authDomain: "kwitter-1e780.firebaseapp.com",
      databaseURL: "https://kwitter-1e780-default-rtdb.firebaseio.com",
      projectId: "kwitter-1e780",
      storageBucket: "kwitter-1e780.appspot.com",
      messagingSenderId: "1046272879512",
      appId: "1:1046272879512:web:b3ecc35e8722e60fbb19ed"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 function send(){
      msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
       }),
     document.getElementById("msg").value="";
 }
