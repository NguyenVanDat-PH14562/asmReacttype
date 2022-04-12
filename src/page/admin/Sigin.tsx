import React from 'react'
import "toastr/build/toastr.min.css";
import toastr from "toastr";
import {authenticated} from '../../utils/localStaroge'
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { signin } from '../../api/uer';

type Input = {
    email: string,
    password: string
};
const Sigin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Input>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Input> = async user => {
        const {data} = await signin(user)
        authenticated(user,()=>{
            localStorage.setItem('user',JSON.stringify(data))
       if (data.user.role === 1) {
           navigate("/admin")
       } else {
        navigate("/")
       }
            toastr.success("Bạn đã đăng nhập thành công,chờ 3s để chuyển trang");

        })
    }


    return (
        <div className="font-sans">
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                <div className="relative sm:max-w-sm w-full">
                    <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                    <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                            Đăng nhập
                        </label>
                        <form onSubmit={handleSubmit(onSubmit)}  className="mt-10">

                            <div>
                                <input type="email"  {...register('email')} placeholder="Tên Email" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>

                            <div className="mt-7">
                                <input type="password"  {...register('password')} placeholder="Mật khẩu" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>

                            <div className="mt-7 flex">
                                <label className="inline-flex items-center w-full cursor-pointer">
                                    <input id="remember_me" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember" />
                                    <span className="ml-2 text-sm text-gray-600">
                                        Ghi nhớ mật khẩu !
                                    </span>
                                </label>

                                <div className="w-full text-right">
                                    <a className="underline text-sm text-gray-600 hover:text-gray-900" href="/sigup">
                                        Đăng ký tài khoản?
                                    </a>
                                </div>
                            </div>

                            <div className="mt-7">
                                <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Đăng nhập
                                </button>
                            </div>

                            <div className="flex mt-7 items-center text-center">
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                                <label className="block font-medium text-sm text-gray-600 w-full">
                                    Đăng nhập với !
                                </label>
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                            </div>

                            <div className="flex mt-7 justify-center w-full">
                                <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">

                                    Facebook
                                </button>

                                <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">

                                    Google
                                </button>
                            </div>

                          
            
                        </form>
                    </div>
                </div>
            </div>
        </div>





    )
}

export default Sigin