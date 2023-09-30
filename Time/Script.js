const time=document.querySelector(".timer")
setInterval(()=>{
    let date=new Date()
    time.innerHTML=date.toLocaleTimeString();
},1000)