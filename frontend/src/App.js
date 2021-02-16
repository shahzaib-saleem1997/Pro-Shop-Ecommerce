import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router, //This is an alias
  // Switch,
  Route,
  // Link
} from "react-router-dom";
import { useDispatch} from 'react-redux'

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { listProducts } from './actions/productActions';



function App() {

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(listProducts())
  }, [dispatch])

  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          
            <Route exact path="/" component={HomeScreen}/>
          
            <Route exact path="/product/:id" component={ProductScreen}/>
            
            <Route exact path="/cart/:id?" component={CartScreen} />
              
          
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
