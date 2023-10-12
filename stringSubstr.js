function subString(){
    var aku = "Aku Pintar Memasak"
    console.log(aku.substr(4));
    console.log(aku.substr(0,4));
    console.log(aku.substr(-5))
}
// 4 menunjukan bahwa kalimat variable aku akan memulai kalimat nya dari index ke 4
// 0,4 menunjukan bahwa kalimat variable aku akan memulai kalimat nya dari index ke 0 dan berakhir di index ke 4
// jika ingin memulai dari akhir bisa menggunakan tanda "-"
subString()