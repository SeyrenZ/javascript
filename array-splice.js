function panggilSplice(){
    var kota = ['Jakarta','Medan','Padang','Malang','Surabaya'];
    console.log(kota)
    // kota.splice(2,0,'Palembang') // menambah elemen array
    kota.splice(2,1) // meremove elemen array
    

    
    
    return kota
}

console.log(panggilSplice())

// menyisipkan/menambahkan elemen array
// splice juga bisa meremove elemen array