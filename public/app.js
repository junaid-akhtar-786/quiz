var question =[
    {
        Question :"The term ‘Computer’ is derived from__________?",
        Option1 : "Latin",
        Option2 : "German" ,
        Option3 :  "French" ,
        Option4 : "Arabic" ,
        Answer : "1"
    } ,{
        Question :"Who is the father of Computer?",
        Option1 : "Allen Turing",
        Option2 : "Charles Babbage" ,
        Option3 :  "Simur Cray" ,
        Option4 : "Augusta Adaming" ,
        Answer : "2"
    }  ,{
        Question :"The basic operations performed by a computer are__________?",
        Option1 : "Arithmetic operation",
        Option2 : "Logical operation" ,
        Option3 :  "Storage and relative" ,
        Option4 : "All the above" ,
        Answer : "4" 
    } ,{
        Question :" Who is the father of Internet ?",
        Option1 : "Chares Babbage",
        Option2 : "Vint Cerf" ,
        Option3 :  "Denis Riche" ,
        Option4 : "Martin Cooper" ,
        Answer : "2"
    } ,{
        Question :"If a computer has more than one processor then it is known as__________?",
        Option1 : "Uni-process",
        Option2 : "Multiprocessor" ,
        Option3 :  "Multi-threaded" ,
        Option4 : "Multi-programming" ,
        Answer : "2"

    } ,{
        Question :" A light sensitive device that converts drawing, printed text or other images into digital form is___________?",
        Option1 : "Keyboard",
        Option2 : "Scanner" ,
        Option3 :  "OMR" ,
        Option4 : "None of these" ,
        Answer : "2"
    } ,{
        Question :" WWW stands for___________?",
        Option1 : "World Whole Web",
        Option2 : "Wide World Web" ,
        Option3 :  "Web World Wide" ,
        Option4 : "World Wide Web" ,
        Answer : "4" 
    } ,{
        Question :" A collection of system programs that controls and co-ordinates the overall operations of a computer system is called____________?",
        Option1 : "System software",
        Option2 : "Operating system" ,
        Option3 :  "Utility program" ,
        Option4 : "Device driver" ,
        Answer : "2"
    } ,{
        Question :"What type of operating system MS-DOS is?",
        Option1 : "Command Line Interface",
        Option2 : "Graphical User Interface" ,
        Option3 :  "Multitasking" ,
        Option4 : " Menu Driven Interface" ,
        Answer : "1"
    } ,{
        Question :" Which technology is used in compact disks?",
        Option1 : "Mechanical",
        Option2 : "Electrical" ,
        Option3 :  "Electro Magnetic" ,
        Option4 : "Laser" ,
        Answer : "4" 
    } 
]



var count = 0
var score = 0
var ques = document.getElementById("ques")
var opt1 = document.getElementById("opt1")
var opt2 = document.getElementById("opt2")
var opt3 = document.getElementById("opt3")
var opt4 = document.getElementById("opt4")

ques.innerHTML ="1) "  + question[0].Question
opt1.innerHTML = question[0].Option1
opt2.innerHTML = question[0].Option2
opt3.innerHTML = question[0].Option3
opt4.innerHTML = question[0].Option4



function nextques(){
    count++
    ques.innerHTML =(count+1)+ ") " +question[count].Question
opt1.innerHTML = question[count].Option1
opt2.innerHTML = question[count].Option2
opt3.innerHTML = question[count].Option3
opt4.innerHTML = question[count].Option4
optn()
if (count == 9){
    document.getElementById("nextbtn").style.display="none";
    document.getElementById('resultbtn').className = "btn";

    var resultbtn = document.getElementById("resultbtn")
    resultbtn.disabled = false;

    console.table(question);
}
}

function optn(){
    var tick = document.getElementsByName("option")

    for (var i = 0 ; i < tick.length; i++){
        if(tick[i].checked ){
          tick[i].checked=false;
          if (tick[i].value == question[count-1].Answer){
            score+=10;
        }
        }console.log(score);
        
    }
}

function enable(){
    var nextbtn = document.getElementById("nextbtn")
    nextbtn.disabled = false;
}

function result(){
    var resultbtn = document.getElementById("resultbtn");
    var bigDiv = document.getElementById("bigDiv").style.display="none";
    var result = document.getElementById('result').className="main";
    document.getElementById("right").innerHTML=score/10
    document.getElementById("score").innerHTML=score
    document.getElementById("perg").innerHTML=score + "%"

    resultbtn.disabled = true;
    resultbtn.innerHTML = "Score: " + score;
    
}

var minutes = 2;
var seconds = 60;
var min = document.getElementById("min");
var sec = document.getElementById("sec");
min.innerHTML=minutes
sec.innerHTML=seconds
var interval;

function timer(){
    seconds--
 sec.innerHTML= seconds
    if (seconds == 0 ){
        minutes--
        min.innerHTML=minutes
        seconds = 60
     if ( minutes == -1 && seconds == 60){
        result() 
        clearInterval()
    
    }
    } 
}


function start() {
 setInterval(timer, 1000)
 
    // document.getElementById('startBtn').style.display='none';

}
start()