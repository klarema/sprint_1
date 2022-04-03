// module.exports = {};

var Calzado = function () {
    if(this.constructor === Calzado){
    throw new Error("Calzado is an Abstract Class. Cannot be instantiated. ");
    }
  };
  Calzado.prototype.material = function () {
    return "leather and synthetic mix"
  }
  Calzado.prototype.tacon = function () {
  throw new Error ("method must be implemented. ")
  }
  Calzado.prototype.style = function () {
  throw new Error ("method must be implemented. ")
  }
  
  var Botas = function() {  
  Calzado.apply(this, arguments);  
  };  
  Botas.prototype = Object.create(Calzado.prototype);  
  Botas.prototype.constructor = Botas;  
  Botas.prototype.tacon = function() {  
  return "bajo";  
  }  
  Botas.prototype.style = function() {  
  return "formal or casual" 
  }  
  
  var Zapato = function() {
    Calzado.apply(this, arguments);  
    }
    Zapato.prototype = Object.create(Calzado.prototype);  
    Zapato.prototype.constructor = Zapato;  
    Zapato.prototype.tacon = function() {
      return "alto";
    }
    Zapato.prototype.style = function() {
      return "formal";
    }
    
    // function createCalzado(objId, ObjectType){
    //   if(ObjectType === "zapato"){
    //     console.log("Create zapato, ID: "+ objId)
    //     var objId = new Zapato()
    //     console.log("Tacon: " + objId.tacon() + ", Style: " + objId.style() + ", " + objId.material())
    //   }
    //   else{
    //     console.log("Create botas, ID: "+ objId)
    //     var objId = new Botas()
    //     console.log("Tacon: " + objId.tacon() + ", Style: " + objId.style() + ", " + objId.material())
    //   }
    // }