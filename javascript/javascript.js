var count=1;
function change(){
    let msg=document.getElementsByClassName("btn2")[0].value;
    for(i=0;i<=count;i++){
        document.getElementsByClassName("btn")[i].innerHTML="&#10004;";
        document.getElementsByClassName("btn")[i].style.border=" 5px solid green";
    }
    count++;
}