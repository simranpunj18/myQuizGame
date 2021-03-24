class Quiz{
    constructor(){
        friction:1.0,
        reistiutuion:1.0;
    }
}
display(){
    this.title.html("My Quiz Game"); 
    this.title.position(350,0);

    this.questions.html("Question:- What starts and ends with the letter 'E', but has only one letter? "); 
    this.questions.position(150,80); 
    this.option1.html("1: Everyone");
    this.option1.postition(150,100); 
    this.option2.html("2: Envolope"); 
    this.option2.postition(150,120); 

    this.input1.postition(150,230);
}

async start(){
    if(gameState === 0){
        constent = new contestant();
        var contestantCountRef = await.database.ref('contestantCount').once("value"); 
         if(contestantCountRef.exists()){
             contestantCount = contestantCountRef.val();
             contestant.getCount();
         }
    }
    question = new Question;
    question.display();
}