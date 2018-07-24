module.exports = { 
  //param A : array of integers
  //return a array of array of integers
     permute : function(A){
   var results = [];
   var length = A.length;
   var tracker = Array(length);
   var currentItems = Array(length);
 
   var findUniqueCombos = function(results, combo) {
     var isDuplicate = false;
 
     results.forEach(function(permutation) {
       if (JSON.stringify(permutation) === JSON.stringify(combo)) {
         isDuplicate = true;
       }
     })
     return isDuplicate;
   }
 
   var backtracking = function(position) {
     if (position === length) {
       if (!findUniqueCombos(results, currentItems.slice())) {
         return results.push(currentItems.slice());
       }
     }
     for (var i = 0; i < length; ++i) {
       if (!tracker[i]) { 
         tracker[i] = true;
         currentItems[position] = A[i];
         backtracking(position + 1);
         tracker[i] = false;
       }
     }
   };
   
   backtracking(0);
   return results;
   }
 };
 