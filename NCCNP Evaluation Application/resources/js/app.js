function addNewSurveyRow(fileName) {
    var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];

    // Insert a row in the table at the last row
    var newRow   = tableRef.insertRow();

    // Insert a cell in the row at index 0
    var nonprofitName  = newRow.insertCell(0);
    // Append a text node to the cell
    var newFile  = document.createTextNode(fileName);
    nonprofitName.appendChild(newFile);

    var lastEdited = newRow.insertCell(1);
    var today = new Date();
    var editedDate = document.createTextNode(((today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear()));
    lastEdited.appendChild(editedDate);

    var edit = newRow.insertCell(2);
    var editButtonLink = document.createElement("a");
    editButtonLink.setAttribute("id", "edit");
    var editButtonDiv = document.createElement("div");
    editButtonDiv.setAttribute("id", "editDiv");
    var editButtonText = document.createTextNode("Edit");
    editButtonText.setAttribute("id", "editText");
    editButtonDiv.appendChild(editButtonText);
    editButtonLink.appendChild(editButtonDiv);
    edit.appendChild(editButtonLink);
 }    
