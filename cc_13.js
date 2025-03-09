
  // Selecting the container for the employee cards 
 const employeeContainer = document.getElementById("employeeContainer");
// Task 2- Adding  Employee cards dynamically  
function addEmployee (name,position) {
  const card = document.createElement ("div") ; // Created the employee card 
  card.className= "employee-card" ;  // assigned the class for styling 

  const nameheading =document.createElement ("h3");
 nameheading.textContent=name; // Name of employee 

 const positionPara= document.createElement("p");
 positionPara.textContent=position; //Employees position

 const editButton = document.createElement("button");
 editBtn.textContent = "Edit"; // Button to edit employee details
 editBtn.className = "edit-button"; // Assign a class for styling

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove"; // Remove button to delete card
    removeBtn.className = "remove-btn"; // Corrected class name

 // Remove button functionality
 removeBtn.addEventListener("click", function(event) {
     event.stopPropagation();
     employeeContainer.removeChild(card);
 });

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

    // Appended elements to the card
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(editButton);
    card.appendChild(removeButton) ;

    // Append card to the employee container
    employeeContainer.appendChild(card);
}
// ** Test Case **
 addEmployee("Cindy Lu", "Marketing Intern");
 addEmployee("Snoopy Joe", "Marketing Manager");

    // Task 3- Converting NodeList to Arrays for bulk updates :
function highlightEmployees() {
    let employeed= document.querySelectorAll(".employee-card");// this selectes all the employee cards
    let employeesArray=Array.from (employeed);// converting  the node list to an array 
     employeesArray.forEach (card => {
        card.classList.add("highlight"); //  Highlighting class 
     });
     }
//  Task 4 - Implementing Removal of Employee Cards with Event Bubbling
    // Adding event listener to the parent container (Event bubbling)
    employeeContainer.addEventListener("click", function(event) {
        // this checks if the clicked element is an employee card
         if (event.target.classList.contains("employee-card")) {
           console.log("Employee card clicked!");  // Logging  when an employee card is clicked
           }
       });
       