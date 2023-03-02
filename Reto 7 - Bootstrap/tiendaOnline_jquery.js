
let art01 = {"articulo": "Arandano bañado en chocolate", "precio": 1500 };
let art02 = {"articulo": "Almendras bañada en chocolate blanco", "precio": 1200 };
let art03 = {"articulo": "Lentejas confitadas de chocolate", "precio": 900 };
let art04 = {"articulo": "Naranja bañada en chocolate", "precio": 1700 };
let art05 = {"articulo": "Almendras bañada en chocolate con leche", "precio": 1350 };
let art06 = {"articulo": "Mani bañado en chocolate", "precio": 1100 };
let art07 = {"articulo": "Almendras bañada en chocolate semiamargo", "precio": 1400 };
let art08 = {"articulo": "Cereal bañado en chocolate", "precio": 850 };

let buyTotal = [];
let priceTotal = [];

function buy(product){    

    buyTotal.push(product);
    priceTotal.push(product.precio);     
    $("#purchase-detail").prepend(`<p>${product.articulo} ${product.precio} </p> `);
};


function showTrolley(){

    let total = 0;
    for ( let p of priceTotal){ total += p };
    $("#purchase-detail").append(`<h4 color:blue >Importe total: $ ${total}</h4> `);
};




  
