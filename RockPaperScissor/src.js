let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let userScore = 0;
let compScore = 0;
let userChoice;
let compChoice;
let result;
let resultEle = document.getElementById("result");
let userScoreDisplay = document.getElementById("UserScore");
let compScoreDisplay = document.getElementById("ComputerScore");
let reset = document.getElementById("Reset");
reset.addEventListener('click',()=>{
    userScore = 0;
    compScore = 0;
    userScoreDisplay.innerText =  userScore;
    compScoreDisplay.innerText =  compScore;
    resultEle.innerText = "Choose Your Move";
    rock.classList.remove('border-dark');
    paper.classList.remove('border-dark');
    scissor.classList.remove('border-dark');
});

function compChoiceFunc() {
    let choices = ['rock', 'paper', 'scissor'];
    let random = Math.floor(Math.random() * 3);
    console.log("compchoice: "+choices[random]);
    return choices[random];
}

function winChoose(user) {
    let comp = compChoiceFunc();
    if(user === 'rock') {
        rock.classList.add('border-dark');
        paper.classList.remove('border-dark');
        scissor.classList.remove('border-dark');
    }else if(user === 'paper') {
        paper.classList.add('border-dark');
        rock.classList.remove('border-dark');
        scissor.classList.remove('border-dark');
    }else if(user === 'scissor') {
        scissor.classList.add('border-dark');
        rock.classList.remove('border-dark');
        paper.classList.remove('border-dark');
    }
    if(user === comp) {
        result = 'Draw';
    }else if(user === 'rock' && comp === 'scissor') {
        result = 'You Win ' + "By Destroying Computer's scissor with Your Rock";
        userScore++;
    }else if(user === 'rock' && comp === 'paper') {
        result = 'Computer Win ' + "By Covering your Rock with Paper";
        compScore++;
    }else if(user === 'scissor ' && comp === 'rock') {
        result = 'Computer Win ' + "By Crushing your Scissor with Rock";
        compScore++;
    }else if(user === 'scissor' && comp === 'paper') {
        result = 'You Win ' + "By Destroying Computer's Paper with Your Scissor";
        userScore++;
    }else if(user === 'paper' && comp === 'rock') {
        result = 'You Win ' + "By Covering Computer's Rock with Paper";
        userScore++;
    }else if(user === 'paper' && comp === 'scissor') {
        result = 'Computer Win ' + "By Crushing your Paper with Scissor";
        compScore++;
    }
    resultEle.innerText = result ;
    userScoreDisplay.innerText =  userScore;
    compScoreDisplay.innerText =  compScore;
}
rock.addEventListener('click',()=>winChoose('rock'));
paper.addEventListener('click',()=>winChoose('paper'));
scissor.addEventListener('click',()=>winChoose('scissor'));