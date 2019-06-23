// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBvniWR1hb3iZQ_uZNemzIq2wjBUm4NYFA",
    authDomain: "portfolio-b4d6a.firebaseapp.com",
    databaseURL: "https://portfolio-b4d6a.firebaseio.com",
    projectId: "portfolio-b4d6a",
    storageBucket: "",
    messagingSenderId: "226076677190",
    appId: "1:226076677190:web:a7c097e1cd6a12a0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



var messagesRef = firebase.database().ref('messages');

var input = document.getElementsByTagName('input')[0];
var div = document.getElementById('hellomsg');
input.onkeyup = function() {
    div.innerHTML = "Hello "+this.value+"!";
};
console.log("rajhb");
document.getElementById('submission').addEventListener('click', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('msg');
    console.log(name,email,phone,message);

    saveMessage(name, email, phone, message);

}

function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email:email,
        phone:phone,
        message:message
    });
}