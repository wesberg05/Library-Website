let parsedJSONDataLibrary = JSON.parse(jsonDataLibrary);

function displayData(){
    let libraryTable = document.getElementById("library-table");
    let libraryTableHeader = document.createElement("tr");
    libraryTable.appendChild(libraryTableHeader);
    
    let tableHeaderBookID = document.createElement("th");
    libraryTableHeader.appendChild(tableHeaderBookID);
    tableHeaderBookID.innerText = "Book ID";
    
    let tableHeaderBookName = document.createElement("th");
    libraryTableHeader.appendChild(tableHeaderBookName);
    tableHeaderBookName.innerText = "Book Name";

    let tableHeaderBookAuthor = document.createElement("th");
    libraryTableHeader.appendChild(tableHeaderBookAuthor);
    tableHeaderBookAuthor.innerText = "Book Author";
    
    let tableHeaderBookPublishedYear = document.createElement("th");
    libraryTableHeader.appendChild(tableHeaderBookPublishedYear);
    tableHeaderBookPublishedYear.innerText = "Year Published";
    
    let tableHeaderBookISBN = document.createElement("th");
    libraryTableHeader.appendChild(tableHeaderBookISBN);
    tableHeaderBookISBN.innerText = "Book ISBN";
    
    let tableHeaderBookQuantity = document.createElement("th");
    libraryTableHeader.appendChild(tableHeaderBookQuantity);
    tableHeaderBookQuantity.innerText = "Book Quantity";

    let tableHeaderBookCurrentAvailibility = document.createElement("th");
    libraryTableHeader.appendChild(tableHeaderBookCurrentAvailibility);
    tableHeaderBookCurrentAvailibility.innerText = "Book Current Availibility";
    
    

    for(book of parsedJSONDataLibrary){
        let bookRow = document.createElement("tr");
        libraryTable.appendChild(bookRow);
    
        let bookCellID = document.createElement("td");
        bookRow.appendChild(bookCellID);
        bookCellID.innerText = book.BookID;
    
        let bookCellName = document.createElement("td");
        bookRow.appendChild(bookCellName);
        bookCellName.innerText = book.BookName;
    
        let bookCellAuthor = document.createElement("td");
        bookRow.appendChild(bookCellAuthor);
        bookCellAuthor.innerText = book.Author;

        let bookCellPublishedYear = document.createElement("td");
        bookRow.appendChild(bookCellPublishedYear);
        bookCellPublishedYear.innerText = book.PublishedYear;

        let bookCellISBN = document.createElement("td");
        bookRow.appendChild(bookCellISBN);
        bookCellISBN.innerText = book.ISBN;

        let bookCellQuantity = document.createElement("td");
        bookRow.appendChild(bookCellQuantity);
        bookCellQuantity.innerText = book.Quantity;

        let bookCellCurrentAvailibility = document.createElement("td");
        bookRow.appendChild(bookCellCurrentAvailibility);
        bookCellCurrentAvailibility.innerText = book.CurrentAvailibility;


    }
}

function sortData() {
    let searchValue = document.getElementById("i-search").value.toLowerCase();
    let libraryTable = document.getElementById("library-table");
    let rows = libraryTable.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let bookNameCell = rows[i].getElementsByTagName("td")[1];
        if (searchValue === "" || bookNameCell.innerText.toLowerCase().startsWith(searchValue)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

// https://www.w3schools.com/jsref/met_element_getelementsbytagname.asp
// date used: December 3rd 2023
// Used this to discover the method getElementsByTagName

displayData();
document.getElementById("i-search").addEventListener("input", sortData);


