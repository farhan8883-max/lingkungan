const judul = document.querySelector('h3');//key👇

let nama = localStorage.getItem('nama');
if (!nama) {
 //value👇
    nama = prompt('masukkan nama anda: ');
                     //key👇   //Value👇
    localStorage.setItem('nama', nama);
}

judul.innerHTML = `Name: ${nama}`;

//ganti nama  //mematkan link👇(e)
const gantiNama = (e) => {
    nama = prompt('masukkan nama baru anda: ');
    localStorage.setItem('nama', nama);
    e.preventDefault( );
}

//Hapus nama
const hapusNama = (e) => {
    localStorage.removeItem('nama');
    e.preventDefault( );
}