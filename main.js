// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp1DlNfvBpN5hezpp0KJ-n8UmdjwYEyA8",
  authDomain: "kwitter-6c95f.firebaseapp.com",
  databaseURL: "https://kwitter-6c95f-default-rtdb.firebaseio.com",
  projectId: "kwitter-6c95f",
  storageBucket: "kwitter-6c95f.appspot.com",
  messagingSenderId: "1027815791470",
  appId: "1:1027815791470:web:64afdba8bbb95e0061bf7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function addUser(){
	user_name=document.getElementById("user_name").value;
	firebase.database().ref("/").child(user_name).update({purpose:"adding user"})
}