let arr=JSON.parse(localStorage.getItem('array'));
if(arr==null)
{
    arr=[];
}
function submitt()
{
    let namepattern=/^[A-Za-z]+$/;
    let phonepattern=/^\d{10}$/;
    let emailpattern=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
    let name=document.getElementById('namef').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;
    let pwd=document.getElementById('password').value;
    if(name=="" || email=="" || phone=="" || pwd=="")
       document.getElementById('empvalid').innerHTML="All fields are necessary";
      else if(!name.match(namepattern))
       {
           document.getElementById('namevalid').innerHTML="Enter a valid name";
       }
       else if(!email.match(emailpattern))
       {
           document.getElementById('emailvalid').innerHTML="Enter a valid email";
       }
       else if(!phone.match(phonepattern))
       {
           document.getElementById('phonevalid').innerHTML="Enter a valid number";
       }
      
else{
    let obj1=new Object();
    obj1.name=name;
    obj1.email=email;
    obj1.phone=phone;
    obj1.pwd=pwd;
    
    arr.push(obj1);
    console.log(arr);
    localStorage.setItem('array',JSON.stringify(arr));
    document.getElementById('succ').innerHTML="Registered"
    document.getElementById('emailvalid').innerHTML="";
    document.getElementById('namevalid').innerHTML="";
    document.getElementById('empvalid').innerHTML="";
    document.getElementById('phonevalid').innerHTML="";
}
}

