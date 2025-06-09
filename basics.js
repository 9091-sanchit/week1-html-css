
// switch (studentmarks){
//   case 100;
//   console.log("perfct score");
//   break;
//   case 90;
//   console.log("a");
//   break;

// }
// for(i=0;i<10;i++){
//   console.log(i);
// }
// let obj ={
//   name: "sanchit",
//   age:18,
//   gender: "male",

// };

// console.log(`my name is ${obj.name},age is ${obj.age}`);

// for (let key in obj){
//   console.log(obj[key]);
// }

let studentmarks = 70;
function getgrade(studentmarks){

if (studentmarks >= 90) {
  console.log("grade A");
} else if (studentmarks >= 80) {
  console.log("grade B");
} else if (studentmarks >= 70) {
  console.log("grade B");
 } else if (studentmarks >= 60){
  console.log("grade C");
 }else if (studentmarks >= 50){
  console.log("grade D");
 } else {
  console.log("grade F");
 }
}
getgrade(65);

const getgradeArrow = (m=75)=>{
  try { 
if (studentmarks >= 90) {
  console.log("grade A");
} else if (studentmarks >= 80) {
  console.log("grade B");
} else if (studentmarks >= 70) {
  console.log("grade B");
 } else if (studentmarks >= 60){
  console.log("grade C");
 }else if (studentmarks >= 50){
  console.log("grade D");
 } else {
  console.log("grade F");
 }
} catch(e) {
  console.log("an error occrured");
} finally {
  console.log("this is finally");
}
};
getgradeArrow();

