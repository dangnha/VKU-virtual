// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyDUN72bR1bk7MrFjsGCnE5gpp9dkz3rbtU",
    authDomain: "formtest293.firebaseapp.com",
    databaseURL: "https://formtest293.firebaseio.com",
    projectId: "formtest293",
    storageBucket: "formtest293.appspot.com",
    messagingSenderId: "843774785344",
    appId: "1:843774785344:web:156550203b20eaed21aca5"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}