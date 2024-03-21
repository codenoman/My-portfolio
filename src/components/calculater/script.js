let callBack = document.getElementById('out')
function display(num){
    callBack.value += num
}
function Clear (){
    callBack.value = ''
}
function calculate (){
    try{
        callBack.value = eval(callBack.value)
    } 
    catch(err){
            alert('Error')
        }
}
function Del(){
    callBack.value = callBack.value.slice(0,-1)
}