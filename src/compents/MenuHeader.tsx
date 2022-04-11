import React from 'react'

type Props = {}

const MenuHeader = (props: Props) => {
    return (
        <div className="min-h-screen bg-white ">

            <nav className="flex items-center py-8 px-14 justify-between">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-gray-700 ">LandingKit</h1>
                    <div className="ml-10">
                        <ul className="md:flex space-x-8 hidden ">
                            <li><a href="#" className="text-gray-800 font-semibold">Magazine</a></li>
                            <li><a href="#" className="text-gray-800 font-semibold">World</a></li>
                            <li><a href="#" className="text-gray-800 font-semibold">Tech</a></li>
                            <li><a href="#" className="text-gray-800 font-semibold">Health</a></li>
                            <li><a href="#" className="text-gray-800 font-semibold">Sport</a></li>
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

            <div className="md:flex space-x-16 mt-20 md:mr-0 mr-10">
                <div className="md:flex items-center pl-16 ">
                    <div className="">
                        <h1 className="lg:text-5xl  font-bold leading-tight text-3xl">Elegant Landing Pages  for your next project</h1>
                        <p className="mt-4 text-lg font-normal ">Build your site in a few second based ready-to-use block and section,  it's a lot of fund.</p>
                        <div className="flex mt-10 w-40 items-center space-x-3 py-3 px-6 bg-gray-700 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                            <button className="text-lg text-md ">Buy now</button>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="max-w-lg pr-24 md:flex justify-center items-center  hidden">
                    <img className="rounded-lg" src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" alt="" />
                </div>
            </div>



        </div>
    )
}

export default MenuHeader