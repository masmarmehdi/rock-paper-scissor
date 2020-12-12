function rpsGame(yourChoice){
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    console.log('Human choice:',humanChoice);
    botChoice=numberToChoice(botRandomChoice());
    console.log('computer choice:',botChoice)
    result=decideWinner(humanChoice,botChoice);
    console.log(result);
    message=finalMessage(result);
    console.log(message);
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
        return {'message':'You won!','color':'green'};
    }else if(yourScore===0.5){
        return {'message':'You tied!','color':'yellow'};
    }else{
        return {'message':'You lost!','color':'red'};
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
    var yourDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');
    yourDiv.innerHTML="<img src='"+imageDataBase[yourImageChoice]+"' width=200 height=150;>";
    botDiv.innerHTML="<img src='"+imageDataBase[botImageChoice]+"' width=200 height=150;>";
    messageDiv.innerHTML="<h2 style='color:"+finalMessage['color']+"'>"+finalMessage['message']+"</h2>";
    document.getElementById('flex-box-rps-div').appendChild(yourDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}