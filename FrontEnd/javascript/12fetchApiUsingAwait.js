async function Products(url) {
    try {
        let description = await fetch(url)
        let data = await description.json();
        //console.log(data.products);
        getProductcs(data.products)

    }
    catch (err) {
        console.log(err);

    }

}
const url = "https://dummyjson.com/products"
Products(url);


function getProductcs(getProducts) {
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