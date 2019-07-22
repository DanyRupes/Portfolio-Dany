import React from 'react'

const Quoten = ({data})=>{
let {quote, head} = data
    return(
        <div  className="quote-container container-fluid" >
        <h1>
          <q>
            
           {head}
          </q>
        </h1>
        <div style={{padding: '0.5em 5.5em'}}>
            <p>
                {quote}
            </p>
        </div>
      </div>
    )
}

export default Quoten