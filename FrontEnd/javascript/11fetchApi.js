const API_URL = "https://dummyjson.com/products";
let promise = fetch(API_URL);
console.log(promise);

/**
     |
     |
     |
     | 
  got this 
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: Response
 */

promise.then((response)=>{
    promise2 = response.json();
    promise2.then((data)=>{
        console.log(data["products"]);// prducts array --inside object so have to use object destructure 
        getProductcs(data["products"]);
        
    });
    promise2.catch((err)=>{
        console.log(err);
        
    })
})
promise.catch((err)=>{
    console.log(err);
    
});

function getProductcs(getProducts){
    getProducts.map((ele) => {

        // destructuring
        let { title, description, price, images } = ele;

        // get first image
        let imageUrl = images[0];

        document.writeln(`
            <div style="border:1px solid #ccc; margin:10px; padding:10px;">
                <h4>${title}</h4>
                <img src="${imageUrl}" alt="${title}" width="150"/>
                <p><strong>Description:</strong> ${description}</p>
                <h4>Product Price: $${price}</h4>
            </div>
        `);
    });
}


