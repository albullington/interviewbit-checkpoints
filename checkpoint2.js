module.exports = { 
  //param A : integer
  //return a array of array of integers
     prettyPrint : function(A){
       var result = [];
       spiral(A);
     }, 
     spiral: function(A) {
       var len = A[0].length;
       if (len === 1) {
         result.concat(A[0]);
         return result;
       }
       if (len === 2) {
         result.concat(A[0]);
         result.push(A[1][1], A[1][0]);
         return result;
       }
       if (len > 2) {
         result.concat(A[0]);
           // down
           for (var j=1; j < A.length - 1; j++) {
               result.push(A[j][A.length -1]);
           }
           // left
           for (var l=A.length - 2; l > 0; l--) {
               result.push(A[A.length - 1][l]);
           }
           // up
           for (var k=A.length -2; k > 0; k--) {
               result.push(A[k][0]);
           }
       }
       // reset A for next loop
       var temp = A.slice();
       temp.shift();
       temp.pop();
       for (var i=0; i < temp.length - 1; i++) {
           temp[i] = temp[i].slice(1,-1);
       }
       spiral(temp);
       }
     }
 };
 