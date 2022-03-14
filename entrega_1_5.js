var fs = require("fs");
var zlib = require('zlib');
const exec = require('child_process').exec; 

// Nivel 1 Ex 1: Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
const myRecursiveMessage = setInterval(() => {
    console.log('Missatge: amb demora d\'un segon');
    }, 1000);
function myClearInterval(arg) {
    clearInterval(arg);
  }
setTimeout(myClearInterval, 4000, myRecursiveMessage);


// Nivel 1 Ex 2: Crea una funció que, en executar-la, escrigui una frase en un fitxer
const myFitxer = "./fitxer1.txt"
const myFrase = "Una frase en un fitxer (Nivel 1 Ex 2) "

 const writeToFile = (myFitxer, myFrase) => {
  try {
    fs.writeFileSync(myFitxer, myFrase, { flag: 'a+' })
  } catch (err) {
    console.error(err)
  }
}
writeToFile(myFitxer, myFrase);

// Nivel 1 Ex 3: Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior
// https://nodejs.dev/learn/reading-files-with-nodejs
const showFileContent = () => {
    fs.readFile(myFitxer,  'utf8' , (err, data) => {
      if (err) {
        throw err
      }else
      console.log(data.toString())
    })
  }
  showFileContent();


// Nivel 2 Ex 1: Crea una funció que comprimeixi el fitxer del nivell 1 
const gzip = zlib.createGzip();
const mygzipFile = './mygzipfile.txt.gz'
  
function compressFile(gzip, myFitxer, mygzipFile){
    var sourceFile = fs.createReadStream(myFitxer);
    var content = fs.createWriteStream(mygzipFile);
    sourceFile.pipe(gzip).pipe(content);
}
compressFile(gzip, myFitxer, mygzipFile);


// Nivel 2 Ex 2: Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador utilizant Node Child Processes.
function printCurrDir(){
    exec(`dir`, (error, stdout, stderr) => {  
        if (error) {  
            console.log(`error: ${error.message}`);  
            return;  
        }  
        if (stderr) {  
            console.log(`stderr: ${stderr}`);  
            return;  
        }  
        console.log(`stdout: ${stdout}`);  
    });  
} 
printCurrDir();

