//Find file names of linked files
function getFileNames() {
  
  //spreadsheet variables
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('URLs');
  var lastRow = sheet.getLastRow(); 
  var range = sheet.getRange(2,1,lastRow,5);
  var values = range.getValues();   
  var updateRange = sheet.getRange('F1'); 
  
  //show updating message
  updateRange.setFontColor('red');
  
  var numValues = 0;
  for (var i = 0; i < values.length; i++) {     
      try { 
    //check to see if ShortURL and FileId are filled out
    if ((values[i][0].length > 0) && (values[i][3].length > 0)) {
     
      //check if it's been entered before          
      if (values[i][5] != 'y') {                       
        
        //Grab newFileID based on values in column D, A = 0
            var newFileId = DriveApp.getFileById(values[i][3]); 

        //get Name
            var newFileName = newFileId.getName();           
        
        //mark as entered, enter file name
        sheet.getRange(i+2,6).setValue('y');
        sheet.getRange(i+2,5).setValue(newFileName);
        
      } //could edit here with an else statement
    }
        } catch (e) {
        //do nothing
        }

    numValues++;
  }
  
  //hide updating message
  updateRange.setFontColor('white');

}

// The onOpen function is executed automatically every time a Spreadsheet is loaded
function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [];
  // When the user clicks on "addMenuExample" then "Menu Entry 1", the function function1 is
  // executed.
  menuEntries.push({name: "1. Get file Ids", functionName: "getFilesIds"});
  menuEntries.push(null); // line separator
  menuEntries.push({name: "2. Get file Names", functionName: "getFileNames"});

  ss.addMenu("Update sheet", menuEntries);
}

/* 
Notes: 
         
*/
