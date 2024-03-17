const name="Saddam";
// name="Hossain";
// console.log(name);

const numbers =[12,34];
numbers[1]=99;
numbers.push(23);
// const nayok={name:"Sakib khan",phone:0988};
// console.log(numbers);

let patientName= "Rahim chaca";
patientName= "Fatema Khala";
console.log(patientName);

let sum=1;
for(let i=0;i<10;i++){ // let leak hobe na
    sum=sum+i;
    console.log(i);
}
// console.log(i);