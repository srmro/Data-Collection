//CSV data looks like this:
let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

//loop through the characters of a given CSV string
let dtCell = ""; //store each "cell" of data in a variable
let dtRow = ""; //store each row in a variable

let countCell = 0; //both starting from 0
let countRow = 0;


csvData += "/n"; //when you encounter the "\r\n" sequence, move to the next "row".

for(let i = 0; i < csvData.length; i++){
    
    if (csvData[i] !== "\n") { //if encounters /n 
        dtRow += csvData[i];
    } else {
        dtRow += ","; //if it's not encountering /n then it'll encounter ","
        countRow++;
        console.log(`-- Row #${countRow}--`); //log out a new row
        
        for (let j = 0; j < dtRow.length; j++) {
            
         if(dtRow[j] !== ",") { //when you encounter a comma, move to the next cell
            dtCell += dtRow[j];
         
        } else {
            countCell++;
            console.log(`Cell #${countCell}: ${dtCell}`);
            dtCell = "";

        } 
        
       debugger;

        }

        countCell = 0
        dtRow = ""  //Log each row of data.


    }


}

// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.