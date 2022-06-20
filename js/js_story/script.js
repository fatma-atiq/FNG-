/************* start slider**************************/
var team = document.getElementsByClassName("team");
var selctedindex=1;

function show(n)
{
    selctedindex+=n;
    slid(selctedindex);
    
}


 function slid(n)
{
    if(selctedindex>team.length)
        {
            selctedindex=1;
            
        }
    
    if(selctedindex<1)
        {
            selctedindex=team.length;
            
        }
    
    for(var i = 0 ; i<team.length; i++)
        {
            team[i].style.display="none";
            
        }
    team[selctedindex-1].style.display="block"
}

slid(1);

/************* end slider**************************/

