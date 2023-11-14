import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";
import "./app.css"

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300"> Lista de Platos </h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Filtrar
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
            {/* Card */}
            <Card
              img="peperoni.png"
              description="Pizza Peperoni"
              price="2.00"
              inventory="Queso mozzarella, Pepperoni, Orégano, Aceitunas negras "
            />
            {/* Card */}
            <Card
              img="hawai.png"
              description="Pizza Hawai"
              price="2.25"
              inventory="Jamón, Piña, Salsa de tomate y Cebolla"
            />
            {/* Card */}
            <Card
              img="teotl.png"
              description="Pizza Teotl"
              price="2.15"
              inventory="Carne de Hamburguesa,Piña,Champiñones y Cebolla"
            />
            {/* Card */}
            <Card
              img="pepitotl.png"
              description="Pizza Pepitotl"
              price="2.30"
              inventory="Carne de Res , Frijoles y Aguacate"
            />
            {/* Card */}
            <Card
              img="totecl.png"
              description="Pizza Totec"
              price="2.10"
              inventory="Aceitunas negras,Champiñones y Piña"
            />
            {/* Card */}
            <Card
              img="metzi.png"
              description="Pizza Metzi"
              price="2.15"
              inventory="Pimientos , Espinaca, Cebolla y Elote "
            />
            {/* Card */}
            <Card
              img="tresqueos.png"
              description="Pizza Tres Quetzin"
              price="2.30"
              inventory="Queso Cheddar, Couda y de Cabra"
            />
           
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;