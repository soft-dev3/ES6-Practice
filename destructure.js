const person ={name:'Saddam', age:23, job:'student',address:'badda', phone:'01768540246',friend:['mohiuddin','hridoy','towkir','foysal']}
const friendName = person.friend;
// const phone= person.phone;
// console.log(person,friendName);
// console.log(person,phone);
// const { phone,name,address } = person;
// console.log(name,phone,address);
// console.log(name,friendName);

const friends =['Sakib', 'arif','nafij','korim','sabbir','rakib'];
const [littelFriend, nextFriend, ...restFriends]=friends;

const complexObject={
    name:'Hello',
    info:{
        address: 'badda',
        phone:'01768',
        salary:'1'
    },
    job:'IT company'
}

const {phone}=complexObject.info;
console.log(phone);
console.log(littelFriend,nextFriend);
console.log(restFriends);

