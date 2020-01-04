

// document.ready makes sure the javascript doesn't load before the html page
$(document).ready(function () {

    // Write a series of on click listeners for each letter in the html
    
        // $("h3").on("click", function() {
        //     console.log("h3 listener works!")
        // });


    // Whenever the user clicks on a letter, you want to append the corresponding letter to the `text-div` element
    // You will need to set up an on click listener for each letter

    // Within the document, set an on click listener for the element with a class of "letterA"
    $(".letterA").on("click", function() {
        // console.log("A click listener works!")
        // When that element is clicked, append the string "A" to the `text-div` element
        $("#text-div").append("A");
    });

    // Within the document, set an on click listener for the element with a class of "letterB"
    $(".letterB").on("click", function() {
        // When that element is clicked, append the string "B" to the `text-div` element
        $("#text-div").append("B");
    });
    
    $(".letterC").on("click", function() {
        $("#text-div").append("C");
    });

    $(".letterD").on("click", function() {
        $("#text-div").append("D");
    });
    
    $(".letterE").on("click", function() {
        $("#text-div").append("E");
    });

    $(".letterF").on("click", function() {
        $("#text-div").append("F");
    });

    $(".letterG").on("click", function() {
        $("#text-div").append("G");
    });

    $(".letterH").on("click", function() {
        $("#text-div").append("H");
    });

    $(".letterI").on("click", function() {
        $("#text-div").append("I");
    });

    $(".letterJ").on("click", function() {
        $("#text-div").append("J");
    });

    $(".letterK").on("click", function() {
        $("#text-div").append("K");
    });

    $(".letterL").on("click", function() {
        $("#text-div").append("L");
    });

    $(".letterM").on("click", function() {
        $("#text-div").append("M");
    });

    $(".letterN").on("click", function() {
        $("#text-div").append("N");
    });

    $(".letterO").on("click", function() {
        $("#text-div").append("O");
    });

    $(".letterP").on("click", function() {
        $("#text-div").append("P");
    });

    $(".letterQ").on("click", function() {
        $("#text-div").append("Q");
    });

    $(".letterR").on("click", function() {
        $("#text-div").append("R");
    });

    $(".letterS").on("click", function() {
        $("#text-div").append("S");
    });

    $(".letterT").on("click", function() {
        $("#text-div").append("T");
    });

    $(".letterU").on("click", function() {
        $("#text-div").append("U");
    });

    $(".letterV").on("click", function() {
        $("#text-div").append("V");
    });

    $(".letterW").on("click", function() {
        $("#text-div").append("W");
    });

    $(".letterX").on("click", function() {
        $("#text-div").append("X");
    });

    $(".letterY").on("click", function() {
        $("#text-div").append("Y");
    });

    $(".letterZ").on("click", function() {
        $("#text-div").append("Z");
    });

        
    // Continue for the other letters




        
})
