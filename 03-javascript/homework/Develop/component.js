// Here are the arrays that will need to be pulled from 
// in order to generate the radnomized passwords

// Special Characters
// this is a list of all of the special characters
// from the wiki linked in the hw readme:
// " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// it might be easier to have this string as the only
// element in the array, and instead parsing 
// each character into its own index, we just
// use the charAt to generate the special characters in 
// the password.


var special;
special = ["!", "@", "#", "$", "%", "^", "*", "?", "+", "="];
// special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", 
//            "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", 
//            "?", "@", "[", "\", "]", "^", "_", "`", "{", "|",
//            "}", "~", """ ];


// Numeric Characters
var numeric;
numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lowercase Characters
var alphaLow;
alphaLow = ["a", "b", "c", "d", "e",
            "f", "g", "h", "i", "j",
            "k", "l", "m", "n", "o",
            "p", "q", "r", "s", "t",
            "u", "v", "w", "x", "y",
            "z"]


// Uppercase Characters

// There may be a way to simplify the above alpha sets
// into one array with the "to upper" or "to lower" thing,
// but I'm going to do it manually for now