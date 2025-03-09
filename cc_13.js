// Selecting the container for employee cards 
const employeeContainer = document.getElementById("employeeContainer");

// Task 2 - Adding Employee Cards Dynamically  
function addEmployee(name, position) {
    const card = document.createElement("div"); // Created employee card
    card.className = "employee-card";  // assigned the  class for styling 

    const nameheading = document.createElement("h3"); // Name heading
    nameheading.textContent = name; // Name of employee 

    const positionPara = document.createElement("p"); // Created the  position  for the paragraph
    positionPara.textContent = position; // Employee position

    const editButton = document.createElement("button"); // Created the edit button for the employee details 
    editButton.textContent = "Edit"; 
    editButton.className = "edit-button"; // Assigned  a class for styling

    const removeButton = document.createElement("button"); // Created a remove button
    removeButton.textContent = "Remove"; 
    removeButton.className = "remove-button"; // Assigned  a class for styling

    // Remove button functionality
    removeButton.addEventListener("click", function(event) {
        event.stopPropagation(); //  This prevents the  event from  bubbling
        employeeContainer.removeChild(card); // removes the card when clicked
    });

    // Task 5: Inline Editing for Employee Cards 
    editButton.addEventListener("click", function() {
        // This creates an  input fields for name and their position
        const nameInput = document.createElement("input");
        nameInput.value = nameheading.textContent; // 

        const positionInput = document.createElement("input");
        positionInput.value = positionPara.textContent;

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.className = "save-button"; // Assigned  a class for styling

        // Save button functionality
        saveButton.addEventListener("click", function() {
            nameheading.textContent = nameInput.value; // Updated the  name
            positionPara.textContent = positionInput.value; // Updated the  position
            
            // Swaping back to text display
            card.replaceChild(nameheading, nameInput);
            card.replaceChild(positionPara, positionInput);
            card.replaceChild(editButton, saveButton);
        });

        // Swaping the static text with input fields
        card.replaceChild(nameInput, nameheading);
        card.replaceChild(positionInput, positionPara);
        card.replaceChild(saveButton, editButton);
    });

    // Appended the  elements to the card
    card.appendChild(nameheading);
    card.appendChild(positionPara);
    card.appendChild(editButton);
    card.appendChild(removeButton);

    // Appended the  cards to the employee container
    employeeContainer.appendChild(card);
}

// ** Test Cases **
addEmployee("Cindy Lu", "Marketing Intern");
addEmployee("Snoopy Joe", "Marketing Manager");

// Task 3 - Converting NodeList to Arrays for Bulk Updates
function highlightEmployees() {
    let employees = document.querySelectorAll(".employee-card"); // 
    let employeesArray = Array.from(employees); // This convets the nodeList to an array list 

    employeesArray.forEach(card => {
        card.classList.add("highlight"); // Applied the highlighting class
    });
}

// Task 4 - Implementing Removal of Employee Cards with Event Bubbling
employeeContainer.addEventListener("click", function(event) {
    // This checks  if the clicked element is an employee card
    if (event.target.classList.contains("employee-card")) {
        console.log("Employee card clicked!");  // Logging when an employee card is clicked
    }
});

     