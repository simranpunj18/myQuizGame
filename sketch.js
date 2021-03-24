var canva;
var questions; 
var answerChoices; 
var correctAnswers;

function setup(){
  canvas = createCanvas(850,400);

}


function draw(){
  background("blue");


  
}
function MousePressed(){
  this.button.mousePressed(()=>{
    this.title.hide(); 
    this.title.hide(); 
    this.input.hide();
    this.button.hide(); 
    contestant.name = this.input1.value(); 
    contestantCount+=1; 
    contestant.index = contestantCount;
    contestant.update(); 
    contestant.updateCount(contestantCount);
    for(var plr in allContestants[plr].answer){
      var correctAns = "2"; 
      if(correctAns === allContestants[plr].answer); 
      fill("Green"); 
      else 
         fill("red");
    }
  }
}
