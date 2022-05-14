// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBJcwWM0AWemdkdo_0N2nxR-I39uNivWBM",
      authDomain: "kwitter-4f7c3.firebaseapp.com",
      databaseURL: "https://kwitter-4f7c3-default-rtdb.firebaseio.com",
      projectId: "kwitter-4f7c3",
      storageBucket: "kwitter-4f7c3.appspot.com",
      messagingSenderId: "736138782963",
      appId: "1:736138782963:web:18c159d94894370c46ef86"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row = "<div class='room_name' id="+Room_names+ "onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
     
document.getElementById("output").innerHTML += row;
//End code
      });});}
getData();

function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room_name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";

}
 function redirectToRoomName(name){
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
 }

 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");

       window.location.replace("index.html");
 }