console.log("Scipt dari script.js berhasil dijalankan");
function sapa(nama){
    let pesan = "Halo," + nama + "! apa kabar";
    return pesan;
}

let ucapanUntukBudi = sapa("Budi");
console.log(ucapanUntukBudi);

let ucapanUntukAni = sapa("Ani")
console.log(ucapanUntukAni)

const judul = document.getElementById('judul-utama');
console.log(judul);

const infoPertama = document.querySelector('.info');
console.log(infoPertama);

const semuaInfo = document.querySelectorAll('.info');
console.log(semuaInfo);

judul.innerText = "Selamat Datang Di Dunia DOM";

const divinfo = document.querySelector('div.info');
divinfo.innerHTML = "<strong>Teks ini sekarang tebal</strong>";

judul.style.color = '#369';
judul.style.backgroundColor ='lightgray';
judul.style.padding = '15px';
judul.style.textAlign = 'center';

const kotak = document.getElementById('kotak');
const tombolReset = document.getElementById('tombol-reset');

kotak.addEventListener('click', function (){
    kotak.innerText = "Anda baru saja mengklik saya!";
    kotak.style.backgroundColor = "lightgreen";
})

kotak.addEventListener('mouseover', function(){
    kotak.innerText = "Arahkan mouse ke sini atau klok saya!";
    kotak.style.backgroundColor = "";bold
})