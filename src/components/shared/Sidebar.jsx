import React from 'react' ;
import { RiHomeLine ,RiPercentLine , RiPieChartLine , RiMailLine,  RiNotification2Line, RiSettings2Line, RiLogoutBoxRLine, RiLoginCircleLine} from "react-icons/ri" ;

const Sidebar = ( props ) => {
  const {showMenu} = props
  
  return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
    }`}>

       <div>

        <ul className='pl-4'>

            <li>
                <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'> Logo </h1>
            </li>

            <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
                <a href="#" className='bg-[#ec7c6a] p-4 flex rounded-xl text-white justify-center'> 
                    <RiHomeLine  className='text-2xl'/>
                </a>
            </li>

            
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="#" className='p-4 flex rounded-xl text-[#ec7c6a] justify-center group-hover:bg-[#ec7c6a] group-hover:text-white'> 
                    <RiPercentLine  className='text-2xl'/>
                </a>
            </li>

            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="#" className='p-4 flex rounded-xl text-[#ec7c6a] justify-center group-hover:bg-[#ec7c6a] group-hover:text-white'> 
                    <RiPieChartLine  className='text-2xl'/>
                </a>
            </li>

            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="#" className='p-4 flex rounded-xl text-[#ec7c6a] justify-center group-hover:bg-[#ec7c6a] group-hover:text-white'> 
                    <RiMailLine  className='text-2xl'/>
                </a>
            </li>

            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="#" className='p-4 flex rounded-xl text-[#ec7c6a] justify-center group-hover:bg-[#ec7c6a] group-hover:text-white'> 
                    <RiNotification2Line  className='text-2xl'/>
                </a>
            </li>

            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="#" className='p-4 flex rounded-xl text-[#ec7c6a] justify-center group-hover:bg-[#ec7c6a] group-hover:text-white'> 
                    <RiSettings2Line  className='text-2xl'/>
                </a>
            </li>

        </ul>

       </div>

       <div>

        <ul className='pl-4'>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="#" className='p-4 flex rounded-xl text-[#ec7c6a] justify-center group-hover:bg-[#ec7c6a] group-hover:text-white'> 
                    <RiLoginCircleLine  className='text-2xl'/>
                </a>
            </li>

        </ul>

       </div>
       
        
    </div>
  )
}

export default Sidebar