import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { signup } from '../../api/uer';

type Input = {
    name:string,
    email: string,
    password: string
};

const Sigup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Input>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Input> = data => {
      signup(data)
      navigate('/sigin')
    }
    return (
        <div className="font-sans">
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                <div className="relative sm:max-w-sm w-full">
                    <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                    <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                            Đăng ký
                        </label>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
                            <div className="mt-7">
                                <input type="text" {...register('name')} placeholder="Tên Đăng nhập" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>
                            
                            <div className="mt-7">
                                <input type="email" {...register('email')} placeholder="Email của bạn" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>

                            <div className="mt-7">
                                <input type="password" {...register('password')} placeholder="Mật khẩu của bạn" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>
                           

                            <div className="mt-7 flex">
                                <label className="inline-flex items-center w-full cursor-pointer">
                                    <input id="remember_me" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember" />
                                    <span className="ml-2 text-sm text-gray-600">
                                        Ghi nhớ mật khẩu!
                                    </span>
                                </label>

                                <div className="w-full text-right">
                                    <a className="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                                        Đã có tài khoản !
                                    </a>
                                </div>
                            </div>

                            <div className="mt-7">
                                <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                   Đăng Ký
                                </button>
                            </div>

                          
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sigup