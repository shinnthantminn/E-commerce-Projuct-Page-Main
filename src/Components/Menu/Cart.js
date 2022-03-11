const Cart = ({ toggle }) => {
  return (
    <div
      className={
        toggle
          ? 'cart origin-top translate-x-[-50%] lg:translate-x-[0] scale-y-[1]'
          : 'cart origin-top translate-x-[0] scale-y-0'
      }
    >
      <div className="border-b-2 py-[18px] border-gray-300 px-6 text-black font-semibold">
        <h1>Cart</h1>
      </div>

      <div className="min-h-[230px]">
        <div className="text-center leading-[220px] text-gray-500 font-semibold">
          Your cart is empty
        </div>
      </div>
    </div>
  )
}

export default Cart
