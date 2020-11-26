import * as calcData from './Calc';


// const youtuber= 'Kali Den';

// const favProg = 'React Js';


// function myName() {
//     let name = "Kali";
//     return name; 
// }

// function myNames() {
//     let names ="Kpp";
//     return names;
// }


function Calculation(){
    return (
    <>
       <ol>
      <li>Calculator In React</li>
      <li>Sum Of Two Number is {calcData.default(10,20)}</li>
      <li>Substraction Of Two Number is {calcData.sub(10,20)}</li>
      <li>Multiplication Of Two Number is {calcData.mult(10,20)}</li>
      <li>Division Of Two Number is {calcData.div(10,20)}</li>
    </ol>

    </>
    );
}


export default Calculation;





// export default youtuber;

// export {favProg, myName, myNames};