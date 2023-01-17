import { useState } from "react"
import Image from "next/legacy/image"
import useFOM from "../hooks/useFOM"

const productModal = () => {

  const { selectedProduct, actualCategory, handleChangeModal } = useFOM()
  const [amount, setAmount] = useState(1)

  return (
    <div className="md:flex">
      <div className="md:w-1/3">
        <Image
          alt={`Imagen producto ${selectedProduct.name}`}
          src={`/assets/img/${selectedProduct.image}.jpg`}
          width={500}
          height={500}
        />
      </div>

      <div className="md:w-2/3 ml-5">

        <div className="flex justify-end">
          <button onClick={handleChangeModal} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-5">
          <h1 className="font-bold text-2xl">{selectedProduct.name}</h1>
          <p className=" text-green font-bold mb-3">{actualCategory.name}</p>
          <p className="text-3xl font-bold text-green">${selectedProduct.price} MXN</p>
        </div>

        <div className="flex gap-2">
          <button 
            type="button"
            onClick={() => {
              if(amount <= 1) return
              setAmount(amount - 1)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <p className=" text-xl mt-1 bg-white w-10 text-center">{amount}</p>
          <button 
            type="button"
            onClick={() => {
              setAmount(amount + 1)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  )
}

export default productModal