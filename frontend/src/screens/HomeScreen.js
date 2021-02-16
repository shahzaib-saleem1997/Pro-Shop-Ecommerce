import React from 'react';
// import axios from 'axios';
import {  useSelector} from 'react-redux'
import {Row,Col} from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
// import { listProducts } from '../actions/productActions';



export default function HomeScreen() {
    // const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

    // useEffect(() =>{
    //     dispatch(listProducts())
    // }, [dispatch])

    
    // const [products, setProducts] = useState([]);

    // const getProducts = async () =>{
    //     const {data} = await axios.get('/api/products');
    //     setProducts(data);
    // }

    // useEffect(() =>{
    //     getProducts();
    // },[]);

    return (
        <>
            <h1> Latest Products </h1>
            {loading ? <Loader/>: error ? <Message variant='danger'> Error: {error}</Message>: (
                <Row>
                {products.map((product) =>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/> 
                    </Col>
                ))}
            </Row>
            )}
            
        </>
    )
}
