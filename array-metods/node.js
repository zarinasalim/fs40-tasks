// Array-ə ad əlavə et:
// let adlar = ["Murad", "Aysel", "Ramin"];
// adlar array-inə sonda "Nigar" adını necə əlavə edərsən?

// let adlar = ["Murad", "Aysel", "Ramin"];
// adlar.push ("Nigar");
// console.log (adlar);


// Array-in əvvəlinə ad əlavə et:
// let adlar = ["Murad", "Aysel"];
// Array-in əvvəlinə "Kamal" adını əlavə et.

// let adlar = ["Murad", "Aysel"];
// adlar.unshift ("Kamal");
// console.log(adlar);


// Sonuncu adı sil:
// let adlar = ["Murad", "Aysel", "Ramin"];
// Sonuncu adı silmək üçün hansı metoddan istifadə edərsən?

// let adlar = ["Murad", "Aysel", "Ramin"];
// adlar.pop ([2]);
// console.log(adlar);


// İlk adı sil:
// let adlar = ["Murad", "Aysel", "Ramin"];
// İlk adı necə silə bilərsən?

//  let adlar = ["Murad", "Aysel", "Ramin"];
//  adlar.shift ([0]);
//  console.log(adlar);
 


// Müəyyən ada görə silmək:
// let adlar = ["Murad", "Aysel", "Ramin", "Murad"];
// İlk qarşısına çıxan "Murad" adını array-dən necə silə bilərsən?

// let adlar = ["Murad", "Aysel", "Ramin", "Murad"];
// adlar.shift ([0]);
// console.log(adlar);



// Adlar arasında "Aysel" adı varmı?
// let adlar = ["Murad", "Ramin"];
// Array-də "Aysel" adının olub-olmadığını necə yoxlayarsan?

// let adlar = ["Murad", "Ramin", "Aysel"];
// let searchName = adlar.filter ((name)=>{
//  return name.includes ("Aysel")
// })
// console.log(searchName);

// // burda yari qiymetini ve yari qiymetden aldigin en boyuk deyeri goster
// const qiymetler= [60,40,90,88,49,140,180,220];
// const yariQiymet = qiymetler.map ((qiymet)=> {
//     return qiymet / 2
// })
// const boyukDeyer = Math.max (...yariQiymet)
// console.log(yariQiymet);
// console.log(boyukDeyer);

