//Find file Ids from URLs
function getFilesIds() {
  
  //spreadsheet variables
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('URLs');
  var lastRow = sheet.getLastRow(); 
  var range = sheet.getRange(2,1,lastRow,6);
  var values = range.getValues();   
  var updateRange = sheet.getRange('G1'); 
  
  //show updating message
  updateRange.setFontColor('red');
  
  var numValues = 0;
  for (var i = 0; i < values.length; i++) {     
    //check to see if ShortURL and LongURL are filled out
    if ((values[i][0].length > 0) && (values[i][1].length > 0)) {
      
      //check if it's been entered before          
      if (values[i][6] != 'y') {                       
        
        //Get newFileID based on URL values in column B, A = 0
        //var regex = new RegExp("^.*[^-\w]([-\w]{25,})[^-\w]?.*$"); 
        var regex = new RegExp(/[-\w]{25,}/); 
        var newFileId = regex.exec(values[i][1]);
        
        //mark as entered, enter file id
        sheet.getRange(i+2,7).setValue('y');
        sheet.getRange(i+2,4).setValue(newFileId);
        
      } //could edit here with an else statement
    }
    numValues++;
  }
  
  //hide updating message
  updateRange.setFontColor('white');

}
