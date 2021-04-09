function validate() {

    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var date = document.getElementById("date").value;
    var classes = document.getElementById("classes").value;
    var general = document.getElementById("general").value;
    var c1 = document.getElementById("c1").checked
    var c2 = document.getElementById("c2").checked
    var c3 = document.getElementById("c3").checked
   


    // console.log("rrrrrrrr",from,to,date,classes,general);
    debugger
    if ((from.length == 0) || (to.length == 0) || (date.length == 0) || (classes.length == 0) || (general.length == 0)) {
        alert("opps! Something wrong");
    }
    else {
        alert("Got it!!.. Thanks for register here :)");
    }
     
    if(c1 == true){
        c1 = true
    }
    else{
        c1= false
    }
    if(c2 == true){
        c2 = true
    }
    else{
        c2 = false
    }
    if(c3 == true){
        c3 = true
    }
    else{
        c3 = false
    }
    console.log("this valueof", c1,c2,c3)
}
function myfun(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(res =>{
   console.log("res",res)
//    window.onload = setTimeout(function(){
//     alert(res.title)
//     window.location = 'http://127.0.0.1:5500/train.html';
// }, 5000);
   

  })
  .catch(err =>{
      console.log("err",err)
  })
}



catch()
