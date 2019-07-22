import React from 'react'
import { FiMap } from 'react-icons/fi'

const Project = ({projects}) => {
    return (
        <div style={{ textAlign: 'center', color: 'dimgray' }}
            className="project-content container-fluid"
            id="project-content">
            <span style={{ fontSize: '3em', paddingTop: '0.2em' }}><FiMap /> Projects</span>
            {
                projects.map(item => {
                    return (
                        item.id %2 == 0 ?
                            <div className="pr-single-content" key={item.id}>
                                <div className="pr-img-container">
                                    <img src={item.img_url} />
                                </div>
                                <div className="pr-img-decription">
                                    <p>{item.description}</p>
                                </div>
                            </div> :
                            <div className="pr-single-content" key={item.id}>
                                <div className="pr-img-decription">
                                    <p>{item.description}</p>
                                </div>
                                <div className="pr-img-container">
                                    <img src={item.img_url} />
                                </div>
                            </div>
                    )
                })
            }
        </div>
    )
}

export default Project

