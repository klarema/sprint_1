const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo');
}); 

server.listen(port, hostname, () => {
    // console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// // Nivell 1 - Exercici 1: una funció que mostri per consola el nom d'usuari al invocar-la passant-li el nom com a paràmetre

readline.question("Please enter - Nom: ", nom => {
    console.log("Your name is: ",  nom)
    readline.close()
})

// Nivell 2 - Exercici 1: el nom i cognoms de l'usuari mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge

readline.question('Please enter - Nom: ', (nom) => {
    readline.question('Please enter - Cognom: ', (cognom) => {
        console.log(`Full name is:  
        ${nom} ${cognom}` );
        readline.close();
    });
});

// // Nivell 2 - Exercici 2: Invoca una funció que retorni un valor des de dins d'una template literal

function returnValue(){
    let myValue = "Un Valor";
    console.log(`Template ${myValue} Literal`)
}
returnValue()


// // Nivell 3 - Exercici 1: deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament

function loop1(){
    let count = 0
    for (let x = 0; x < 10; x++){
        console.log(count)
        count += 1
    }
}
function loop2(){
    let count = 0
    for (let x = 0; x < 10; x++){
        console.log(count)
        count += 1
    }
}
const myFunctions = [loop1, loop2];

for(let x in myFunctions){
    myFunctions[x]();
}

// // Nivell 3 - Exercici 2: una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari rebut com a paràmetre

let displayName = function () {
    readline.question('Nivell 3 - Exercici 2: Please enter - Name: ', (name) => {
        readline.close();
        return console.log(name);
    });
};   
displayName()

// edit to check git clone works
