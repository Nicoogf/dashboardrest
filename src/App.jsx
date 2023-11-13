import { RiAddLine, RiArrowDownLine, RiCloseLine, RiDeleteBin6Line, RiMenu3Fill, RiPieChartLine, RiSearch2Line, RiUser3Line } from 'react-icons/ri';
import './App.css' ;
import Sidebar from './components/shared/Sidebar' ;
import { useState } from 'react';

function App() {

  const [ showMenu, setShowMenu ] = useState( false ) ;
  const [ showOrder , setShowOrder ] = useState ( false ) ;

  const toggleMenu= () => {
    setShowMenu(!showMenu)
  }

  const toggleOrder= () => {
    setShowOrder(!showOrder)
    setShowMenu(false)
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

      <button className=' p-2' onClick={ toggleOrder }> 
          <RiPieChartLine />
      </button>

      <button className=' text-white  p-2' onClick={ toggleMenu }> 
            { showMenu ? <RiCloseLine /> : <RiMenu3Fill/> }

      </button>
    </nav>

    <main className='lg:pl-32  pb-20'>

      <div className='md:p-8 p-4'> 

      <header className=''>

        <div className='flex flex-col md:flex-row md:justify-between gap-4 mb-6 md-items-center'>

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
        
        <nav className='text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6'> 

          <a href='#' className='py-2 pr-4 border-[#ec7c6a] relative before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]'> Hot dishes </a>
          <a href='#' className='py-2 pr-4'> Cold dishes </a>
          <a href='#' className='py-2 pr-4'> Soap  </a>
          <a href='#' className='py-2'> Grill </a>

        </nav>

      </header>

      <div className='flex items-center justify-between mb-16'>
          <h2 className='text-xl text-gray-300'>Choose Dishes</h2>
          <button className='flex items-center gap-4 text-gray-300 bg-[#1f1d2b] py-2 px-4 rounded-lg'> <RiArrowDownLine /> Dine in 
          </button>
      </div>

      {/* Content */}
      <div className='p-8 grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-3'>
        {/* Cart*/}
        <div className='bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2'>

          <img src="./plato.png" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>

          <p className='text-xl'> Speacy seasone </p>
          <span className='text-gray-400'> $2.29</span>
          <p className='text-gray-600'> 20 Bowls Dispnibles</p>
        </div>

        <div className='bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2'>

        <img src="./plato.png" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>

        <p className='text-xl'> Speacy seasone </p>
        <span className='text-gray-400'> $2.29</span>
        <p className='text-gray-600'> 20 Bowls Dispnibles</p>
        </div>

        <div className='bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2'>

        <img src="./plato.png" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>

        <p className='text-xl'> Speacy seasone </p>
        <span className='text-gray-400'> $2.29</span>
        <p className='text-gray-600'> 20 Bowls Dispnibles</p>
        </div>

        <div className='bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2'>

        <img src="./plato.png" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>

        <p className='text-xl'> Speacy seasone </p>
        <span className='text-gray-400'> $2.29</span>
        <p className='text-gray-600'> 20 Bowls Dispnibles</p>
        </div>

        <div className='bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2'>

          <img src="./plato.png" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>

          <p className='text-xl'> Speacy seasone </p>
          <span className='text-gray-400'> $2.29</span>
          <p className='text-gray-600'> 20 Bowls Dispnibles</p>
        </div>

        <div className='bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2'>

        <img src="./plato.png" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'/>

        <p className='text-xl'> Speacy seasone </p>
        <span className='text-gray-400'> $2.29</span>
        <p className='text-gray-600'> 20 Bowls Dispnibles</p>
        </div>

      </div>


      
      </div>

     
    </main>
  </div>
  )
}

export default App
