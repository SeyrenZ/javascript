function panggilShift(){
    var kota = ['Jakarta','Bandung','Malang','Surabaya','Makassar']
    console.log(kota);
    console.log("===================")
    // kota = kota.shift();

    var kota2 = kota.shift()
    console.log(kota2)

    return kota
}

console.log(panggilShift())

// mengremove elemen pertama array