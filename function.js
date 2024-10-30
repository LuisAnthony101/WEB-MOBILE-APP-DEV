var num = 23;


var num_two = 2;
var sum = num + num_two;

var num_three = 40;
var num_four = 4;

var sum = num_three + num_four;


// Functions without parameters or arguments
//VOID fUNCTIONS
function summation (){
    var num_five = 40;
    

    var num_six = 4;


    var sum_three = num_five+num_six;

    console.log ("sum three: ", sum_three);

}
summation();


// Returning Function:
function summation_two(){
    var num_five = 40;

    var num_four = 4;
     

    var sum_three = num_five + num_four
 
    return sum_three;
}

console.log("Summation four:", summation_two())



//use by printing the value directly on the number
console.log("Summat ion four: ", summation_two())


//assigning the value to a variable
var sum_four = summation_two();



var sum_five = summation();


console.log(sum_five)

//FUNCTIONS WITH PARAMETERS

function summation_three(num_five,num_six){

    var sum_six = num_five + num_six;

    console.log("this is summation three editing ", num_five,"+", num_six, sum_six);


}


summation(40,4); 

summation_three(100,2);


summation_three(10000,56);

///write a function called computation sand that functions hsoulkd be able to add, a\sub, mulitiply, divide any two nyumbers that is given to it
///as logn as the function is called//


///it should do the task given it 



//returning functions with parametrers


// a function athat takes a anme of a person and greets me in luganda/
//const("Luis")


console .log("JUMBO Luis")



///write a function that calculates profit that accepts  the selling price, cost price, //
/////and number of units sold and returns the profit for a small business selling produces like maize flour

function calculate_profit (sp,cp, number_of_units_sold){

    var sp = 50;
    var cp = 50;
    var number_of_units_sold = 10;
    var profit = sp - cp;
    return profit

}