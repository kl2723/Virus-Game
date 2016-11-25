

alert("Welcome to the Help Taco Website!!!");

var age=prompt("Enter your age!");


function closeWin() {
  myWindow.close();   // Closes the new window
}


if (parseInt(age)<16){
  alert("You are too young to play!!!");
  closeWin();
}
else{
  alert("Let's save Taco!!!");
}
