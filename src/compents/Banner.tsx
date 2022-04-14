import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className="md:flex space-x-16 mt-20 md:mr-0 mr-10">
    <div className="md:flex items-center pl-16 ">
        <div className="">
            <h1 className="lg:text-5xl  font-bold leading-tight text-3xl">Sneaker sport nâng niu bàn chân việt!</h1>
            <p className="mt-4 text-lg font-normal ">Sneaker luôn đồng hành cùng bạn trên những chặng đường.</p>
            <div className="flex mt-10 w-40 items-center space-x-3 py-3 px-6 bg-gray-700 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                <button className="text-lg text-md ">Chi tiết__!</button>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </span>
            </div>
        </div>
    </div>

    <div className="max-w-lg pr-24 md:flex justify-center items-center  hidden">
        <img className="rounded-lg" src="http://file.hstatic.net/200000097517/article/unnamed_f18bbd5ef96445f5b886a56aec86407b.png" alt="" />
    </div>
</div>
  )
}

export default Banner