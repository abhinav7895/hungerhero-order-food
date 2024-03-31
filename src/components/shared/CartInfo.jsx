import { useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "../../lib/redux/cartSlice";
const CartInfo = (item) => {
    const { name, itemAttribute, price, defaultPrice } = item[0];
    const count = item[1];
    const dispatch = useDispatch();

    const addFoodItem = (i) => {
        dispatch(increaseCount(i));
    };

    const removeFoodItem = (i) => {
        dispatch(decreaseCount(i));
    };

    return (
        <div className=" flex justify-between mt-3">
            <div className="flex gap-[2px] items-center">
                <img className="w-[20px]" src={itemAttribute?.vegClassifier == "VEG" ? "/assets/veg.svg" : "/assets/nonveg.svg"} alt="" />
                <p className="text-base text-gray-600 line-clamp-1">{name}</p>
            </div>
            <div className="flex gap-3 items-center">
                <div className="flex items-center w-20 h-8 p-1 px-2 justify-between border ">
                    <button
                        className="font-bold text-gray-500"
                        onClick={() => {
                            removeFoodItem(item[0].id);
                        }}
                    >
                        &minus;
                    </button>
                    <span className="">{count}</span>
                    <button
                        className="font-bold text-green-500"
                        onClick={() => {
                            addFoodItem(item[0].id);
                        }}
                    >
                        +
                    </button>
                </div>
                <p className="w-[60px] text-right text-gray-600 font-light"><span>₹{price ? (price / 100) * count : (defaultPrice / 100) * count}</span></p>
            </div>
        </div>
    );
};
export default CartInfo;
