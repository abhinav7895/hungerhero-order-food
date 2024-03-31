import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartInfo from "../../components/shared/CartInfo"
import { v4 as uuidv4 } from "uuid"
import { IoMdCart } from "react-icons/io";
import TipPopup from "../../components/shared/TipsPopup"
import { RxCross2 } from "react-icons/rx";
import { deleteTip } from "../../lib/redux/cartSlice"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart);
  const { tipAmount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showTipPopup, setShowTipPopup] = useState(false);
  const [totalItemPrice, setTotalItemPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleShowTipPopup = () => {
    setShowTipPopup(!showTipPopup);
  }
  const handleRemovePopup = () => {
    dispatch(deleteTip());
  }

  // set the totalPrice
  useEffect(() => {
    const totalPrice = cartItems.items.reduce((totalSum, currentItem) => {
      const itemPrice = currentItem[0]?.defaultPrice ? currentItem[0]?.defaultPrice : currentItem[0]?.price;
      return (
        Math.floor(totalSum + (itemPrice / 100) * currentItem[1])
      )
    }, 0);
    setTotalItemPrice(totalPrice);
  }, [cartItems, totalItemPrice]);

  useEffect(() => {
    const updatedTotalPrice = Math.floor(totalItemPrice + 40 + Number(tipAmount) + 40);
    setTotalPrice(updatedTotalPrice);
  }, [totalItemPrice, tipAmount]);


  if (!cartItems.restaurant) {
    return (
      <section className=" flex container mx-auto mt-20 justify-center items-center flex-col">
        <img src={'assets/emptycart.avif'} className="max-w-[430px] w-full" />
        <h1 className="text-xl mt-4 font-semibold text-gray-700">Your cart is empty</h1>
        <p className="text-base font-light text-gray-500">You can go to home page to view more restaurants</p>
        <Link to="/" className="bg-[#d74112] hover:bg-orange-700 transition-all delay-100 mt-4 text-white p-2 px-4 rounded-lg">
          <button>SEE RESTAURANTS NEAR YOU</button>
        </Link>
      </section>
    )
  }

  return (
    <section className="container mx-auto mt-[120px]">
      <div className="max-w-screen-sm mx-auto mt-10 border rounded-lg h-[600px] overflow-scroll px-8 pt-8">
        <h1 className="text-4xl font-bold text-center text-gray-700 my-1 flex items-center gap-1 justify-center">Cart <IoMdCart /></h1>
        <p className="text-sm font-light text-center text-gray-700 uppercase pb-4">Secure Checkout </p>
        <div className="flex justify-between py-4 border-y border-dashed">
          {cartItems?.restaurant && (
            <img className="rounded-lg max-w-[100px] w-full" src={cartItems?.restaurant?.imgUrl}></img>
          )}
          <div className="">
            <h3 className="text-xl text-gray-700 font-semibold">{cartItems?.restaurant?.name}</h3>
            <p className="text-base text-gray-500 font-light">{cartItems?.restaurant?.areaName}</p>
            <p className="text-sm text-gray-500 font-light">{cartItems?.items.length} items</p>
          </div>
        </div>
        <div>
          {
            cartItems?.items?.map((item) => (
              <CartInfo item={item} key={uuidv4()} />
            ))
          }
        </div>
        <div className="mt-3 pt-3 border-t flex flex-col gap-1  border-dashed ">
          <h4 className="text-lg font-semibold text-gray-700">Bill Details</h4>
          <div className="flex w-full justify-between items-center text-sm text-gray-600"><span>Item Total</span><span>₹{totalItemPrice}</span></div>
          <div className="flex w-full justify-between items-center text-sm text-gray-600"><span>Delivery Fee</span><span>₹40</span></div>

          <div className="flex w-full justify-between items-center text-sm text-gray-600 border-t  mt-2 pt-2"><span>Delivery Tip</span>
            <div className="flex items-center gap-1">
              {tipAmount > 0 && <span className="">₹{tipAmount}</span>}
              <button className="text-orange-500 border-orange-500 border p-[2px] rounded" onClick={handleShowTipPopup}>{tipAmount > 0 ? "Change Tip" : "Add Tip"}</button>
              {tipAmount > 0 && <button className="text-red-600 text-lg border border-red-600 p-[2px] rounded" onClick={handleRemovePopup}><RxCross2 />
              </button>}
            </div>
          </div>
          {showTipPopup && <TipPopup onClose={() => setShowTipPopup(false)} />}
          <div className="flex w-full justify-between items-center text-sm text-gray-600 border-b-2 mb-3 pb-3 border-gray-400"><span>GST and Restaurant Charges</span><span>₹40</span></div>
        </div>
      </div>
      <div className="flex w-full justify-between items-center text-gray-600 text-2xl  font-semibold max-w-screen-sm mx-auto mt-2 px-8"><span>To Pay {" "} ₹{totalPrice}</span><button onClick={() => { navigate("/payments") }} className="bg-gradient-to-r from-orange-400 to-red-500 p-2 text-white rounded-md hover:from-orange-500 hover:to-red-600 transition-all ease-out delay-300">Make Payment</button></div>

    </section>
  )
}

export default Cart
