var tables = document.getElementsByTagName("table");
var rows = document.getElementsByTagName("tr");
var cols = rows[0].getElementsByTagName("td");
var table = tables[0];
var marked = [];

// start from row 1 as row 0 is used for the table labels
for(var row = 1; row < rows.length - 1; row++){
  marked[row] = false;
}
var numOfStudents = 0;
var totalCount = [];

// data count start from column 3
for(var col=3; col<cols.length-1; col++){
	totalCount[col] = 0;
	var remainingCount = 0;
  var nonZero = 0;

  for(var row = 1; row < rows.length - 1; row++){
    var count = table.rows[row].cells[col].innerHTML;
    if(!marked[row]){
      if(count  != "0"){
      	nonZero++;
      	remainingCount += parseInt(count);
      	marked[row] = true;
      }
    }
    totalCount[col] += parseInt(count);
  }

  if(col == 3){
    numOfStudents = totalCount[col];
    console.log("Total Number of Students: " + numOfStudents);
  }
  
  console.log("Result for the " + (col-2) + "th choice is: ");
  console.log("Get Allocated: " + nonZero);
  console.log("Not allocated: " + (remainingCount-nonZero));
}

// strictCount is the disjoint count (union - intersection)
var strictCount = [];

// curSum take notes of the aggregate counts (the intersection)
var curSum = 0;

for(var col=cols.length-2; col>=3; col--){	
	if(col == cols.length -1){
		strictCount[col] = totalCount[col];
  }else{
	  strictCount[col] = totalCount[col] - curSum;
  }
  curSum = curSum + strictCount[col];
}

// accumulated counts (sum of strictCount up to nth column)
var accScore = 0;
for(var col=3; col<cols.length-1; col++){
	accScore += strictCount[col];
	console.log("Num of people have chosen " + (col-2) + " choices is: " + strictCount[col] + " accumulated total: " + accScore);
}
