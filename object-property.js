function panggilObject(){
    var mobil = {
        type: 'Sedan',
        harga: 20000000,
        warna: 'Putih',
    }
    mobil.type = 'Jeep';
    console.log(mobil);
    console.log(mobil.type);
    //Mengubah nilai object
}

panggilObject();