

import ProductList from "../Components/Product/ProductList";
// import Images from "../Components/Images";
function Product() {
    let products = [
        {
            id: "p1",
            product_name: "City Tour",
            image: "https://drive.google.com/file/d/1sknRnMlPK53Vjt92QKEYzF1V9A7ur7Ze/view?usp=sharing",
            discription: "Its a wonderful tour.",
            price: "25000"
        },
        {
            id: "p2",
            product_name: "Forest Tour",
            image: "https://drive.google.com/file/d/0B-BnXe94NzotZ3RtNzV0aW8tQTA/view?usp=sharing&resourcekey=0-x06X6JX1zOLRCKL97SbHRw",
            discription: "Its a Refresh tour.",
            price: "40000"

        },
        {
            id: "p3",
            product_name: "work Tour",
            image: "https://drive.google.com/drive/u/0/folders/0B-BnXe94NzotcnJjYmh6SDRaQ0k?resourcekey=0-dFzbsCtN1lCUdfTDixcM9g",
            discription: "Good Experience on tour.",
            price: "20000"
        }
    ]
    return <div>
        
            <ProductList products={products} />
        
    </div>

}
export default Product;