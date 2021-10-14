

function showTime(){
    let date = new Date();
    let hour =  date.getHours();
    let minute= date.getMinutes();
    let second= date.getSeconds();
    let session = date.getDay();

    if(session==1){
        session="Pazartesi";

    }else if(session==2){
        session="Salı";

    }
    else if(session==3){
        session="Çarşamba";

    }

    else if(session==4){
        session="Perşembe"

    }

    else if(session==5){
        session="Cuma"

    }

    else if(session==6){
        session="Cumartesi"

    }

    else if(session==7){
        session="Pazar"

    }
    h = (hour < 10) ? "0" + hour : hour;
    m = (minute < 10) ? "0" + minute : minute;
    s = (second < 10) ? "0" + second : second;
    
    var time = h + ":" + m + ":" + s + " " +session;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);
} 
showTime();
