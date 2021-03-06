import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

type Input = {
  name: string,
  price: number,
  img: string,
  decs: string,


  
}
type AddProps = {
  name: string,
  onAdd: (products: Input) => void
}
const Add = (props: AddProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Input>();
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Input> = (dataInput) => {
    props.onAdd(dataInput)
    navigate('/list')

  }

  return (
    <div>
      <strong className=" text-xl uppercase pt-4">Thêm Thông Tin Sản Phẩm</strong> <br />

      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-6">
            <input type="text" {...register('name')} className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
              placeholder="Name" />
                       {errors.name && <span>Bắt buộc phải nhập trường này!</span>}

          </div>
          <div className="form-group mb-6">
            <input type="text" {...register('img')} className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
              placeholder="Img" />
                       {errors.img && <span>Bắt buộc phải nhập trường này!</span>}

          </div>
          <div className="form-group mb-6">
            <input type="number"  {...register('price')} className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Price" />
          </div>
          <div className="form-group mb-6">
            <input type="text" {...register('decs')} className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
              placeholder="Decs" />
                       {errors.name && <span>Bắt buộc phải nhập trường này!</span>}

          </div>

          <button type="submit" className="
        w-full
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">Send</button>
        
        </form>
      </div>
    </div>
  )
}

export default Add
