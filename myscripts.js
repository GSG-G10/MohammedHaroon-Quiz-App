
// const start_game = document.getElementById('start_game'); // [ ]
const start_game = document.querySelector('.start_game');
let questionsContent = '<header><h1>Welcome To Your Game </h1></header><div class="q_container"><p>@Q</p><form action=""><p>@question</p><input type="radio" id="a1" name="answer" value="@value1"><label for="a1" >@value1</label><br><input type="radio" id="a2" name="answer" value="@value2"><label for="a2">@value2</label><br><input type="radio" id="a3" name="answer" value="@value3"><label for="a3">@value3</label><br><input type="radio" id="a4" name="answer" value="@value4"><label for="a4">@value4</label><br><button type="button" class="submit_answer" disabled="">submit</button></form></div>'
let result = '<header><h1>YOU @TYPE </h1></header><div class="r_container"><div><h1>Congratulations you get a {10} from 10</h1><h3>Your from {first} on the best players</h3></div><aside><h3>The Best Players </h3><ul><li>Sameer  : 9/10</li><li>Sameer  : 9/10</li><li>Sameer  : 9/10</li><li>Sameer  : 9/10</li></ul></aside></div><form action="" class="play_again"><button type="submit">Play again</button></form>'
let mark = 0;
const questions = {
    Q1:{
        q:'Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1',
        answers:['what','why','who','is'],
        ture_answer:2

    },
    Q2:{
        q:'Q2Q2Q2Q2Q2Q2',
        answers:['what','why','who','is'],
        ture_answer:1
    },
    Q3:{
        q:'Q3Q3Q3Q3Q3Q3Q3Q3Q3',
        answers:['what','why','who','is'],
        ture_answer:3
    },
    Q4:{
        q:'Q4Q4Q4Q4Q4Q4Q4',
        answers:['what','why','who','is'],
        ture_answer:4
    },
    Q5:{
        q:'Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5',
        answers:['what','why','who','is'],
        ture_answer:3
    },
    Q6:{
        q:'Q6Q6Q6Q6Q6Q6Q6Q6Q6Q6Q6Q6Q6',
        answers:['what','why','who','is'],
        ture_answer:1
    },
    Q6:{
        q:'Q6Q6Q6Q6Q6Q6Q6Q6',
        answers:['what','why','who','is'],
        ture_answer:4
    },
    Q7:{
        q:'Q7Q7Q7Q7Q7Q7Q7',
        answers:['what','why','who','is'],
        ture_answer:1
    },
    Q8:{
        q:'Q8Q8Q8Q8Q8Q8Q8',
        answers:['what','why','who','is'],
        ture_answer:2
    },
    Q9:{
        q:'Q9Q9Q9Q9Q9Q9Q9',
        answers:['what','why','who','is'],
        ture_answer:3
    },
    Q10:{
        q:'Q10Q10Q10Q10',
        answers:['what','why','who','is'],
        ture_answer:1
    },
    Q11:{
        q:'Q11Q11Q11Q11',
        answers :['what','why','who','is'],
        ture_answer:3
    },
    Q12:{
        q:'Q12Q12Q12Q12Q12',
        answers:['what','why','who','is'],
        ture_answer:4
    },
    Q13:{
        q:'Q13Q13Q13',
        answers:['what','why','who','is'],
        ture_answer:2
    }

}
let q_array = Object.keys(questions);
let counter = 1
function enable_submit(){
    const radio1 = document.querySelector('#a1');
    radio1.onclick = () => {
        let player_name = document.querySelector('.submit_answer').removeAttribute("disabled");;
    };                        
    const radio2 = document.querySelector('#a2');
    radio2.onclick = () => {
        let player_name = document.querySelector('.submit_answer').removeAttribute("disabled");;
    };                        
    const radio3 = document.querySelector('#a3');
    radio3.onclick = () => {
        let player_name = document.querySelector('.submit_answer').removeAttribute("disabled");;
    };                        
    const radio4 = document.querySelector('#a4');
    radio4.onclick = () => {
        let player_name = document.querySelector('.submit_answer').removeAttribute("disabled");;
    };                        
}
function createResultContent(mark){
    console.log(mark)
    let result1 = result
    if(mark >= 5){
        result1 = result.replaceAll('@TYPE','WIN')
    }else{
        result1 = result.replaceAll('@TYPE','lose')
        result1 = result1.replaceAll('Congratulations','sorry')

        
    }
    result1 = result1.replaceAll('{10}',mark)
    let new_body = document.getElementById("body").innerHTML = result1;
}


function upCounter() {
    counter = counter+ 1 
}

function checkAnswer(Q_num,ture_answer) {
    var getSelectedValue = document.querySelector( 'input[name="answer"]:checked'); 
    let index_of_answers = questions[Q_num]["answers"].indexOf(getSelectedValue.value)

    if (index_of_answers+1 == ture_answer){
        mark +=1 
    }
}

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

function Q_submit(Q_num,ture_answer){
    const submit_answer = document.querySelector('.submit_answer');
    
    submit_answer.onclick = () => {
        checkAnswer(Q_num,ture_answer);
        createQuestionsContent(counter)
    };
}

function createQuestionsContent(counter){
    upCounter()
    if (counter < 11){
        let random_q = q_array.sample()
        q_array.splice(q_array.indexOf(random_q),1)
        let questionsContent1 = questionsContent.replaceAll('@Q','Q'+counter)
        questionsContent1 = questionsContent1.replaceAll('@question',questions[random_q]['q'])
        questionsContent1 = questionsContent1.replaceAll('@value1',questions[random_q]["answers"][0])
        questionsContent1 = questionsContent1.replaceAll('@value2',questions[random_q]["answers"][1])
        questionsContent1 = questionsContent1.replaceAll('@value3',questions[random_q]["answers"][2])
        questionsContent1 = questionsContent1.replaceAll('@value4',questions[random_q]["answers"][3])
        let new_body = document.getElementById("body").innerHTML = questionsContent1;
        enable_submit()
        Q_submit(random_q,questions[random_q]['ture_answer'])
    }else{
        createResultContent(mark)
    }
}

start_game.onclick = () => {
    let player_name = document.querySelector('.player_name').value;
    if (player_name){
        let myobj = document.getElementById("all_content");
        myobj.remove();
        createQuestionsContent(counter)

    }else{
        let warning_msg = document.querySelector('.warning_msg').innerHTML = 'Enter valid name';
    }                         
};                        
