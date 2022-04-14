import React from 'react'
import Banner from './banner'

type Props = {}

const MenuHeader = (props: Props) => {
    return (
        <div className="min-h-screen bg-white ">

            <nav className="flex items-center py-8 px-14 justify-between">
                <div className="flex items-center">
                  <a href="/"> <h1 className="text-2xl font-bold text-gray-700 ">Trang Chủ</h1></a> 
                    <div className="ml-10">
                        <ul className="md:flex space-x-8 hidden">
                            <li><a href="/sp" className="text-gray-800 font-semibold">Sản Phẩm</a></li>
                            <li><a href="#" className="text-gray-800 font-semibold">Tin Tức</a></li>
                            <li><a href="#" className="text-gray-800 font-semibold">Liên Hệ</a></li>
                            <li><a href="/admin" className="text-gray-800 font-semibold">Admin</a></li>
                        </ul>
                    </div>
                </div>
                <div className="lg:flex hidden items-center space-x-3 py-3 px-6 bg-gray-700 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                    <button>Buy now</button>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        </svg>
                    </span>
                </div>
            </nav>
            <Banner/>
          



        </div>
    )
}

export default MenuHeader