function dataDiri(){
    var identitas = {
        nama : "Yanto",
        umur : 19,
        Status : "Belum Kawin",
        Pekerjaan : "Mahasiswa",
        golonganDarah : "A",
         
    }
    for(var x in identitas){
        console.log(identitas[x]);
    }
}

dataDiri()