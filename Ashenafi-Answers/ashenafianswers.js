
console.log("______________________ quiz 1 ___________________________");

function largerNumbers (given){
    let myNumber = given.filter(function(a){
        return a>10;
    })
    console.log(myNumber);
}
largerNumbers([7,12,34,9,5,21,15]);

console.log("______________________ quiz 2 ___________________________");

function pinCodeCheck (given) {
if(given.match(1,2,3,4,5,6,7,8,9,0) && given.length===4){ 
        console.log("correct pass")
} else {
    console.log("incorrect pass");
}
}
pinCodeCheck("1623");


console.log("______________________ quiz 3 ___________________________");

class CourseDCI {
    constructor(name, subject, numberOfStudent){
        this.name=name;
        this.subject= subject;
        this.numberOfStudent=numberOfStudent;
    }
    class13a(){
    console.log(`this class is called ${this.name} & it is a ${this.subject}
     & it has a student number of ${this.numberOfStudent}`);
}
 
}
let checker = new CourseDCI("13a", "Web-development", 18);
checker.class13a();//no time to do the sub class ....

 //g. "This is a year long web development course taught by John Smith. There are 10 students taking the course."


console.log("______________________ quiz 4 ___________________________");

let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
];
let myFilter = events.filter(a=>a.turnout>30);

console.log(myFilter);//we ll get the highest turnout with full info

console.log("______________________ quiz 5 ___________________________");

let emptyJacket =[];
let squared=[1,2,3,4,5,6];

for(let myNum of squared){
    let squared = myNum**myNum;
    console.log(squared);
};//I couldn't go beyond this, with out using a loop
 

/* if(squared/2 !==0){ */
     

//console.log(emptyJacket);
            
 
console.log("______________________ quiz 6 ___________________________");
 
let myScore =0;
class Game {
    constructor(player1, player2, player3){
        this.player1=player1;
        this.player2=player2;
        this.player3=player3;
    }

rollingDice1(){
   let res1 = (this.player1) =  Math.floor(Math.random()*10);
     if(res1 ==2){
         console.log(`your result is${myScore+=5000}`);
     }
}
rollingDice2(){
    let res2 = (this.player2)= Math.floor(Math.random()*10);
    if(res2 ==2){
        console.log(`your result is${myScore+=5000}`);
    } 
}
rollingDice3(){
    let res3 = (this.player3) =Math.floor(Math.random()*6);
    if(res3 ==2){
        console.log(`your result is${myScore+=5000}`);
    } 
}
}

let resultCheck = new Game("me", "you", "she");//not done 

resultCheck.rollingDice1();//the 1st one who reaches 10000 ll win 
//planning to do random lot & based on the outcome to give a result no time to do it

console.log("______________________ quiz 7 ___________________________");

let myDay = new Date();
myDay.setMonth(6);
myDay.setDate(13);
myDay.setFullYear(2014);

let result = myDay - new Date();
let exactDay = result/(1000*60*60*24);
console.log(exactDay);//we ll get -1803 days


console.log("______________________ quiz 8 ___________________________");

let emptyJacket1=[];
let sum=0;
const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
  ];

let totalHours = hourTracking.map((a)=>{
    let net = a.end - a.start;
    console.log(net);
 for(let a=0; a<net.length; a++){
     sum += net[a];
     console.log(net[a]);
 }    
});
//let totalNumber = totalHours.reduce((accum, curr) => accum + curr.net, 0);
//console.log(totalNumber);//it didn't addup the total value, but it diduct start from end
 

console.log("______________________ quiz 9 ___________________________");

function mapping(){
    //insert code here
    }
const powerOfTwo = mapping([1,2,3,4,5], (val) => Math.pow(val,2) );

const myCallBack = mapping (Math.sqrt([1,2,3,4,5]));
console.log(myCallBack);//??


console.log("______________________ quiz 10 ___________________________");

let board = [[1, 2, 3], 
	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"], 
         [true, false]]

         //let myIndividualWord=board.split(" ");
for(let b=0; b<board.length; b++){
    if(board==Array.isArray){
        for(let c=0; c<board.length; c++){
            console.log(board[c]);
        }
        }else{
            console.log(board[b]);
        }
    };
 