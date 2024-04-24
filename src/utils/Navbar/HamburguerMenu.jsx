import { useState } from "react";

const HamburguerMenu = () => {
    const[isBurgerClicked,setBurgerClicked] = useState(false);
    const handleBurgerClick = () => {
        setBurgerClicked(!isBurgerClicked);
        if(isBurgerClicked){
            console.log('burger clicked');
        }
    }
  return (
    <div className='text-white w-4 h-7 flex flex-col justify-between cursor-pointer items-start px-6 xl:hidden' onClick={handleBurgerClick}>
        <div className={` w-8 h-1 rounded bg-white transition-transform duration-200 ease-out ${isBurgerClicked ?"transform rotate-45 translate-x-[0rem] translate-y-[0.5rem]":""}`}></div>
        <div className={` w-8 h-1 rounded bg-white transition-transform duration-200 ease-out ${isBurgerClicked ?"transform scale-0":""}`}></div>
        <div className={` w-8 h-1 rounded bg-white transition-transform duration-200 ease-out ${isBurgerClicked ?"transform -rotate-45 translate-x-[-0rem] translate-y-[-1rem]":""}`}></div>
    </div>
  )
}

export default HamburguerMenu
