
var t1=document.getElementById("t1");
var t2=document.getElementById("t2");
var t3=document.getElementById("t3");

t1.style.display="block";


function sh1(){
    
        t1.style.display="block";
        t2.style.display="none";
        t3.style.display="none";
        

}

function sh2(){
    
        t1.style.display="none";
        t2.style.display="block";
        t3.style.display="none";
        document.getElementById("l2").className="actv";
   


}


function sh3(){
    
        t1.style.display="none";
        t2.style.display="none";
        t3.style.display="block";
     document.getElementById("l3").className="actv";
        


}

