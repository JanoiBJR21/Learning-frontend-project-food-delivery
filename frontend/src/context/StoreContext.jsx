import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState({})

    const addTocart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
// ข้อควรระวัง
// การเรียก removeFromCart เมื่อจำนวนสินค้าที่เหลือในตะกร้าเป็น 1 จะทำให้จำนวนสินค้าลดลงเป็น 0
// ควรเพิ่มเงื่อนไขเพื่อตรวจสอบและลบสินค้าออกจากตะกร้าเมื่อจำนวนเป็น 0 เพื่อป้องกันไม่ให้มีรายการสินค้าที่จำนวนเป็นลบในตะกร้า
// การปรับปรุง
// สามารถปรับปรุงฟังก์ชัน removeFromCart เพื่อจัดการกับกรณีที่จำนวนสินค้าเป็น 0 ดังนี้:
// const removeFromCart = (itemId) => {
//     setCartItem((prev) => {
//         const updatedItemCount = prev[itemId] - 1;
//         if (updatedItemCount <= 0) {
//             const { [itemId]: _, ...rest } = prev;
//             return rest;
//         }
//         return { ...prev, [itemId]: updatedItemCount };
//     });
// }
// ตรวจสอบว่าจำนวนสินค้าหลังจากลดแล้วเป็น 0 หรือน้อยกว่า 0 หรือไม่
// ถ้าเป็น 0 หรือน้อยกว่า 0 ให้ลบรายการสินค้านั้นออกจากตะกร้า
// ถ้ายังมากกว่า 0 ให้ลดจำนวนสินค้าลงตามปกติ

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])
    

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addTocart,
        removeFromCart
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;