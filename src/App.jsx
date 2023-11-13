import { RiAddLine, RiCloseLine, RiMenu3Fill, RiPieChartLine, RiSearch2Line, RiUser3Line } from 'react-icons/ri';
import './App.css' ;
import Sidebar from './components/shared/Sidebar' ;
import { useState } from 'react';

function App() {

  const [ showMenu, setShowMenu ] = useState( false ) ;
  const [ showOrder , setShowOrder ] = useState ( false ) ;

  const toggleMenu= () => {
    setShowMenu(!showMenu)
  }

  return (
  <div className='bg-[#262837] w-full min-h-screen'>
    <Sidebar showMenu= { showMenu } />
    <nav className='bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
      
      <button className=' p-2'> 
        <RiUser3Line/> 
      </button>

      <button className=' p-2'>
         <RiAddLine/> 
      </button>

      <button className=' p-2'> 
          <RiPieChartLine />
      </button>

      <button className=' text-white  p-2' onClick={ toggleMenu }> 
            { showMenu ? <RiCloseLine /> : <RiMenu3Fill/> }

      </button>
    </nav>

    <main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8'>

      <div className='lg:col-span-6 '> 

      <header className='p-4'>

        <div className='flex flex-col gap-4'>

          <div>
            <h1 className='text-2xl text-gray-300'> Bistro Resto </h1>
            <p className='text-gray-500'> 07 Octubre 2023</p>
          </div>

          <form>
              <div className='w-full relative'>
                <RiSearch2Line className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300'/>
                <input placeholder="Search" type='text' className='w-full py-2 pl-10 pr-4 bg-[#1f1d2b] rounded-lg text-gray-300 outline-none'/> 
              </div>           
         </form>
          
       
        </div>
        
        <nav className='text-gray-300 flex items-center justify-between border-b'> 

          <a href='#' className='py-2 pr-4 border-[#ec7c6a] relative before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]'> Hot dishes </a>
          <a href='#' className='py-2 pr-4'> Cold dishes </a>
          <a href='#' className='py-2 pr-4'> Soap  </a>
          <a href='#' className='py-2'> Grill </a>

        </nav>

      </header>
      
      </div>

      <div className='lg:col-span-2 fixed lg:static right-0'> Carrito </div>
    </main>
  </div>
  )
}

export default App
