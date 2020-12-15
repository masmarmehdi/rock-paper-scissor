function rpsGame(yourChoice){
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=numberToChoice(botRandomChoice());
    result=decideWinner(humanChoice,botChoice);
    message=finalMessage(result);
    rpsFrontEnd(humanChoice,botChoice,message);
    
}
function botRandomChoice(){
    return Math.floor(Math.random()*3);
} 
function numberToChoice(number){
    return ['rock','paper','scissor'][number];
}
function decideWinner(yourChoice,computerChoice){
    var rpsDataBase={
        'rock':{'rock':0.5,'paper':0,'scissor':1},
        'paper':{'paper':0.5,'scissor':0,'rock':1},
        'scissor':{'scissor':0.5,'rock':0,'paper':1}
    }
    var yourScore=rpsDataBase[yourChoice][computerChoice];
    var computerScore=rpsDataBase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}
function finalMessage([yourScore,computerScore]){
    if(yourScore===1){
        return {'message':'You won!','color':'white','background-color':'#2d862d'};
    }else if(yourScore===0.5){
        return {'message':'You tied!','color':'white','background-color':'#e68a00'};
    }else{
        return {'message':'You lost!','color':'white','background-color':'#b30000'};
    }
}
function rpsFrontEnd(yourImageChoice,botImageChoice,finalMessage){
    var imageDataBase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }
    //removing all images after choosing an item
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    //creating an elements after removing items
    var yourDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');
    var resultShown=document.createElement('div');
    var resultShown1=document.createElement('div');
    //add an inner HTML to the elements that i have created
    resultShown.innerHTML="<h2 style=background-color:#002b80;color:white;padding:10px;>You:</h2>";
    resultShown1.innerHTML="<h2 style=background-color:#002b80;color:white;padding:10px;>:Computer</h2>";
    yourDiv.innerHTML="<img src='"+imageDataBase[yourImageChoice]+"' width=150 height=150;>";
    botDiv.innerHTML="<img src='"+imageDataBase[botImageChoice]+"' width=150 height=150;>";
    messageDiv.innerHTML="<h1 style=color:"+finalMessage['color']+";font-size:40px;background-color:"+finalMessage['background-color']+";>"+finalMessage['message']+"</h1>";
    //appending my elements to the users
    document.getElementById('flex-box-rps-div').appendChild(resultShown);
    document.getElementById('flex-box-rps-div').appendChild(yourDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(resultShown1);
}
function playAgain(){
    location.reload(); 
}
