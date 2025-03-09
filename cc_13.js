
  // Selecting the container for the employee cards 
 const employeeContainer = document.getElementById("employeeContainer");
// Task 2- Adding  Employee cards dynamically  ( Declaring function)
function addEmployee (name,position) {
  const card = document.createElement ("div") ; 
  card.className= "employee-card" ;  

 const nameheading =document.createElement ("h3");
 nameheading.textContent=name; // Name of employee 

 const positionPara= document.createElement("p");
 positionPara.textContent=position; //Employees position

 const removeButton = document.createElement("button");
 removeButton.textContent="Remove"; // Remove button to delete card 
     // Functinallity for the remove button
     removeButton.addEventListener("click", function(event) {
        event.stopPropagation();
        employeeContainer.removeChild(card);
});
    card.appendChild(nameheading);
    card.appendChild(positionPara);
    card.appendChild(removeButton);
    employeeContainer.appendChild(card);
}
 
 //  Task 4 - Implementing Removal of Employee Cards with Event Bubbling
    // Adding event listener to the parent container (Event bubbling)
     employeeContainer.addEventListener("click", function(event) {
      // this checks if the clicked element is an employee card
       if (event.target.classList.contains("employee-card")) {
         console.log("Employee card clicked!");  // Logging  when an employee card is clicked
         }
     });
     
     // Function to add an employee card
     function addEmployee(name, position) {
         const card = document.createElement("div"); // Create an employee card div
         card.className = "employee-card"; // Assign class for styling and selection
     
         const nameHeading = document.createElement("h3"); // Create heading for name
         nameHeading.textContent = name;  // Seting the text to employee name
     
         const positionPara = document.createElement("p"); // Create a paragraph for position
         positionPara.textContent = position; // Set text to the  employee position
     
         const removeButton = document.createElement("button"); // Created a remove button
         removeButton.textContent = "Remove";  // Set button text
         removeButton.className = "remove-button"; // Assign a class for styling
     
         // Remove button functionality (prevent the event from bubbling when it's removed)
         removeButton.addEventListener("click", function(event) {
             event.stopPropagation();  // Preventign the  event bubbling
             employeeContainer.removeChild(card);  // Removing  this specific card
         });
     
         // Appending the  elements to the card
         card.appendChild(nameHeading);
         card.appendChild(positionPara);
         card.appendChild(removeButton);
     
         // Appending  the card to the employee container
         employeeContainer.appendChild(card);
     }
     /// testing :  the console says " employee card clicked "

     // Task 5: Inline Editing for employee cards 
     editButton.addEventListener("click", function() {
        // Create input fields for name and position
        const nameInput = document.createElement("input");
        nameInput.value = nameHeading.textContent;

        const positionInput = document.createElement("input");
        positionInput.value = positionPara.textContent;

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.className = "save-button"; // Assign a class for styling

        // Save button functionality
        saveButton.addEventListener("click", function() {
            nameHeading.textContent = nameInput.value; // Update name
            positionPara.textContent = positionInput.value; // Update position
            
            // Swap back to text display
            card.replaceChild(nameHeading, nameInput);
            card.replaceChild(positionPara, positionInput);
            card.replaceChild(editButton, saveButton);
        });

        // Swap static text with input fields
        card.replaceChild(nameInput, nameHeading);
        card.replaceChild(positionInput, positionPara);
        card.replaceChild(saveButton, editButton);
    });

    // Append elements to the card
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(editButton);
    card.appendChild(removeButton) ;

    // Append card to the employee container
    employeeContainer.appendChild(card);


    // Task 3- Converting NodeList to Arrays for bulk updates :
function highlightEmployees() {
    let employeed= document.querySelectorAll(".employee-card");// this selectes all the employee cards
    let employeesArray=Array.from (employeed);// converting  the node list to an array 
     employeesArray.forEach (card => {
        card.classList.add("highlight"); //  Highlighting class 
     });
     }
// Test Case : 
addEmployee("Cindy Lu ", "Marketing Intern ");
addEmployee("Snoopy joe ", "Marketing Manager");
  