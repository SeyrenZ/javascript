let Nabeel = 177;
let Kaiser = 172;
let Naufal = 165;

function tinggi_badan(x, y, z){
    if(x > y && x > z && y > z){
        console.log(x + '\n' + y + '\n' + z);
    }
    else if(y > x && x > z && y > z){
        console.log(y + '\n' + x + '\n' + z);
    }
    else if(z > y && y > x && z > x){
        console.log(z + '\n' + y + '\n' + x);
    }
    else if(x > z && z > y && x > y){
        console.log(x + '\n' + z + '\n' + y);
    }
    else if(y > z && z > x && y > x){
        console.log(y + '\n' + z + '\n' + x);
    }
    else if(z > x && x > y && z > y){
        console.log(z + '\n' + x + '\n' + y);

    }
}

console.log("Urutan Tinggi Badan (Nabeel : " + Nabeel + ", Kaiser : " + Kaiser + ", Naufal : " + Naufal + ")");
tinggi_badan(Nabeel, Kaiser, Naufal);