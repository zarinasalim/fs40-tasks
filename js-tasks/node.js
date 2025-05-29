//console.log(My name is)

//const name="Firuz";
//console.log(name)

//let bookAmount = 75;
//let bookPrice = 25 ;
//let totalPrice= bookAmount*bookPrice;
//console.log(totalPrice) 

//let kmhSpeed = 60;
//let msSpeed = kmhSpeed * 1000 / 3600;
//console.log(msSpeed)


//let bdYear = +prompt ("Dogum tarixinizi qeyd edin!")
//let age = 2025 - bdYear;
//let days = age * 365;
//console.log(age)


//let firstName = "Zarina";
//let lastName = "Salimova";
//console.log(`Sizin adiniz ${firstName} ${lastName} Tanışlığımıza çox şadam!`)


//let firstName = "Zarina ";
//let lastName = "Salimova";
//let message = (`Sizi bir daha görməyimizə şadıq, ${firstName} ${lastName}`)
//console.log(message)


//let num = 12;
//let power = num ** 5;
//let remainder = num % 3;
//console.log(` 5ci derece quvveti ${power}`)
//console.log (` qalig ${remainder}`)


//let fullName = "Zarina Salimova";
//let herfsayi = fullName.replace(/\s/g, "").length;
//console.log(`Adınızdakı hərflərin sayı:, ${herfsayi}`);


//let fullName = "Reshad Farhadli"
//let boshluq = fullName.split(" ");
//let firstName = boshluq [0][0];
//let lastName = boshluq [1][0];
//console.log( firstName+lastName);


//let fullName = +prompt ("Adinizi AD SOYAD olaraq daxil edin.")
//let par = fullName.split(" ");
//if (par.length === 2) {
 // let ad = par[0];
 // let soyad = par[1];
 //console.log(soyad + " " + ad); 
//} else {
 // console.log("Zəhmət olmasa yalnız AD və SOYAD daxil edin.");
//}


//let fullName = prompt("Adini daxil ele!")
//console.log(`Salam, ${fullName}`);


//let eded1 = prompt("Birinci ədədi daxil edin:");
//let eded2 = prompt("İkinci ədədi daxil edin:");
//let a = Number(eded1);
//let b = Number(eded2);
//console.log("Toplama: " + (a + b));
//console.log("Çıxma: " + (a - b));
//console.log("Vurma: " + (a * b));
//console.log("Bölmə: " + (a / b));


//let hasil = 12345 * 98765;
//let hasilReq = hasil.toString();
//let reqem = hasilReq[5];
//console.log("Hasil:" + hasil);
//console.log("6 ci reqem "  + reqem)
 
// "" + 1 + 0 = 10;
// "" - 1 + 0 = -1;
// "true"-false = NaN;
// 6 / "3" = 2;
// 4 + 5 + "px" = "9px";
// "$" + 4 + 5 = "$45";
// "4" - 2 = 2;
// NaN + "px" = "Nanpx";
// 7 / 0 = Infinity;
// "-9" + 5 = "-95";
// "-9" - 5 = -14;
// null + 1 = 1;
// undefined + 1 = NaN;

// let prom = prompt("Dord reqemli eded daxil edin!");
// let sum = 0;
// sum += Number(prom[0]);
// sum += Number(prom[1]);
// sum += Number(prom[2]);
// sum += Number(prom[3]);
// console.log("Cemi:  " + sum)

// let firstName = prompt("Soyadinizi qeyd edin!");
// let lastName = prompt("Adinizi qeyd edin");
// console.log("Salam " + firstName + "!");


// let price = prompt('Qiyməti "530.90" formatında daxil edin:');
// let parts = price.split('.');
// let manat = parts[0];
// let qepik = parts[1] || "00";
// if (qepik.length === 1) {
//   qepik += "0";
// }
// console.log(manat + " manat " + qepik + " qəpik");


// let vergi = prompt("maasi qeyd ele !");
// let vergifaizli = vergi - (vergi * 0.13);
// console.log ("Vergisiz emek haqqiniz " + vergifaizli);


// let lastName = prompt ("Soyadinizi qeyd edin");
// let firstName = prompt (" Adinizi qeyd edin");
// let ataName= prompt(" Ata adini qeyd edin");
// console.log ( lastName + firstName[0]  + lastName [0]);

// let mebleg = prompt("Əmanətin məbləğini daxil edin:");
// let muddet = prompt("Müddəti neçə ay olduğunu daxil edin:");
// let faiz = prompt("Faiz dərəcəsini daxil edin");
// let illikFaiz = faiz / 100;
// let ayliqFaiz = illikFaiz / 12;
// let menfeet = mebleg * ayliqFaiz * muddet;
// console.log("Gözlənilən mənfəət: " + menfeet + " AZN");



// let value = 10;
// console.log(value < 15);            
// console.log(value <= 10);           
// console.log(value === 10);          
// console.log(value != 20);          
// console.log(value >= 5 && value <= 10); 
// value = 20;
// console.log(value < 15);            
// console.log(value <= 10);           
// console.log(value === 10);          
// console.log(value != 20);           
// console.log(value >= 5 && value <= 10);



// let age = prompt("Yasinizi qeyd edin");
// if(age > 18) {
//   alert( "access denied");
// }
// else { 
//  alert(" access grated");
// }


// let il = +prompt("İl daxil edin:");
// if (il % 4 === 0) {
//   console.log("İl uzun ildir.");
// } else {
//   console.log("İl uzun il deyil.");
// }


// let(id) = +prompt("enter product id;");
// switch(id){
//     case 1:
//      alert("Available 10 pcs.");
//      break;
//      case 2:
//     alert("Available 256 pcs.");
//     break;
//     case 3:
//     alert("Available 256 pcs.");
//     case 4:
//     alert("There are 3 available.");
//     break;
//     default:
//     alert("Out of stock"); 
// }

// let gender= prompt("Cinsiniz nedir?","F");
// gender === "M"? console.log ( "Male" ) : gender === "F"? console.log ("Female") :console.log("Yanlish deyer");


// let months= +prompt("Ayin nomresini qeyd edin:");
// switch (months) {
//     case 1:
//        console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
// }

// task-30
// let date = prompt("Tarixi 2009.12.19 formasinda daxil edin");
// let parts = date.split(".");
// let year = parts[0];
// let month = parts[1];
// let day = parts[2];
// if (month <= 12 && month >= 1 && day >= 1 && day <= 30){
//     switch(month){
//             case "1":
//        console.log("January");
//         break;
//     case "2":
//         console.log("February");
//         break;
//     case "3":
//         console.log("March");
//         break;
//     case "4":
//         console.log("April");
//         break;
//     case "5":
//         console.log("May");
//         break;
//     case "6":
//         console.log("June");
//         break;
//     case "7":
//         console.log("July");
//         break;
//     case "8":
//         console.log("August");
//         break;
//     case "9":
//         console.log("September");
//         break;
//     case "10":
//         console.log("October");
//         break;
//     case "11":
//         console.log("November");
//         break;
//     case "12":
//         console.log("December");
//         break;
//         default:
//             console.log("format yanlisdir!");
            
//     }
// }

// task31
// let p = 8;
// let q = p-- - --p + p++ + ++p;
// console.log(p, q); 8-16;

// task32
// // let a = 6, b = 4, c = 2;
// // let x = ++a - b-- + c++ - --b + a++;
// // let y = a-- + --c - ++b + x++ - --a;
// // console.log(a, b, c, x, y); 
// x = 7-4+2-2+7 = 10;
// y = 8+2-3+10-6=11


// task33
// let a = 7, b = 3, c = 5;

// let x = a-- - ++b + c++ - --a + b++ - --c + a++ - b-- + c++;
// let y = --x + a++ - --b + c-- - x++ + ++a - b++ + --c - x--;
// let z = a-- + ++b - --c + x++ - --y + b-- - ++x + c++ - --a + y++;

// console.log(a, b, c, x, y, z);

// x = 7-4+5-5+4-5+5-5+5=7
// x = 7; a = 6; b = 4; c = 6;
// y = 6+6-3+6-6+8-3+4-7= 11
// a = 8; b = 4; c = 4; x = 6; y = 11;
// z = 8+5-3+6-10+5-8+3-6+10=10
// b = 4; x = 8; c = 4; a = 6; y = 11


// task34
// let eded = Number(prompt("Ədədi daxil edin:"));
// if (eded > 0) {
//   console.log("Ədəd müsbətdir.");
// } else if (eded < 0) {
//   console.log("Ədəd mənfidir.");
// } else {
//   console.log("Ədəd sıfırdır.");
// }


// task35
// let a = 5, b = 8, c = 3;
// let boyuk;
// if (a >= b && a >= c) {
//   boyuk = a;
// } else if (b >= a && b >= c) {
//   boyuk = b;
// } else {
//   boyuk = c;
// }
// console.log("Ən böyük ədəd:", boyuk);


// task36
// let eded = prompt("Eded daxil edin:");
// let result = (eded % 2 === 0)? alert("Eded Cutdur") : alert(" Eded Tekdir");
// console.log(result);


// // task38
// let qiymet = +prompt("Qiymetinizi qeyd edin:");
// switch(true){
//     case (qiymet >=90 && qiymet <=100):
//     console.log("Ela");
//     break;
//     case (qiymet >=75 && qiymet <=89):
//      console.log("Yaxsi");
//      break;
//      case (qiymet >=60 && qiymet <= 74):
//     console.log("Orta");
//      break;
//     case (qiymet >=0 && qiymet <= 59):
//      console.log("Zeif");
//      break;
//      default:
//         console.log("Yanlishdir.");
// }


// task40
// let a=5, b=3;
// let operation="+";
// let result;
// switch(operation){
//    case "+":
//     result = a + b;
//     break;
//   case "-":
//     result = a - b;
//     break;
//   case "*":
//    result = a * b;
//     break;
//     default:
//     result = "Yanlshdir.";
// }
// alert("Operator:" + operation + "   " + "Netice:" + result);
