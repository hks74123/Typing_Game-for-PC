function chang_color(){
    y.style.background='white';
    clearInterval(d);
}
totalpress=0;
correct=0;
whentostart=0
tme=0;
d=0;
x="";
jj=0;
a=["<This is a typing game_in WhichYou can improve your typing",">This_IS stage2 SO In this __stage=TryTooDo Thiss With less ERRORS ANd more accuraCY---and==Try_ToImProVE"]
l=a.length;
s=a[jj]
y=document.getElementById('btn'+65);
document.addEventListener("keypress",function(fg){
    totalpress=totalpress+1;
    if(whentostart==0){
        tme=tme+1;
        if(tme==1){
            tttm=setInterval(timeupdate,1000);
        }
        clearInterval(d);
        y.style.background='white'
        if(s[1].charCodeAt(0)==fg.keyCode){
            correct=correct+1;
            for(var i=1;i<91;i++){
                if(s[1].toUpperCase().charCodeAt(0)==i){
                    let p=document.getElementById('btn'+i);
                    p.style.background="lightgreen"
                    y=p;
                    d=setInterval(chang_color,1000)   
                }
            }
            s='>'+s.substring(2)
        }
        else{
            err=err+1;
            document.getElementById('dd2').innerText='Errors:'+err;
            for(var i=1;i<91;i++){
                if(fg.keyCode>=91){no=fg.keyCode-32}
                else{no=fg.keyCode}
                if(i==no){
                    let p=document.getElementById('btn'+i);
                    p.style.background="red"
                    y=p;
                    d=setInterval(chang_color,1000)
                }
            }
        }
        document.getElementById('dd3').innerText='Acuu:'+((correct/totalpress)*100).toFixed(2);
        if(s!=">"){
        document.getElementById('inn').value=s;
        }
        else{
            if(jj!=(l-1)){
            jj+=1
            s=a[jj];
            document.getElementById('inn').value=s;
            }
            
        }
}
})
document.getElementById('inn').value=s;
document.getElementById('inn').disabled=true;
ddd=0
err=0
document.getElementById('dd1').innerText='Time:'+ddd;
document.getElementById('dd2').innerText='Errors:'+err;
// document.getElementById('dd3').innerText='Accu.:'+correct;
function timeupdate(){
    ddd=ddd+1
    document.getElementById('dd1').innerText='Time:'+ddd;
}
function stop(){
    clearInterval(tttm);
    whentostart=1
}
function start(){
    alert('Press first character to start');
    whentostart=0;
    s=a[0];
    tme=0;
    ddd=0;
    err=0;
    document.getElementById('dd2').innerText='Errors:'+err;
    document.getElementById('inn').value=s;
    document.getElementById('dd1').innerText='Time:'+ddd;
    document.getElementById('dd3').innerText='Acuu: 0'
}
window.onload = function(){ 
    alert("Game Rules: This Game will start when you will press the first character on your Keyboard");
    }
