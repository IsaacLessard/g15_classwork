


function person(height,age,gender,phrase){
  this.height = height;
  this.age = age;
  this.gender = gender;
  this.phrase = phrase;
  this.speak = function(){
  console.log("The person says..." + this.phrase);
  }

}

function car(year, make, wheels){
  this.wheels= wheels || 4;
  this.year = year;
  this.make = make;
  this.rev = function(){
    console.log("VrmmmmmM!!");
  }
}


function house(type,rooms,color){
  this.type = type;
  this.rooms = rooms;
  this.color = color;
  this.about = function(){
    console.log("This " +this.color + this.type + "house has " + this.rooms + " rooms");
  }
}


var computer = function (make, year, os, screenSize, ram, mail){
  this.make = make;
  this.year = year;
  this.os = os;
  this.screenSize = screenSize;
  this.ram = ram;
  this.mail = mail || "You've got mail";
  this.mail = function(){
    console.log(this.mail);
  }
}
