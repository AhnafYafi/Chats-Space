var firebaseConfig = {
    apiKey: "AIzaSyDZRTMbD3IG9V6ObFg83YJpk8UX-xN5kC0",
    authDomain: "chats-space.firebaseapp.com",
    databaseURL: "https://chats-space-default-rtdb.firebaseio.com",
    projectId: "chats-space",
    storageBucket: "chats-space.appspot.com",
    messagingSenderId: "869586564008",
    appId: "1:869586564008:web:228dd8262f0c742bb6a39d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML="Welcome "  + user_name + "!";

function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name" , room_name);
    window.location="chats space_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
//End code
    });
});
}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location="chats space_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="chats space.html";
}