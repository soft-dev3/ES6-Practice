let bonus = 20;

function sum(first, second){
    let result = first+ second + bonus;
    console.log(result);
    if(result>9){
        var mood = "happy";
        mood = "nothing";
        mood = "hungry";
        
    }
    console.log(mood);
    return result;
    
}


const output = sum(3,8);
// console.log(output);

//var variable can accessible/declaration part in parent/ top and can print everywhere.
//one the other hand let or const can't do this.