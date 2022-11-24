import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Routes>
        <Route path='/home'></Route>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenido/a T&T"}/>}></Route>
        <Route path='/category/:id' element={<ItemListContainer greeting={"Bienvenido/a T&T"}/>}></Route>
        <Route path='/item/:prodID' element={<ItemDetailContainer />}></Route>
        <Route path='/category/:id' element={<ItemListContainer greeting={"Bienvenido/a T&T"}/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
