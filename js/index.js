// UberX
const muc1 = 8000;
const muc2 = 12000;
const muc3 = 10000;
const timeX = 2000;
  
document.getElementById("uberX").addEventListener("click",function(){
document.getElementById("tinhtien").addEventListener("click",function(){
    var soKm = document.getElementById("soKm").value;
    var thoiGianCho = document.getElementById('time').value;
    var total = soKm * thoiGianCho;
    if(soKm == 1){
        var total = (soKm * muc1) + (thoiGianCho * timeX);
    }
    if(soKm > 1 && soKm <= 20){
        var total = muc1 + ((soKm - 1) * muc2) + (thoiGianCho * timeX);
    }
    if(soKm >= 21){
        var total = (muc1 + ((soKm - 1) * muc2)) + ((soKm - 20) * muc3) + (thoiGianCho * timeX);
    }if(soKm <= 0){
        var total = 0;
        return total;
    }   
    document.getElementById("xuatTien").innerHTML = total;
    var xuatTien = document.getElementById("divThanhTien").style.display = "block";
})
})

// UberSUV
const mucSUV1 = 9000;
const mucSUV2 = 14000;
const mucSUV3 = 12000;
const timeSUV = 3000;
  
document.getElementById("uberSUV").addEventListener("click",function(){
document.getElementById("tinhtien").addEventListener("click",function(){
    var soKm = document.getElementById("soKm").value;
    var thoiGianCho = document.getElementById('time').value;
    var total = soKm * thoiGianCho;
    if(soKm == 1){
        var total = (soKm * mucSUV1) + (thoiGianCho * timeSUV);
    }
    if(soKm > 1 && soKm <= 20){
        var total = mucSUV1 + ((soKm - 1) * mucSUV2) + (thoiGianCho * timeSUV);
    }
    if(soKm >= 21){
        var total = (mucSUV1 + ((soKm - 1) * mucSUV2)) + ((soKm - 20) * mucSUV3) + (thoiGianCho * timeSUV);
    }if(soKm <= 0){
        var total = 0;
        return total;
    }   
    document.getElementById("xuatTien").innerHTML = total;
    var xuatTien = document.getElementById("divThanhTien").style.display = "block";
})
})

// UberBlack
const mucB1 = 10000;
const mucB2 = 16000;
const mucB3 = 14000;
const timeB = 4000;
  
document.getElementById("uberBlack").addEventListener("click",function(){
document.getElementById("tinhtien").addEventListener("click",function(){
    var soKm = document.getElementById("soKm").value;
    var thoiGianCho = document.getElementById('time').value;
    var total = soKm * thoiGianCho;
    if(soKm == 1){
        var total = (soKm * mucB1) + (thoiGianCho * timeB);
    }
    if(soKm > 1 && soKm <= 20){
        var total = mucB1 + ((soKm - 1) * mucB2) + (thoiGianCho * timeB);
    }
    if(soKm >= 21){
        var total = (mucB1 + ((soKm - 1) * mucB2)) + ((soKm - 20) * mucB3) + (thoiGianCho * timeB);
    }if(soKm <= 0){
        var total = 0;
        return total;
    }   
    document.getElementById("xuatTien").innerHTML = total;
    var xuatTien = document.getElementById("divThanhTien").style.display = "block";
})
})
document.getElementById("tinhtien").addEventListener("click",function(){
    alert ("Vui lòng nhập thông tin")
})

