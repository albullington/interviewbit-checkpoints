module.exports = { 
  //param A : array of integers
  //return a array of integers
    nextGreater : function(A){
    var greaterList = [];
    var next = -1; 
  
    for (var i = 0; i < A.length; i++) {
      for (var j = i + 1; j <= A.length; j++) {
        if (A[j] > A[i]) {
          next = A[j];
          greaterList.push(next);
          break;
        } else {
          greaterList.push(next);
          i++;
        }
      }
    }
  
    return greaterList;
  }
};
 