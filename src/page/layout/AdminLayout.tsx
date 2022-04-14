import React from 'react'
import Footer from '../../compents/Footer'
import Header from '../../compents/Header'

type Props = {}

const AdminLayout = (props: Props) => {

  return (
    <div>
    
      <div className="min-h-full">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8" src="https://images-platform.99static.com//zvgtch1g-AfvYKsLleHclChDLYE=/222x209:1707x1694/fit-in/500x500/projects-files/101/10165/1016553/09deac31-4bdc-4bb6-b6f2-e644b4ff0500.png" alt="Workflow" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

                    <a href="/list" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sản Phẩm</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>

                    <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Trang Trủ</a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>

                  <div className="ml-3 relative">
                    <div>
                      <button type="button" className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>



                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>

                  <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        
        </nav>

        
        <main className="flex-col bg-indigo-50 w-full ml-4 pr-6">
          <div className="flex justify-between p-4 bg-white mt-3 rounded-xl shadow-lg">
            <h1 className="text-xl font-bold text-gray-700">Welcome to Shop Sneaker</h1>
            <div className="flex justify-between w-2/5">
              <div className="flex items-center border-2 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" placeholder="Search" className="ml-2 outline-none w-full" />
              </div>
              <div className="flex items-center space-x-6 pr-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <img src="https://i.imgur.com/iH7hkQb.png" className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4 space-x-4 s">
            <div className="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
              <img src="https://i.imgur.com/VHc5SJE.png" />
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">534</h1>
                <span className="text-gray-500">Coaches</span>
              </div>
            </div>
            <div className="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
              <img src="https://i.imgur.com/Qnmqkil.png" />
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">9.7k</h1>
                <span className="text-gray-500">Kids</span>
              </div>
            </div>
            <div className="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
              <img src="https://i.imgur.com/dJeEVcO.png" />
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">50 M</h1>
                <span className="text-gray-500">Revenue</span>
              </div>
            </div>
          </div>

        </main>

      </div>

    </div>
    
  )
}

export default AdminLayout