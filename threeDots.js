const ages = [12,14,15,16,11,19];
const ages2 =[15,16,12];
const ages3 =[34,23,22];
const allAges = ages.concat(ages2).concat([4]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);

const  business = 645;
const minister =453;
const sochib= 234;
const takaPoisa = [45, 34534,345, 45,756,45]
// const maximum= Math.max(business,minister,sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);