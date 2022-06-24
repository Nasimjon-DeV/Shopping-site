    let kiyimlar = [
        {
            id: 0,
            name: 'men',
            narxi: 25,
            img: "./img/men 2.png",
            count: 0,
            like: true
        },
        {
            id: 1,
            name: 'women',
            narxi: 25,
            img: "./img/women 1.png",
            count: 0,
            like: true
        },
        {
            id: 2,
            name: 'asthetics',
            narxi: 25,
            img: "./img/asthetics 1.png",
            count: 0,
            like: true
        }
    ]   


let section_2 = document.querySelector('.section_2');

function kiyimBase() {
    section_2.innerHTML = ""
    kiyimlar.forEach(( kiyim, i)=> {
    section_2.innerHTML += `
                     <div class="cart"> <div id="img-cart"></div> <img src="${kiyim.img}"> <button id="Btn-1" onclick="localAdd()">Add</button>                    
                       
                    <div class="plus-minus">
                        <button id="btn-minus" onclick="minus(${i})">-</button>
                        <p>${kiyim.count}</p>
                        <button id="btn-plus" onclick="plus(${i})">+</button>
                    </div>
                        </div>

    `   
    });
}
kiyimBase()




const minus = (i) => {
    if(kiyimlar[i].count > 0) {
        kiyimlar[i].count = kiyimlar[i].count - 1;
    }
    kiyimBase()
}
const plus = (i) =>{
  
    kiyimlar[i].count = kiyimlar[i].count + 1;
    kiyimBase();
}


let modalBtn = document.getElementById('modalBtn');
let local_pages = document.querySelector('.local_pages');
let modalClose =document.querySelector('#closeModal');
let section_1 = document.querySelector(".section_1");
let localArray = [];

modalBtn.addEventListener('click', function(){
    local_pages.style.transform ="translateX(0px)"
});
// section_1.addEventListener('click', function(){
//     local_pages.style.transform ="translateX(400px)"
// })

modalClose.addEventListener('click', function(){
    local_pages.style.transform ="translateX(400px)"
})

let addLocal = document.querySelectorAll("#Btn-1");


function localAdd (){

localStorage.setItem("Wears", JSON.stringify(kiyimlar));
localArray.push(localStorage.getItem("Wears"));
localArray = JSON.parse(localArray);

console.log(localArray);
localBase()
}


function localBase() {
// local_pages.innerHTML = ""
localArray.forEach( (items) => {
local_pages.innerHTML += `
<hr>
<div class="items">
    <img src="${items.img}" alt="">
    <div class="column-items">
        <button id="remove-items">Remove</button>
        <h2>${items.name} Wear</h2>
        <p>${items.count} Dona</p>
        <p>${parseInt(items.narxi * items.count)}$</p>
    </div>
</div>

`;

})


}

let btnRemove = document.querySelector("#remove-items");

btnRemove.addEventListener('click', function(i){

localArray[i]= "";

})
