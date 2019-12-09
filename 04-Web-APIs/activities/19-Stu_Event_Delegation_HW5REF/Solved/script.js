    // this button looks at the button labeled "Add Person" in the HTML
var addBtn = document.querySelector("#add-btn");
    // This looks at the unordered list where our people are added to
var peopleListEl = document.querySelector("#people-list");
    // this looks at the name input element in our HTML
var nameEl = document.querySelector("#name");
    // this looks at the modal pop up window
var modalEl = document.querySelector("#modal-container");
    // this looks at the header of the modal window and displays the name of the person in question
var modalNameEl = document.querySelector("#modal-name");
    // this looks at the text area in the modal window where the description text area is displayed
var descriptionEl = document.querySelector("#description");
    // this looks at the close button in the modal window
var closeEl = document.querySelector(".close");
    // this looks at the save button in the modal window which saves whatever was typed in the description text area to that persons entry.
var saveBtn = document.querySelector("#save");

var people = [{ name: "Bob" }];
    // this sets the currentId to "0". Bob has the id "0"
var currentId = 0;


// this function adds people to our list of friends
function addPersonToList(event) {
  // this line prevents the default for this element, which is clearing the form once entered.
  event.preventDefault();
  // this creates a new variable, "name". "name" is defined as the value of the nameEl(ement), defined above, as looking at the input of the name field
  var name = nameEl.value;
  // this creates a new variable, "li". "li" is defined by the newly createdElement, a "li"
  var li = document.createElement("li");
  // this sets the new li's id to be the current length of the array of people.
  li.id = people.length;
  // this adds html to our newly created list item
  // the innerHTML added is defined as the value saved to the "name variable"
  // and appends a button with the label "edit" to it
  li.innerHTML = name + " <button>edit</button>";
  // this pushes this information to our people array, and sets the name to be the name? I think? DOUBLE CHECK THIS ONE
  people.push({ name: name });
  // finally, this looks at the peopleListEl, defined above, and appends our newly created li with all of its associated information.
  peopleListEl.append(li);
}

// this function closes the modal display window by setting the display style to none
function close() {
  modalEl.style.display = "none";
}

// 
function handleClick(event) {
  //check to see if the element clicked is a button
  if (event.target.matches("button")) {
    //prevent the default behavior of a button nested within a form tag
    event.preventDefault();
    // This sets the display of the modalEl to block, overriding the default display of none, making it visible
    modalEl.style.display = "block";
    // this defines the variable, currentId, to be equal to the integer parsed from id of the parent element of the target that was clicked
    currentId = parseInt(event.target.parentElement.id);
    // this defines the name variable localy, setting the name to whichever person in the array with an indecies of the current id, as defined above, and looks at their name attribute
    var name = people[currentId].name;
    // this defines a new local variable, description, as equal to the current person's description. a
    var description = people[currentId].description;
    // This sets the header of the modal to be the name of the person this information is about
    modalNameEl.textContent = name;
    // IF there is a description for this person
    if(description) {
    // the descriptionEl(ement's) value will be set to what was saved as the description
      descriptionEl.value = description;
    // otherwise,
    } else {
    // display an empty text area, understood as a string.
      descriptionEl.value = "";
    }
  }
}

// this adds an evenListener to our close button that, when clicked, runs the "close()" function.
closeEl.addEventListener("click", close);

//when modal is open - curentId has been saved as global variable - use that variable to update or set key
//key of description with an associated value
saveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  people[currentId].description = descriptionEl.value;
  close();
});

// this adds an eventListener to the addBtn, which runs the addPersonToList function
addBtn.addEventListener("click", addPersonToList);


//add so I can close modal (without saving) when it is clicked on 
  // This event listenera runs the handleClick function when a peopleListEl(ement) is clicked
  // the handle click function does the work of checking to see if we clicked the "edit" button before running
peopleListEl.addEventListener("click", handleClick);

// COME BACK TO THIS ONE
// this eventListener
document.addEventListener("click", function(event) {
  if (event.target === modalEl) {
    close();
  }
});