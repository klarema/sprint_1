module.exports = {};
const employees = require("./employees.json");
const salaries = require("./salaries.json");

module.exports.getEmployee = (_param) => {
  return new Promise((resolve, reject) => {
    for(let x in employees){
        if(employees[x].id === _param){
          resolve(employees[x])
          // resolve(employees[x].id)
        }
    }
    // reject(new Error("Employee not found. "))
    reject("Employee not found. ")
  })
};

module.exports.getSalary = (_param) => {
  return new Promise((resolve, reject) => {
      for(let x in salaries){
          if(salaries[x].id === _param.id){
              resolve (salaries[x].salary)
          }
      }
      reject (new Error("Salary not found. "))
  })
};

module.exports.myDelayFunc = () => {
  return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved after 2 seconds');
      }, 2000);
  });
}



// module.exports = {};
// var myMockData = require('./employee');

// getEmployee = (_param) => {
//   return new Promise((resolve, reject) => {
//     for(let x in employees){
//         if(employees[x].id === _param){
//           resolve(employees[x])
//           // resolve(employees[x].id)
//         }
//     }
//     // reject(new Error("Employee not found. "))
//     reject("Employee not found. ")
//   })
// };

// getSalary = (_param) => {
//   return new Promise((resolve, reject) => {
//       for(let x in salaries){
//           if(salaries[x].id === _param.id){
//             resolve (salaries[x].salary)
//           }
//       }
//       reject (new Error("Salary not found. "))
//   })
// };

