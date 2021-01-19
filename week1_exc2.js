
function nthLast(arr1, nthToLast) {
    // code here
    var ind = nthToLast;
    var arr2 =[];
    arr2.push(null);

    for (let index = arr1.length ; index > 1 ; index--) {
    arr2.push(arr1[index]);    
    }

    for (let index = 0; index < arr2.length; index++) {
        if(index == ind)
        console.log(arr2[index]);

        if (ind <= 0)
        console.log(null);
    }
  }

  const arr1 = ["a", "b", "c", "d"];
  var nthToLast = 1;
  function nthLast(arr1, nthToLast) // const expected1 = "d"

  nthToLast = 2;
  function nthLast(arr1, nthToLast) // const expected2  = "c"

  nthToLast = 0;
  function nthLast(arr1, nthToLast) // const expected3   = null

  nthToLast = -1;
  function nthLast(arr1, nthToLast) // const expected3   = null