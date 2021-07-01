
// const start_game = document.getElementById('start_game'); // [ ]
const start_game = document.querySelector('.start_game');
let questionsContent = '<header><h1>Welcome To Your Game </h1></header><div class="q_container"><p>@Q</p><form action=""><p>@question</p><input type="radio" id="a1" name="answer" value="@value1"><label for="a1" >@value1</label><br><input type="radio" id="a2" name="answer" value="@value2"><label for="a2">@value2</label><br><input type="radio" id="a3" name="answer" value="@value3"><label for="a3">@value3</label><br><input type="radio" id="a4" name="answer" value="@value4"><label for="a4">@value4</label><br><button type="button" class="submit_answer" disabled="">submit</button></form></div>'
let result = '<header><h1>YOU @TYPE </h1></header><div class="r_container"><div><h1>Congratulations you get a {10} from 10</h1><h3>Your from {first} on the best players</h3></div><aside><h3>The Best Players </h3><ul><li>Sameer  : 9/10</li><li>Sameer  : 9/10</li><li>Sameer  : 9/10</li><li>Sameer  : 9/10</li></ul></aside></div><form action="" class="play_again"><button type="submit">Play again</button></form>'
let mark = 0;
const questions = {
    Q1:{
        q:'Can I park here?',
        answers:['Only for half an hour','Sorry, I did that.',`It's the same place.`,'0'],
        ture_answer:1

    },
    Q2:{
        q:'Is the weather like this in _______ country too?',
        answers:['you','your.',`yourself.`,'0'],
        ture_answer:1

    },
    Q3:{
        q:'Can I park here? Q3',
        answers:['Only for half an hour','Sorry, I did that.',`It's the same place.`,'0'],
        ture_answer:1

    },
    Q4:{
        q:'_________ of them understands English?',
        answers:['anybody','somebody',`none`,'0'],
        ture_answer:1

    },
    Q5:{
        q:'Does the police think the thief to be _______?',
        answers:['he','thay.',`your.`,'him'],
        ture_answer:1

    },
    Q6:{
        q:'The school needs ________ students to wear proper uniform.',
        answers:['its','his',`here`,'0'],
        ture_answer:1

    },
    Q7:{
        q:'Please help ________ to some food.',
        answers:['you','your.',`yourself.`,'0'],
        ture_answer:1

    },
    Q8:{
        q:'We decided to set out ______ it was late',
        answers:['and','though',`than`,'0'],
        ture_answer:1

    },
    Q9:{
        q:'She is older _____ she looks',
        answers:['than','until',`when`,'0'],
        ture_answer:1

    },
    Q10:{
        q:'Can I park here?',
        answers:['Only for half an hour','Sorry, I did that.',`It's the same place.`,'0'],
        ture_answer:1

    },
    Q11:{
        q:'I will make a cake _______ I have time.',
        answers:['by','as soon as',`before.`,'0'],
        ture_answer:1

    },
    Q12:{
        q:'Can I park here?',
        answers:['Only for half an hour','Sorry, I did that.',`It's the same place.`,'0'],
        ture_answer:1

    },
    Q13:{
        q:'Can I park here?',
        answers:['Only for half an hour','Sorry, I did that.',`It's the same place.`,'0'],
        ture_answer:1

    },
    Q14:{
        q:'Can I park here?',
        answers:['Only for half an hour','Sorry, I did that.',`It's the same place.`,'0'],
        ture_answer:1

    },
    Q15:{
        q:'Take the bag with you ______ you leave.',
        answers:['whan','by',`as soon as`,'before'],
        ture_answer:1
    },
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
