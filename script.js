console.log("Scipt dari script.js berhasil dijalankan");
function sapa(nama){
    let pesan = "Halo," + nama + "! apa kabar";
    return pesan;
}

let ucapanUntukBudi = sapa("Budi");
console.log(ucapanUntukBudi);

let ucapanUntukAni = sapa("Ani")
console.log(ucapanUntukAni)

