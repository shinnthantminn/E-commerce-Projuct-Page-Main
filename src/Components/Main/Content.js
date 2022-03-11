import CounterBtn from './CounterBtn'

function Content() {
  return (
    <div className=" space-y-5 lg:space-y-7 mx-5 lg:mx-10 pt-10 pb-20 lg:pb-0 lg:pt-44">
      <p className=" font-bold text-orange-500 text-sm tracking-widest">
        SNEAKER COMPANY
      </p>
      <h1 className="text-3xl lg:text-5xl tracking-tight font-bold text-black">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-sm lg:w-[80%] text-gray-500">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div>
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-4xl font-bold">Ks 50000</span>
          <span className="font-semibold px-2 py-1 text-orange-500 bg-[rgba(255,_125,_26,_0.2)] rounded-lg">
            50%
          </span>
        </div>
        <p className="text-gray-400 line-through font-bold">Ks 100000</p>
      </div>
      <CounterBtn />
    </div>
  )
}

export default Content
