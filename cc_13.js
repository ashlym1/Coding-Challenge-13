
  // Selecting the container for the employee cards 
 const employeeContainer = document.getElementById("employeeContainer");
// Task 2- Adding  Employee cards dynamically 
function addEmployee (name,position) {
  const card = document.createElement ("div") ; 
  card.className= "employee-card" ;  

 const nameheading =document.createElement ("h3");
 nameheading.textContent=name; // Name of employee 

 const positionPara= document.createElement("p");
 positionPara.textConstent=position; //Employees position

 const removeBtn = document.createElement("button");
 removeBtn.textContent="Remove"; // Remove button to delete card 
     // Functinallity for the remove button
     removeBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        employeeContainer.removeChild(card);
});
    card.appendChild(nameheading);
    card.appendChild(positionPara);
    card.appendChild(removeBtn);
    employeeContainer.appendChild(card);
}
// Test Case : 
addEmployee("Cindy Lu ", "Marketing Intern ");
addEmployee("Snoopy joe ", "Marketing Manager");
 
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
     
     // Function to add an employee card
     function addEmployee(name, position) {
         const card = document.createElement("div"); // Create an employee card div
         card.className = "employee-card"; // Assign class for styling and selection
     
         const nameHeading = document.createElement("h3"); // Create heading for name
         nameHeading.textContent = name;  // Seting the text to employee name
     
         const positionPara = document.createElement("p"); // Create a paragraph for position
         positionPara.textContent = position; // Set text to the  employee position
     
         const removeBtn = document.createElement("button"); // Created a remove button
         removeBtn.textContent = "Remove";  // Set button text
         removeBtn.className = "remove-btn"; // Assign a class for styling
     
         // Remove button functionality
         removeBtn.addEventListener("click", function(event) {
             event.stopPropagation();  // Preventign the  event bubbling
             employeeContainer.removeChild(card);  // Removing  this specific card
         });
     
         // Appending the  elements to the card
         card.appendChild(nameHeading);
         card.appendChild(positionPara);
         card.appendChild(removeBtn);
     
         // Appending  the card to the employee container
         employeeContainer.appendChild(card);
     }
     /// testing :  the console says " employee card clicked "