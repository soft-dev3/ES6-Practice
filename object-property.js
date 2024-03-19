const students= [
    {id:35,Name:'Saddam'},
    {id:36,Name:'Mhiuddin'},
    {id:37,Name:'Towkir'},
    {id:38,Name:'Foysal'}
];
// output=[];
// for(let i=0;i<=students.length;i++){
//     const elements = students[i];
//     output.push(elements);
    
// }

const names =students.map(s =>s.Name);
const ids = students.map(s=>s.id)
const bigger = students.filter(s=>s.id>37)
const biggerOne = students.find(s=>s.id>37)
console.log(biggerOne);