function validate(e){
    e.preventDefault();
var name=document.cForm.name.value;
var email=document.cForm.email.value;
var mobile=document.cForm.mobile.value;
var city=document.cForm.city.value;
var gender=document.cForm.gender.value;
var lang=[];
var checkOpt=document.getElementsByName('lang[]');
for(var i=0;i<checkOpt.length;i++){
    if(checkOpt[i].checked){
        lang.push(checkOpt[i].value);
    }
}
console.log('lang=',lang);

var nameErr=emailErr=mobileErr=genderErr=langErr = true;

if(name===""){
    printError("nameErr","name field cannot be empty");
}else{
    let regex=/^[a-zA-Z\s]+$/;
    if(regex.test(name)===false){
        printError("nameErr","please enter valid name");
    }else{
        printError("nameErr","");
        nameErr=false;
    }
}

if(email===""){
    printError("emailErr","email field cannot be empty")
}else{
    let regex=/^\S+@\S+\.\S+$/;
    if(regex.test(email)===false){
        printError("emailErr","Invalid email id");
    }else{
        printError("emailErr","");
        emailErr=false;
    }
}

if(mobile===""){
    printError("mobileErr","mobile field cannot be empty");
}else{
    let regex=/^[6-9]\d{9}$/;
    if(regex.test(mobile)===false){
        printError("mobileErr","Invalid mobile num");
    }else{
        printError("mobileErr","");
        mobileErr=false;
    }
}

if(city==="null"){
    printError("cityErr","please select city name")
}else{
    printError("cityErr","");
    cityErr=false;
}

if(gender===""){
    printError("genderErr","please select gender");
}else{
    printError("genderErr","");
    genderErr=false;
}

if(lang.length===0){
    printError("langErr","please select language");
}else{
    printError("langErr","");
    langErr=false;
}

if((nameErr&&emailErr&&mobileErr&&genderErr&&cityErr&&langErr)===false){
    let data={
        name:name,
        email:email,
        gender:gender,
        mobile:mobile,
        city:city,
        language:lang
    };
}
}

function printError(eleId,msg){
    document.getElementById(eleId).innerText=msg;
}