// getAllProducts Function
import products from "./Products.js"

const getAllProducts = () => {
     const allProducts = products;
     console.log("All Products",allProducts)
}

const getProductById = (id) => {
    const singleProduct = products.find((product) => product.id === id);
    console.log(singleProduct);
    
}

const addProduct = (productData) => {
    // Validate input Data
    const productAlready = products.find((product) => product.id === productData.id)
    if (productAlready) {
        console.log("Duplicate Product!");
    }
    else if(productData.name === ''){
        console.log('Product Name Cannot be empty');
        
    }
    else if (productData.price < 0 || productData.stock < 0){
        console.log("Product Price and Stock canot be negative");
        
    }
    else{
         products.push(productData);
         console.log(products);
    }
   
    
}

// update product

const updateProduct = (id,updates) => {
    const {name, stock,price,category} = updates
    const productTobeUpdate = products.find((prod) => prod.id === id);
    productTobeUpdate.category = category;
    productTobeUpdate.price = price;
    productTobeUpdate.stock = stock;
    productTobeUpdate.name = name;
}

// Delete Products by id

const deleteProduct = (id) => {
    const remainingProducts = products.filter((product) => product.id !== id);
    console.log("Products After Deletion", remainingProducts);
    
}

//Return product specifications

const getProductDetails = (id) => {
    const productSpecification = products.find((prod)=>prod.id === id).specifications;
    console.log("Product Specifications", productSpecification);
    
}

//? Implement Business Logic

const BusinessLogic = () => {
    const electronicProducts = products.filter((product) => product.category === 'Electronics');
    const AccessoriesProducts = products.filter((product) => product.category === 'Accessories');
    console.log("electronicProducts: ",electronicProducts);
    console.log("AccessoriesProducts: ",AccessoriesProducts);
    const productwithZerostock = products.filter((product) => product.stock === 0);
    console.log("Products with Zero Stock", productwithZerostock);
}

// Total Inventory Value

const findinventoryValue = () =>{
    const inventoryValue = products.reduce((acc,prod) => acc + (prod.price * prod.stock), 0);
    console.log("Total Inventory Value: ", inventoryValue);
    
}

// Display products with brand

const findProductBybrand = (brand) => {
    const product = products.filter((prod)=> prod.specifications.brand === brand);
    console.log("Product With brand: ", product);
    
}

// Create a new product without modifying the original array.

const createAnother = (productData) => {
    const newProducts = [...products,productData];
    console.log("New Prooduct created: ", newProducts);
    
}


// getAllProducts()
// getProductById(3);
const product = {
    id:5,
    name: 'ddd',
    category: 'Accessories',
    stock: -1,
    specifications: { brand: 'Logitech', warranty: '1 year' }
}
addProduct(product);
updateProduct(3, {
    category: 'Electronics',
    name: 'Monitor',
    price:4500,
    stock: 5
});
console.log(products);
deleteProduct(3);
getProductDetails(4);
BusinessLogic()
findinventoryValue()
findProductBybrand('Logitech')

createAnother(product);
console.log("Orginal Array: ", products);
