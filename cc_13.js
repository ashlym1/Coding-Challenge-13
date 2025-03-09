
  // Selecting the container for the employee cards 
 const employeeContainer = document.getElementById("employeeContainer");
// Task 2- Function to add employee cards dynamically 
function addEmployee (name,position) {
  const card = document.createElement ("div") ; 
  card.className= "employee-card" ;  

 const nameheading =document.createElement ("h3");
 nameheading.textContent=name; // Name of employee 

 const positionPara= document.createElement("p");
 positionPara.textConst=position; //Employees position

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

