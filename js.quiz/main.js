const startbtn = document.querySelector('.start-btn')
const firstdiv = document.querySelector('.start-div')
const firsttext = document.querySelector('.start-quiz')
const mainquestion = document.getElementById('main-question')
const answerboxes = document.querySelectorAll('.input')
const switchbtn = document.querySelector('.next')
const scoreElement = document.querySelector('.score');
let score = 0
let correctAnswer = 0




startbtn.addEventListener('click', () => {
    startbtn.style.display = 'none';
    firstdiv.style.display = 'none';
    firsttext.style.display = 'none';
    mainquestion.textContent = 'what is 2 + 2?'
    switchbtn.textContent = 'next question'

    questionChange('what is 2 + 2',[2,3,5,4])
    correctAnswer = 4
});

function questionChange(question,answers){
    mainquestion.textContent = question
    answerboxes.forEach((answerbox,index) => {
    answerbox.textContent = answers[index]
    answerbox.addEventListener('click',() => {
        if(answerbox.textContent == correctAnswer.toString()){
            answerbox.style.color = 'green';
            answerbox.style.backgroundColor = 'lightgreen';
            score++
            scoreElement.textContent = `Score: ${score}` 
            switchbtn.addEventListener('click',() =>{
            answerbox.style.color = 'white';
            answerbox.style.backgroundColor = 'black';
             
        })
        }else{
            answerbox.style.color = 'red';
            answerbox.style.backgroundColor = 'pink';
            scoreElement.textContent = `Score: ${score}`
            switchbtn.addEventListener('click',() =>{
                answerbox.style.color = 'white';
                answerbox.style.backgroundColor = 'black';
                
           })
        }
    })
    });
}
switchbtn.addEventListener('click', () => {
    questionChange('what is 4 + 4',[4,5,7,8])
    correctAnswer = 8 
})

