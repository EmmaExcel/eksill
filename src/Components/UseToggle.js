import React,{useState} from 'react'

export const useToggle = () => {
    const [click,setClick] =useState(false)

    const OpenSidebar=()=>{
        setClick(true)
    }

    const ToggleSidebar = ()=>{
        setClick(!click)
    }

    const closeSidebar = ()=>{
        setClick(false)
    }

  return [click,OpenSidebar,closeSidebar,ToggleSidebar]
}

export default useToggle
