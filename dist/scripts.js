// Create an array with random names and yours
// Using forEach to add each name to the <ul> list
// (Optional) Your name should be bold

let namesArray = ["Hanka","Zorka","Slavka","Tibor","Marek"];

namesArray.forEach(element => 
    $("ul").append('<li>'+element+'</li>')
    )

// let nameArrayLength = namesArray.length;

// for (let i = 1; i <= nameArrayLength; i++) {
//     $("ul").append("<li>"nameArrayLength[i]"</li>");
// }

// $("ul").append('<li>'+namesArray[1]+'</li>');