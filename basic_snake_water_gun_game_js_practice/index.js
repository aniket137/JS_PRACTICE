let i=10
let ccpu=0
let cuser=0
while(i--){
let user=prompt("enter s,w,g");
let cpui=Math.floor(Math.random()*3)
let cpu=["s","w","g"][cpui];

var match=(cpu,user)=>{
    if(cpu==user)
    {
        return "nobody";
    }

    else if( cpu==="s"&& user==="w")
    {
     return "cpu"
  }


  else if( cpu==="s"&& user==="g")
     {
     return "user"
     }

  else if( cpu==="g"&& user==="w")
     {
     return "user"
     }
     

     else if( cpu==="g"&& user==="s")
     {
     return "cpu"
     }

     else if( cpu==="w"&& user==="g")
     {
     return "cpu"
     }

     else if( cpu==="w"&& user==="s")
     {
     return "user"
     }   
}
let result= match(cpu,user)
if(result=cpu)
{
    ccpu++;
}
else{
    cuser++;
}
document.write(`cpu:${cpu} and user : ${user} the winner is : ${result} <br>` )
}
if(ccpu>cuser)
{
    document.write("cpu won")
}
else{
    document.write("user aniket")
}
