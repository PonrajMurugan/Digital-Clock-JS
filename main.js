
function timer() {


    let date = new Date();
    
    let hour=date.getHours();
     document.getElementById("hour").innerHTML=hour;
     
    let  minutes=date.getMinutes();
     document.getElementById("minutes").innerHTML=minutes;
   
    let seconds=date.getSeconds();
     document.getElementById("seconds").innerHTML=seconds;
    
                   }
  
  let interval = setInterval(timer, 1000);
  
  
  
  
  let datee=new Date();
  let day=datee.getDay();
  document.getElementById("day").innerHTML=day;
  
  
  
  let mon=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
  let date1=new Date();
  let months=mon[date1.getMonth()];
  document.getElementById("months").innerHTML=months;
  
  
  
  let date2=new Date();
  let year=date2.getFullYear();
  document.getElementById("year").innerHTML=year;
  
  
  let days=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
  let date3=new Date();
  let day3=days[date3.getDay()];
  document.getElementById("day2").innerHTML=day3;