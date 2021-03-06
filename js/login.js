console.log("login js");
var arr=JSON.parse(localStorage.getItem('array'));

 function submitt(){
    var email=document.getElementById('loginemail').value;
    var pwd=document.getElementById('password').value;
    let emailpattern=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
    if(!email.match(emailpattern))
    document.getElementById('emailvalid').innerHTML="Enter a valid email";
    else{
    var flag=1;
    var ind;
    for(let i=0;i<arr.length;i++)
    { 
        if(arr[i].email==email)
        {
            flag=0;
            ind=i;
            break;
        }
       
    }
    if (flag==0)
    {
      
        if(arr[ind].pwd==pwd){
            document.getElementById('emailvalid').innerHTML="";
            document.getElementById('succ').innerHTML="Valid user";
        }
        else
        document.getElementById('succ').innerHTML="Invalid password";
        
    }
    else
    document.getElementById('succ').innerHTML="Invalid User";
 }
 }
 