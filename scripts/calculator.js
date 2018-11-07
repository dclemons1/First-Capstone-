
function myfunction(id){
    document.cal.display.value +=id;
    console.log("working")
}
function allClear() {
  document.cal.display.value=""
}
function equals(){
  
     input= eval(document.cal.display.value)
     document.cal.display.value = input
  
  
 }

