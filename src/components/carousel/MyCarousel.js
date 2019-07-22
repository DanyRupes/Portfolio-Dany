import React, { Component } from 'react'
import {BottomCircle} from './BottomCircle'
import ImageSlide from './ImageSlide'
class MyCarousel extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            images : ['https://www.incimages.com/uploaded_files/image/1940x900/getty_509107562_2000133320009280346_351827.jpg',
        'https://www.setaswall.com/wp-content/uploads/2017/06/Life-Facebook-Cover-Photos-1-604-x-224.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAmCyZB9GBs9n0Yi9U0PcLRe1KK8zf7B8bKM2UmFIlx_XMcuz']
        ,img_no:0
    }
    }

    render(){
        var {img_no} = this.state
        setTimeout(()=>{
            if(img_no==2) this.setState({img_no:0})
            else this.setState({img_no:this.state.img_no+1})
            }, 3000)
            console.log("---------------------------",img_no, this.state.img_no)
        return (
            <div className="carousel-container">
                    <ImageSlide  img_url={this.state.images[img_no>3?0:img_no]}/>
                    <div className="carousel-dot-container">
                        <BottomCircle look={true} />
                        <BottomCircle look={false} />
                        <BottomCircle look={false} />
                    </div>
            </div>
        )
    }
}

export default MyCarousel