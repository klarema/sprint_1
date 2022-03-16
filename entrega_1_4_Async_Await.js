// Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id. 
// Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari. 

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 22,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];
// let employeeName = 'Bill Gates'; 
let employeeId = 2;
const getEmployee = (_param) => {
    return new Promise((resolve, reject) => {
        for(let x in employees){
            if(employees[x].id === _param){
                resolve(employees[x])
            }
        }
        reject(new Error("Employee not found. "))
    })
};

const getSalary = (employeeObj) => {
    let found = false;
    for(let x in salaries){
        if(salaries[x].id === employeeObj.id){
            found = true;
            return salaries[x].salary
        }
    }
    if(!found){
        return (console.log("Salary Id not found. "))
    }
};

const myDelayFunc = () => {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved after 2 seconds');
        }, 2000);
    });
}

// Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu salari, usant les funcions que has definit a l'exercici anterior.
// https://thecodebarbarian.com/unhandled-promise-rejections-in-node.js.html
async function findingNameAndSalary () {
    try{
        const printEmployeeName = await getEmployee(employeeId);
        console.log(printEmployeeName.name);
        const printSalary = getSalary(printEmployeeName);
        console.log(printSalary); //to fix - undefined when not found 
    } catch (error) {
        console.log(error.message)
    }
}
findingNameAndSalary(employeeId);

// N2 Ex1 Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.
async function asyFunc2 () {
        const messageAfterDelay = await myDelayFunc();
        console.log(messageAfterDelay)
}
asyFunc2()
// N3 Ex1  Captura tots els errors possibles dels nivells 1 i 2.
