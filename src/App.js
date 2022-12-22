import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/cartContext';
import Cart from './components/Checkout/Cart';
import Payment from './components/Checkout/Payment';
import PurchaseFinished from './components/Checkout/PurchaseFinished';

function App() {
  return (
    <div className="App">

      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path='/home'></Route>
            <Route path='/' element={<ItemListContainer greeting={"Bienvenido/a T&T"}/>}></Route>
            <Route path='/Payment' element={<Payment/>}></Route>
            <Route path='/PurchaseFinished' element={<PurchaseFinished/>}></Route>
            <Route path='/search/:search' element={<ItemListContainer greeting={"Bienvenido/a T&T"}/>}></Route>
            <Route path='/category/:id' element={<ItemListContainer greeting={"Bienvenido/a T&T"}/>}></Route>
            <Route path='/item/:prodID' element={<ItemDetailContainer />}></Route>
            <Route path='/category/:id' element={<ItemListContainer greeting={"Bienvenido/a T&T"}/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
          </Routes>
      </CartProvider>

    </div>
  );
}

export default App;
