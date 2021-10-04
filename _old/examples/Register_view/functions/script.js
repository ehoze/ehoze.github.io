var aler="  ";
var aller=0;

var Fname = document.getElementById("Fname"); 
var Lname = document.getElementById("Lname"); 
var email = document.getElementById("email"); 
var pass = document.getElementById("pass"); 
var cpass = document.getElementById("cpass"); 
var check = document.getElementById("checkbox");


var przycisk = document.getElementById("przycisk");
przycisk.disabled = true;

function enable() 
    {
        var checkBox = document.getElementById("checkbox");

        if (checkBox.checked == true)
            {
                przycisk.disabled = false;
            } 
        else 
            {
                przycisk.disabled = true;
            }
    }              



function rege()
{

    aler = " ";
    aller = 0;


        if(check.checked == true)
           {
                console.log("check 1");
                aller = " ";
           }
           else
           { 
                aler=aler+'Proszę zatwierdzić "Terms of Use & Privacy Policy" \n';
                aller++;
           }




    if(Fname.value.match(/^[A-Za-z]{3}/))
    {
        console.log("imie 1");
    }
    else
    {
        aler=aler+"Imie\n";
        aller++;
    }
    if(Lname.value.match(/^[A-Za-z]{3}/) && Lname.value!=Fname.value)
    {
        console.log("nazwisko 1");
    }
    else
    {
        aler=aler+"Nazwisko    \n";
        aller++;

    }
    if(email.value.match(/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i))
    {
        console.log("email 1");
    }
    else
    {
        aler=aler+"Email\n";
        aller++;

    }
    if(pass.value.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/) && pass.value.length>=8)
    {
        console.log("haslo 1");
    }
    else
    {
        aler=aler+"Hasło\n";
        aller++;

    }
    if(pass.value==cpass.value && pass.value.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/) && cpass.value.length>=8)
    {
        console.log("p_haslo 1");
    }
    else
    {                
        aler=aler+"Potwierdzenie hasła\n";
        aller++;

    }

    if(aller==0)
    {
        alert("Zarejestrowano");
    }
    else
    {
        alert("Prosze poprawnie wpisać: "+aler);

    }
    
    aller = " ";

};

