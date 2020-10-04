// Create an array with random names and yours
// Using forEach to add each name to the <ul> list
// (Optional) Your name should be bold

let namesArray = ["Hanka","Zorka","Slavka","Tibor","Marek"];

namesArray.forEach(function (item) {
    //console.log(item);
    if (item === 'Marek'){
        $("ul").append(`<li><strong>${item}</strong></li>`);
    } else {
        $("ul").append(`<li>${item}</li>`);
    }
});

// for (let i = 0; i < nameArrayLength; i++) {
//     if (namesArray[i] == "Marek") {
//     $("ul").append(`<li><strong>${namesArray[i]}</strong></li>`);
//     } else {
//         $("ul").append(`<li>${namesArray[i]}</li>`);    
//     }

//Add a new block at the end of the page, 
//the title should be in a heading, the text should be in a paragraph block

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$("main").append(
    `<div><h2>${additionalBlock.title}</h2><p>${additionalBlock.text}</p></div>`
);