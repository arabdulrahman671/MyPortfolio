 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBvniWR1hb3iZQ_uZNemzIq2wjBUm4NYFA",
    authDomain: "portfolio-b4d6a.firebaseapp.com",
    databaseURL: "https://portfolio-b4d6a.firebaseio.com",
    projectId: "portfolio-b4d6a",
    storageBucket: "portfolio-b4d6a.appspot.com",
    messagingSenderId: "226076677190",
    appId: "1:226076677190:web:a7c097e1cd6a12a0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('messages');

document.getElementById('submission').addEventListener('submit', submitForm);

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
 // Show alert
 document.querySelector('.alert').innerHTML="Your Message has been sent " +name+"! </br> Thanks for contacting me";
 document.querySelector('.alert').style.display = 'block';


 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.alert').style.display = 'none';
 },3000);

 // Clear form
 document.getElementById('contactForm').reset();
}

function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
    var d = new Date();
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email:email,
        phone:phone,
        message:message,
        date:d.toDateString(),
    });
}