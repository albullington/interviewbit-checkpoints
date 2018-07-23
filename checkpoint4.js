module.exports = { 
  //param A : array of integers
  //param B : integer
  //return an integer
     kthsmallest : function(A, B){
       var smallest = Number.MIN_VALUE;
       var highest = Number.MAX_VALUE;
 
       while (smallest <= highest) {
         var middle = Math.round(smallest + (highest - smallest) / 2);
         var countLower = 0;
         var countEqual = 0; 
 
         for (var i = 0; i < A.length; i++) {
           if (A[i] < middle) {
             countLower++;
           } else if (A[i] === middle) {
             countEqual++;
           }
           if (countLower >= B) {
             break;
           }
         }
         if (countLower < B && countLower + countEqual >= B) {
           return middle;
         } else if (countLower >= B) {
           highest = middle - 1;
         } else {
           smallest = middle + 1;
         }
       }
       return -1; 
     }
 };
 