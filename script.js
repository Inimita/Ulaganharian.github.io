//NO 1
function cetakFunction(a){
    return `Halo nama saya`+a
}
console.log(cetakFunction(" Mita"));


//NO 2
let angka1= 20;
let angka2=7;
function myFunction (angka1, angka2){
    return angka1 + angka2
}
let output= myFunction(angka1, angka2);

console.log(output)


//NO 3
const Hello = () => {return "Hai"}
let out=Hello();
console.log(out)




//NO 4
let obj = {
    nama : "John",
    umur : 22,
    bahasa : "Indonesia",
    showName: function(){
        console.log(`Menggunakan bahasa ${this.bahasa}`);
}
}
obj.showName();


//NO 5
let array =["John Doe", "Laki-laki", "baca buku", 1992]
let objDaftar={
  nama : array [0],
  jenisKelamin : array [1],
  hobi : array [2],
  lahir : array [3],
}
console.log(objDaftar);


//NO 6
let buah =[
    {
        nama: 'Nanas',
        warna : 'Kuning',
        adaBijinya : 'tidak',
        harga : 9000
    },{
        nama : 'Jeruk',
        warna : 'oranye',
        adaBijinya : 'ada',
        harga : 8000
    },{
        nama : 'Semangka',
        warna : 'Hijau & Merah',
        adaBijinya : 'ada',
        harga : 10000
    },{
        nama : 'Pisang',
        warna : 'Kuning',
        adaBijinya : 'tidak',
        harga : 5000
    }
];
let berbiji= buah.filter((buah) => buah.adaBijinya != 'ada')
console.log(berbiji);