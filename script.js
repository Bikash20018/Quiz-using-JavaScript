function submitAnswers(){
var Total = 5;
var score = 0;	

//getting user Inputs]
 var q1 = document.forms["quizForms"]["q1"].value;
 var q2 = document.forms["quizForms"]["q2"].value;
 var q3 = document.forms["quizForms"]["q3"].value;
 var q4 = document.forms["quizForms"]["q4"].value;
 var q5 = document.forms["quizForms"]["q5"].value;
 var q6 = document.forms["quizForms"]["q6"].value;


for(i=1; i<=Total; i++) {
if(eval('q'+i) == null || eval('q'+i) == '') {
alert('You missed question' + i);
return false;
}

}

var answer =["a","d","c","b","a","d"];
for(i=1; i<=Total; i++){
if(eval('q'+i) == answer[i-1]){
score ++ 

}


}
alert('You scored ' +score + ' out of ' + Total);

}

