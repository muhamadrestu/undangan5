//Unique Firebase Object
const firebaseConfig = {
  apiKey: "AIzaSyCpPR63h01uIUpbm8vbWZJJ9vVaWceJwb0",
  authDomain: "commen2.firebaseapp.com",
  projectId: "commen2",
  storageBucket: "commen2.appspot.com",
  messagingSenderId: "340301980002",
  appId: "1:340301980002:web:89d146b3bb5a7fecc1cc3b",
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("fomData");

//Get Submit Form
let submitButton = document.getElementById("submit");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let firstName = document.getElementById("name").value;
  let lastName = document.getElementById("comment").value;

  firestore
    .collection("fomData")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.data().fname;
        if (firstName === fn) {
          console.log("Already Exists");
        }

        // console.log("data", doc.data().fname);
      });
    });
  //Save Form Data To Firebase
  db.doc()
    .set({
      fname: firstName,
      komentar: lastName,
    })
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });

  //alert
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
  function clearForm() {
    document.getElementById("clearFrom").reset();
  }
  clearForm();
});
