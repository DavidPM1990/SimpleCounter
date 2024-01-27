// import React from "react";
// import SecondsCounter from "./counter";


// const Home = () => {
//   let counter = 0;

//   setInterval(() => {
//     const six = document.getElementById("six");
//     const five = document.getElementById("five");
//     const four = document.getElementById("four");
//     const three = document.getElementById("three");
//     const two = document.getElementById("two");
//     const one = document.getElementById("one");

//     counter += 1;

 
//     six.textContent = Math.floor((counter / 100000) % 10);
//     five.textContent = Math.floor((counter / 10000) % 10);
//     four.textContent = Math.floor((counter / 1000) % 10);
//     three.textContent = Math.floor((counter / 100) % 10);
//     two.textContent = Math.floor((counter / 10) % 10);
//     one.textContent = counter % 10;
//   }, 1000);

//   return (
//     <div className="">
//       <SecondsCounter />
//     </div>
//   );
// };


// const Home = () => {
// 	  return (
//     <div className="">
//       <SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} />
//     </div>
//   );
// }


// export default Home;