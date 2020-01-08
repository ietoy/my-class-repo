// write a function that takes in 2 params, a string and and element that may or may-not be in the array

// without using prebuilts, return true if element is included and false otherwise

// the function needs to take in an array and an element
function(arr, el) {
    // the function then needs to check if the element is in the array
    for (var i = 0; i < arr.length; i++) {
        // if it is in the array, return true
        if (arr[i] === el) {
            return true;
        }
        // if not, return false
        return false;
    }
}

