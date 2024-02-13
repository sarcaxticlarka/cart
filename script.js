var products = [
    {name: "Yellow Sofa", description: "Sofa for house", price: "12,000", image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww"},
    {name: "Sofa & Chair", description: "Furniture for Resturant", price: "42,000", image:"https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Single Sofa", description: "Sofa for House", price: "18,000", image:"https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww"},
    {name: "Pinkis SOfa", description: "Sofa for a middle class", price: "36,000", image:"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Modern Chair", description: "A Chair for new generation", price: "3,500", image:"https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fHww"},
    {name: "Aestetics Chair", description: "Chair for Photographer", price: "2,899", image:"https://images.unsplash.com/photo-1538850207400-2987d0be964f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"},
    {name: "Tution Chair", description: "Chair for tution classes", price: "4,875", image:"https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Stool/Chair", description: "Vintage Stool", price: "2,000", image:"https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},
    {name: "White Sofa", description: "Luxurious Sofa", price: "80,000", image:"https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"},
];

var popular = [
    {name: "Stool", description: "Modern Stool", price: "3,200", image:"https://images.unsplash.com/photo-1540809799-5da9372c3f64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"},
    {name: "Dustbin", description: "Chair with Dustbin", price: "5,500", image:"https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"},
    {name: "Study Table", description: "White Study table and Chair", price: "8,200", image:"https://images.unsplash.com/photo-1519974719765-e6559eac2575?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Modern Chair", description: "A Chair for new generation", price: "3,500", image:"https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fHww"},
    {name: "Aestetics Chair", description: "Chair for Photographer", price: "2,899", image:"https://images.unsplash.com/photo-1538850207400-2987d0be964f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"},
    {name: "Tution Chair", description: "Chair for tution classes", price: "4,875", image:"https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Stool/Chair", description: "Vintage Stool", price: "2,000", image:"https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},
    {name: "White Sofa", description: "Luxurious Sofa", price: "80,000", image:"https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"},

];

var cart = [];


function productAdded(){
    var clutter = "";

products.forEach(function(product, index){
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
       <img class="w-full h-full object-cover"  src="${product.image}" alt="">
    </div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.description}</h3>
                <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
            </div>
            <button data-index="${index}"  class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}"
                    class="add ri-add-line"></i></button>
        </div>
    </div>
</div>`
})

document.querySelector(".products").innerHTML = clutter;
}

function AddPopular(){
    var clutter = "";
    popular.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.description}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${product.price}</h4>
        </div>
    </div>`
    })
    document.querySelector(".populars").innerHTML = clutter;
}

function addToCart(){
    document.querySelector(".products").addEventListener("click", function(det){
        if(det.target.classList.contains('add'));
        cart.push(products[det.target.dataset.index])
         
    })
}

// function showCart(){
//     document.querySelector(".carticon")
//     .addEventListener("click", function(){
//         document.querySelector(".cartexpnd").style.display = "block";

//         var clutter = "";
//         cart.forEach(function(prod, index){
//             clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
//             <div class="w-10 h-10 flex-shrink-0 rounded-lg  overflow-hidden">
//                <img class="w-full h-full object-cover" src="${prod.image}" alt="">
//             </div>
//             <div>
//                 <h3 class="font-semibold">${prod.name}</h3>
//                 <h5 class="text-sm font-semibold opacity-80">&8377;${prod.price}</h5>
//             </div>
//         </div>`
//         })
//         document.querySelector("cartexpnd").innerHTML = clutter
//     })
// }
function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";

        var clutter = "";
        cart.forEach(function(prod, index){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg  overflow-hidden">
               <img class="w-full h-full object-cover" src="${prod.image}" alt="">
            </div>
            <div>
                <h3 class="font-semibold">${prod.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">&#8377;${prod.price}</h5>
            </div>
        </div>`
        });
        document.querySelector(".cartexpnd").innerHTML = clutter;
    });
}



showCart()
addToCart()
AddPopular()
productAdded()


