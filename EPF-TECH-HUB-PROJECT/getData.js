// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMsWs-hROtkd3aThYPnqk06u6wEeIZClc",
    authDomain: "epf-tech-hub-project.firebaseapp.com",
    databaseURL: "https://epf-tech-hub-project-default-rtdb.firebaseio.com",
    projectId: "epf-tech-hub-project",
    storageBucket: "epf-tech-hub-project.appspot.com",
    messagingSenderId: "904912933370",
    appId: "1:904912933370:web:4432288e8cddb91a15d443"
  };

firebase.initializeApp(firebaseConfig);


// DATABASE COLLECTION REFERENCE
const formData = firebase.database().ref('Epf_HubDB');

// LISTEN FOR SUBMIT EVENT
document.getElementById('myform').addEventListener('submit', submitData);

// SUBMIT DATA
function submitData (e) {
    e.preventDefault();
    
    // GET VALUES
    var firstName =  getElementVal("firstName");
    var lastName =  getElementVal("lastName");
    var DateOfBirth =  getElementVal("DateOfBirth");
	var excel_file =  getElementVal("excel_file");
	
	sendData(firstName, lastName, DateOfBirth, excel_file);
	
	// DISPLAY ALERT IF DETAILS ARE SAVED SUCCESSFULLY
		document.querySelector('.alert').style.display = 'block';

	// HIDE ALERT
	setTimeout(function() {
		document.querySelector('.alert').style.display = 'none';
	}, 3000);
	
	
	// AFTER USER SUBMITS DETAILS, RESET FORM
	document.getElementById('myform').reset();
	
		
}


// SEND DATA TO FIREBASE
const sendData = (firstName, lastName, DateOfBirth, excel_file) => {
	var newHubDB = formData.push();
		
    newHubDB.set({
        firstName: firstName,
        lastName: lastName,
        DateOfBirth: DateOfBirth,
		excel_file: excel_file
    })
};


	
const getElementVal = (id) => {
	return document.getElementById(id).value;
};


// AFTER USER SUBMITS DETAILS, RESET FORM
document.getElementById('myform').reset();


// DISPLAY GREETING MESSAGE
document.querySelector('.greeting').style.display = 'block';

// HIDE GREETING MESSAGE
setTimeout(function() {
    document.querySelector('.greeting').style.display = 'none';
}, 3000);












