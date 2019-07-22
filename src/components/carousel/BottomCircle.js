import React from 'react'
import  {IoIosRadioButtonOff, IoIosRadioButtonOn} from 'react-icons/io'

const BottomCircle = ({look})=>{
    return(
            look?<IoIosRadioButtonOn className="carousel-dot"/>:<IoIosRadioButtonOff className="carousel-dot"/>
    )
}

export {BottomCircle}