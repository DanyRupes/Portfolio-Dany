import React from 'react'
import { FaChild, FaGithub, FaFacebookF, FaLinkedinIn, FaFreeCodeCamp, FaTwitter, FaDev } from 'react-icons/fa'

const Connector = ({ quote, bio_desc }) => {

    return (
        <div className="connect-container container-fluid" id="connect">
            <span style={{ fontSize: '2.3em', padding: '0.2em' }}><FaChild /> Connect</span>
            <div className="connect-content">
                <div className="cn-lf-container">
                    <div className="cn-address">
                        <p>4/36, Ammans Nagar</p>
                        <p>Vadamadurai(post)</p>
                        <p>Coimbatore <code>641 017</code>.</p>
                    </div>

                    <p className="cn-email">
                        developer.dany@gmail.com
                </p>
                </div> 
               
                <div className="row connect-icon-c">
                    <a class="col-3 col-sm-3 col-lg-3" target="blank" href="https://github.com/Danyrupes"><FaGithub /></a>
                    <a class="col-3 col-sm-3 col-lg-3" target="blank" href="https://www.facebook.com/Danyrupes"><FaFacebookF /></a>
                    <a class="col-3 col-sm-3 col-lg-3" target="blank" href="https://www.linkedin.com/in/dany-rupes-646223126/"><FaLinkedinIn /></a>
                    <a class="col-3 col-sm-3 col-lg-3" target="blank" href="https://www.freecodecamp.org/danyrupes"><FaFreeCodeCamp /></a>
                    <a class="col-3 col-sm-3 col-lg-3" target="blank" href="https://twitter.com/dany_rupes"><FaTwitter /></a>
                    <a class="col-3 col-sm-3 col-lg-3" target="blank" href="https://dev.to/danyrupes"><FaDev /></a>
                </div>
            </div>
        </div>
    )
}

export default Connector