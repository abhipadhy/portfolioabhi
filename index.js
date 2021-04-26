function mail(){
    var msg = document.querySelector('#message').value;
    var email = document.querySelector('#email').value;
    var str=email;
    var nameMatch = str.match(/^([^@]*)@/);
    var from = nameMatch ? nameMatch[1] : null;

    if(email = '' || email ==' '){
        document.querySelector('#dismsg').innerHTML="Email Required :(";
        document.querySelector('#dismsg').style.display="block";
        emailjs.send("service_wo3zzzr","template_w97cma8",{from_name: from,to_name: 'abhishek',message: msg,from_email: email});
        console.log('message sent');
        document.querySelector('#message').value="";
        document.querySelector('#email').value=" ";
        setTimeout(function (){
            document.querySelector('#dismsg').style.display="none";
            document.querySelector('#dismsg').style.transition="0.4s";
        },3000);
    }
    else if(msg == '' || msg == ' '){
        document.querySelector('#dismsg').innerHTML="Message Required :(";
        document.querySelector('#dismsg').style.display="block";
        document.querySelector('#dismsg').style.transition="0.4s";
        document.querySelector('#message').value="";
        document.querySelector('#email').value=" ";
        setTimeout(function (){
            document.querySelector('#dismsg').style.display="none";
            document.querySelector('#dismsg').style.transition="0.4s";
        },3000);
    }
    else{
        document.querySelector('#dismsg').innerHTML="Email Sent :)";
        document.querySelector('#dismsg').style.display="block";
        document.querySelector('#dismsg').style.transition="0.4s";
        emailjs.send("service_wo3zzzr","template_w97cma8",{from_name: from,to_name: 'abhishek',message: msg,from_email: email});
        console.log('message sent');
        document.querySelector('#message').value="";
        document.querySelector('#email').value=" ";

        window.setTimeout(function (){
            document.querySelector('#dismsg').style.display="none";
            document.querySelector('#dismsg').style.transition="0.4s";
        },3000);
    }
    
    
}

function view(){
    document.querySelector('h1').style.opacity=0.80;
    document.querySelector('h3').style.opacity=0.80;
    
};

function openNav() {
    console.log(screen.width);
    if(screen.width<500){
        document.querySelector('.menu').style.width = "100%";
        document.querySelector('.menubtn').style.display="none";
        document.querySelector('.top').style.Right="0%";
        document.querySelector('.top').style.width = "0%";
        document.querySelector('.topgrad').style.Right="0%";
        document.querySelector('.topgrad').style.width = "0%";
        document.querySelector('.logolink').style.left ="3%";
        document.querySelector('.top').style.transition="0.4s";
        document.querySelector('.topgrad').style.transition="0.4s";
        document.querySelector('.top2').style.Right="0%";
        document.querySelector('.top2').style.width = "0%";
        document.querySelector('.top2').style.transition="0.4s";
        
       
    }
    else{
        document.querySelector('.menu').style.width = "30%";
        document.querySelector('.menubtn').style.display="none";
        document.querySelector('.top').style.Right="30%";
        document.querySelector('.top').style.width = "70%";
        document.querySelector('.topgrad').style.Right="30%";
        document.querySelector('.topgrad').style.width = "70%";
        document.querySelector('.logolink').style.left ="3%";
        document.querySelector('.top').style.transition="0.4s";
        document.querySelector('.topgrad').style.transition="0.4s";
        document.querySelector('.top2').style.Right="30%";
        document.querySelector('.top2').style.width = "70%";
        document.querySelector('.top2').style.transition="0.4s";
        document.querySelector('#cont').style.marginTop="80%"
        document.querySelector('#limg').style.width="300px";
        document.querySelector('#limg').style.height="300px";
        document.querySelector('#cont').style.transition="0.6s";
        document.querySelector('#limg').style.transition="0.6s";
    }
};

function closenav(){
  
    document.querySelector('.menu').style.width = "0%";
    document.querySelector('.menubtn').style.display="block";
    document.querySelector('.top').style.Right="0%";
    document.querySelector('.topgrad').style.Right="0%";
    document.querySelector('.topgrad').style.width = "100%"
    document.querySelector('.top').style.width = "100%"
    document.querySelector('.logolink').style.left ="3%";
    document.querySelector('.top').style.transition="0.4s";
    document.querySelector('.topgrad').style.transition="0.4s";
    document.querySelector('.top2').style.Right="0%";
    document.querySelector('.top2').style.width = "100%";
    document.querySelector('.top2').style.transition="0.4s";
    document.querySelector('#cont').style.marginTop="55%";
    document.querySelector('#limg').style.width="500px";
    document.querySelector('#limg').style.height="500px";
    document.querySelector('#cont').style.transition="0.6s";
    document.querySelector('#limg').style.transition="0.6s";
}