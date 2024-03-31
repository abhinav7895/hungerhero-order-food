import { useRef } from 'react'
import { RxCross1 } from 'react-icons/rx';

const RestFreshPopup = (item, onClose, onClick) => {

    const menuRef = useRef(null);
    const closeFreshRestPopup = (e) => {
        if (e.target === menuRef.current) {
            onClose();
        }
    }

    const startFresh = () => {
        // set the fresh restaurant items into the cart
        onClick();
        // close the popup
        onClose();
    }

    return (
        <div onClick={closeFreshRestPopup} ref={menuRef} className="fixed inset-0 h-full flex-center flex-col bg-black bg-opacity-30 backdrop-blur-sm z-50">
            <div className="flex flex-col gap-3">
                <button className="self-end text-2xl bg-gray-600 hover:bg-gray-700 p-1 text-white border-2 border-white rounded-full transition-all duration-300 hover:scale-90 focus:scale-75" onClick={onClose}>
                    <RxCross1 />
                </button>
                <div className="*:text-gray-800 w-full flex flex-col gap-3 p-5  max-w-md bg-white rounded-xl">
                    <h2 className='text-2xl font-semibold text-gray-600'>Items already in cart</h2>
                    <p className='text-base font-light text-gray-500'>
                        Your cart contains items from other restaurant. Would you
                        like to reset your cart for adding items from this
                        restaurant?
                    </p>
                    <button onClick={startFresh} className="p-3 bg-blue-100 hover:bg-blue-200 text-lg rounded-lg shadow-lg border border-gray-400" >
                        Yes, Start Fresh
                    </button>
                    <button className="flex-center gap-2 p-3  bg-blue-100 hover:bg-blue-200 text-lg rounded-lg shadow-lg border border-gray-400 " onClick={onClose}>
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RestFreshPopup