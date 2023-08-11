//getting all required elements


const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const  timeCount = quiz_box.querySelector(".timer .timer_sec");
const  timeLine = quiz_box.querySelector("header .time_line");



const option_list= document.querySelector(".option_list");

const quitQuiz = document.querySelector('.quitQuiz')

quitQuiz.addEventListener('click', function(){
    window.location.reload();
})

//if start button clicked
start_btn.onclick = () =>{
    info_box.classList.add("activeInfo"); // show the info box
    next_btn.style.display = "none";


}
//if exit button clicked
exit_btn.onclick=()=>{
    info_box.classList.remove("activeInfo"); // hide the info box
}

//if continue  button clicked
continue_btn.onclick=()=>{
    next_btn.style.display = "none";
    info_box.classList.remove("activeInfo"); // hide the info box
    quiz_box.classList.add("activeQuiz"); // show the quiz box
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const prev_btn = quiz_box.querySelector(".prev_btn");
const result_box = document.querySelector(".result_box");
const quit_quiz = result_box.querySelector(".buttons .quit");
const restart_quiz = result_box.querySelector(".buttons .restart");

restart_quiz.onclick = () =>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    let que_count = 0;
    let que_numb = 1;
    let timeValue = 15;
    let widthValue = 0;
    let counter;
    let userScore = 0; 
    showQuestions(que_count);
    queCounter(que_numb);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    

}


quit_quiz.onclick = () =>{
    window.location.reload();

}


//if next button is clicked
next_btn.onclick = () =>{

    if(que_count < questions.length - 1){
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
}else{
    // prev_btn.style.display = "block";
    console.log("question completed");
    showResultBox();

}
}

//getting questions and options from array

function showQuestions(index){
    next_btn.style.display = "none";
    const que_text = document.querySelector(".que_text");
    let que_tag ='<span>'+questions[index].numb +"." + questions[index].question+'</span>';
    let option_tag =    '<div class="option">'+ questions[index].options[0]  +'<span></span></div>'
                      + '<div class="option">'+ questions[index].options[1]  +'<span></span></div>'
                      + '<div class="option">'+ questions[index].options[2]  +'<span></span></div>'
                      + '<div class="option">'+ questions[index].options[3]  +'<span></span></div>';
    que_text.innerHTML =  que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for(let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick","optionselected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>'

function optionselected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        userScore += 1;
        answer.classList.add("correct");
        console.log("answer is correct");
        answer.insertAdjacentHTML("beforeend",tickIcon);
    }else{
        answer.classList.add("incorrect");
        console.log("answer is wrong");
        answer.insertAdjacentHTML("beforeend",crossIcon);

    //if answers is incorrect, then you automatically select the correct answer

        for(let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class","option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }
    //once user selects, disabled options

    for(let i = 0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
        next_btn.style.display = "block";
}

function showResultBox(){
    info_box.classList.remove("activeInfo");//hide info box
    quiz_box.classList.remove("activeQuiz"); //remove quiz box
    result_box.classList.add("activeResult"); // show active result
    const scoreText = result_box.querySelector(".score_text");
    if(userScore > 3){
        let scoreTag = '<span> You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';

        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){
        let scoreTag = '<span> and nice, You got<p>' + userScore + '</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry, You got <p>'+ userScore + '</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer,1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;
            for(let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class","option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                    
                }
            }
            for(let i = 0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
                next_btn.style.display = "block";
        }
        }
            
        }
    
function startTimerLine(time){
    counterLine = setInterval(timer,35);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if(time > 450){
            clearInterval(counterLine);
        }
    }
}



function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of</p>'+questions.length+ '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}

