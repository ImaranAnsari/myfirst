
import ProductList from "../Components/Product/ProductList";
function Product() {
    let products = [
        {
            id: "p1",
            product_name: "City Tour",
            image: "https://drive.google.com/uc?id=1wwesUQc7W3JRJu1sT89tz9Zh1kw5et8t",
            description: "Its a wonderful tour.",
            price: "25000"
        },
        {
            id: "p2",
            product_name: "Forest Tour",
            image: "https://drive.google.com/uc?id=18F8CNhrSvnU3qrsasRL_brNJYnZOJJGi",
            description: "Its a Refresh tour.",
            price: "40000"
        },
        {
            id: "p3",
            product_name: "work Tour",
            image: "https://drive.google.com/uc?id=1qeoIE1HZJyhdPmAybXcz-JPUIM5ZN7tU",
            description: "Good Experience on tour.",
            price: "20000"
        },
        {
            id: "p4",
            product_name: "River Side",
            image: "https://drive.google.com/uc?id=16hovwgXM-I4L19N8dRlCJuuIO17eSObg",
            description: "Its wonderful tour.",
            price: "25000"
        }
    ]
    return <div>
        <ProductList products={products} />
    </div>
}
export default Product;