var question = "What is 10+10 ?";

var answer = 20;

var correct_image_source = './gifs/correct.gif';
var incorrect_image_source ='./gifs/wrong.gif';

var response_image = document.querySelector('.response img');

var Response;

for(let i=0; i<3; i++) {
    if(i == 0){
        Response = prompt(question,"0");
    } else {
        Response = prompt("Try Again! \n\n" + question,"0");
    }
    if(Response == answer) {
        response_image.src = correct_image_source;
        break;
    } else if(i >= 2){
        response_image.src = incorrect_image_source;
    }
}