function loginHandler(){
    var uname = document.querySelector('#name');
    var upass = document.querySelector('#pass');
    console.log(uname.value,upass.value);

    if(uname.value != 'admin'){
    
        var div_error = document.querySelector('#error');
        div_error.innerHTML = "error";
    }
    else{
        resetForm();
    }
}   

function resetForm(){
    var uname = document.querySelector('#name');
    var upass = document.querySelector('#pass');
    uname.value = ''
    upass.value = ''
   
}

function onBlurHandler(){
    console.log("onBlurHandler");
}

function onFocusHandler(){
    console.log("onFocusHandler");    
}