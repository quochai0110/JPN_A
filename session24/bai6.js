let str1 = "hoang  thien   son";
let str2 = str1.split(" ");

for (let i = 0; i < str2.length; i++) {
    if(!str2[i] == " "){
        str2[i]= str2[i][0].toUpperCase()+str2[i].slice(1);//Hoang
    }
}
console.log(str2.join(" "));


