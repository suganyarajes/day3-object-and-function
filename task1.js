//how to compare two JSON have the same properties without order
let obj1 ={
    name:"rithvik",
    age:5
};

let obj2 ={
    age:5,
    name:"rithvik"
};

for(var a in obj1){
    console.log(a, obj1[a]); 

    for(var b in obj2){
        console.log(b, obj2[b]); 
     }
 }
if(a==b){
    console.log("JSON have the same properties");
  }
  else {
    console.log("JSON not the same properties");
  }


//output:


//"not same"
