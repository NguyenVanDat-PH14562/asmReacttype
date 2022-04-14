import React from 'react'
import MenuHeader from './MenuHeader'
import login from '../page/admin/Sigin'

type Props = {}

const Header = (props: Props) => {
    return (
        <header>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b bg-gray-700 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-white">
                                <thead className="bg-gray-700">
                                </thead>
                                <tbody className="bg-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-16 w-16">
                                                    <img className="h-16 w-16 rounded-full border" src="https://images-platform.99static.com//zvgtch1g-AfvYKsLleHclChDLYE=/222x209:1707x1694/fit-in/500x500/projects-files/101/10165/1016553/09deac31-4bdc-4bb6-b6f2-e644b4ff0500.png" alt="" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-2xl text-white font-light leading-normal">
                                                        Cảm ơn bạn đã ghé thăm sneacker shop!
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                      
                                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-white font-bold leading-normal">
                                            <a href="/sigin">Đăng nhập</a>
                                            <ul className="font-thin text-xs py-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>

                                            </ul>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <MenuHeader />

        </header>
    )
}

export default Header