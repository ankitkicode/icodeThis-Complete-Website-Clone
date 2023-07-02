//plus one
var h2 = document.querySelector("#plus");
var details = document.querySelector("#details");
console.log(h2);
console.log(details);
flag = 0;

details.addEventListener("click",function(){
    if(flag==0){
        h2.innerHTML=`<i class="ri-subtract-line"></i>`
        flag=1;
    }else{
        h2.innerHTML=`<i class="ri-add-line"></i>`
        flag=0;
    }
})

// details.forEach(function (elem) {
//   // console.log(elem)
//   elem.addEventListener("click", function () {
//     h2.forEach(function(elem2){
//         // console.log(elem2)
//         elem2.addEventListener("click",function(){
//  if (flag == 0) {
//       h2.elem.innerHTML = `<i class="ri-subtract-line"></i>`;
//       flag = 1;
//       console.log(elem);
//     } else {
//       h2.elem.innerHTML = `<i class="ri-add-line"></i>`;
//       flag = 0;
//     }
//         })
//     })
   
//   });
// });

//plus two


//plus three
var h21=document.querySelector("#plus1");
var details2=document.querySelector("#details1")
console.log(h2);
console.log(details);
flag=0;

details1.addEventListener("click",function(){
    if(flag==0){
        h21.innerHTML=`<i class="ri-subtract-line"></i>`
        flag=1;
    }else{
        h21.innerHTML=`<i class="ri-add-line"></i>`
        flag=0;
    }
})

// //plus four
var h22=document.querySelector("#plus2");
var details2=document.querySelector("#details2")
console.log(h2);
console.log(details);
flag=0;

details2.addEventListener("click",function(){
    if(flag==0){
        h22.innerHTML=`<i class="ri-subtract-line"></i>`
        flag=1;
    }else{
        h22.innerHTML=`<i class="ri-add-line"></i>`
        flag=0;
    }
})


var h23=document.querySelector("#plus3");
var details3=document.querySelector("#details3")
console.log(h2);
console.log(details);
flag=0;

details3.addEventListener("click",function(){
    if(flag==0){
        h23.innerHTML=`<i class="ri-subtract-line"></i>`
        flag=1;
    }else{
        h23.innerHTML=`<i class="ri-add-line"></i>`
        flag=0;
    }
})