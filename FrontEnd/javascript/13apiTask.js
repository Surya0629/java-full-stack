
async function cart(url) {
    let promise = await fetch(url);
    let data = await promise.json();
    let cartArray = data["carts"];
   // console.log(cartArray[0]);
    printDetails(cartArray)



}
let url = "https://dummyjson.com/carts";
cart(url);


function printDetails(cartArray) {
    cartArray.map((el) => {
        let { products } = el
        products.map((item) => {
            let { title, price, thumbnail } = item;
           // console.log(title, price, thumbnail);
           document.writeln(`
            <div style="border:1px solid #ccc; margin:10px; padding:10px;">
                <h2>${title}}</h2>
                <img src="${thumbnail}"/>
                <h4>${price}</h4>
            </div>    
            
            `)

        })
    })
}