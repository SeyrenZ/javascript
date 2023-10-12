function segitiga(){
   let ab = 8;
   let bc = 6;
   
   console.log("Nilai AB =",ab)
   console.log("Nilai BC =",bc)

   let hasil = Math.pow(ab,2) + Math.pow(bc,2)
   console.log("Hasil dari AB kuadrat ditambah BC kuadrat adalah:",hasil,"Dalam Akar")
   const AC = (Math.sqrt(hasil))

   return AC
}

console.log("Jadi panjang sisi AC pada segitiga siku-siku tersebut adalah:",segitiga(),"cm")
