import React from 'react'

const Avatar = ({TopIntro})=>{
let {image_url, description } = TopIntro

    return(
        <div  className="avatar-container container-fluid">
         <div className="avatar-img-container">
          <img src="https://www.dropbox.com/s/rbwmdit961va7zd/danypic.png?raw=1" />
         </div>
        {/* <h1>
          <q>
           {quote}
          </q>
        </h1> */}
        <p>

        {description    }
        </p>
        {/* <div style={{padding: '0.5em 5.5em'}}>
            <p>
                {bio_desc}
            </p>
        </div> */}
      </div>
    )
}

export default Avatar