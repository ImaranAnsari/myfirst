import ProductList from "../Components/Product/ProductList";
function Product() {
    let products = [
        {
            id: 'p1',
            product_name: 'City Tour',
            image: '',
            discription: 'Its a wonderful tour.',
            price: "25000"
        },
        {
            id: 'p2',
            product_name: 'Forest Tour',
            image: '',
            discription: 'Its a Refresh tour.',
            price: "40000"

        },
        {
            id: 'p3',
            product_name: 'work Tour',
            image: '',
            discription: 'Good Experience on tour.',
            price: "20000"
        }
    ]
    return <div>
        <ul>

            <ProductList products={products} />
        </ul>
    </div>

}
export default Product;