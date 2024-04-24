let a;
let seth;
let setm;
let sets;
function time(){
    a =  setInterval( function getTime(){
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        if (h > 12) {
            h -=12    
        };
        if (h.length = 1) {
            h ="0"+ h
        }
        seth = document.getElementById("div1");
        setm = document.getElementById("div2");
        sets = document.getElementById("div3");
    seth.innerHTML = h;
    setm.innerHTML = m;
    sets.innerHTML = s;
    
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");   
}
    ,1000);
}
function reset(){
    clearInterval(a);
    // seth.innerHTML == "00";
    // setm.innerHTML == "00";
    // sets.innerHTML == "00";        
    document.addEventListener("click", function(){
        seth.innerHTML = "00";
        setm.innerHTML = "00";
        sets.innerHTML = "00";
      });
};



