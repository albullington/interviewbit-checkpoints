module.exports = { 
  //param A : array of integers
  //return a array of array of integers
     permute : function(A){
   var results = [];
 
   var findUniqueCombos = function(results, combo) {
     var isDuplicate = false;
 
     results.forEach(function(permutation) {
       if (JSON.stringify(permutation) === JSON.stringify(combo)) {
         isDuplicate = true;
       }
     })
     return isDuplicate;
   }
 
   var getCombos = function(array, combo) {
     if (array.length === 0) {
       if (!findUniqueCombos(results, combo)) {
         results.push(combo);
       }
     } else {
       for (var i = 0; i < array.length; i++) {
         var first = array.slice();
         var next = first.splice(i, 1);
         getCombos(first.slice(), combo.concat(next))
       }
     }
   }
   getCombos(A, []);
   return results;
     }
 };
 