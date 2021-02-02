import React from 'react'
import { data } from '../../data/es'

const JsUsefullLinks = () => {
    return (
        <>
          <div className="row mb-3">
            <div className="col-md-5 html_useful-links-devider">
                <p>{data.UsefullLinkNameOne}</p>
            </div>
            <hr />
            <div className="col-md-6 html_useful-links-devider">
                <a target="_blank" rel="noreferrer"  href={data.jsUsefullLinkOne}>{data.jsUsefullLinkOne}</a>
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-md-5 html_useful-links-devider">
                <p>{data.UsefullLinkNameTwo}</p>
            </div>
            <hr />
            <div className="col-md-6 html_useful-links-devider">
                <a target="_blank" rel="noreferrer"  href={data.jsUsefullLinkTwo}>{data.jsUsefullLinkTwo}</a>
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-md-5 html_useful-links-devider">
                <p>{data.navbarLinkGithub}</p>
            </div>
            <hr />
            <div className="col-md-6 html_useful-links-devider">
                <a target="_blank" rel="noreferrer"  href={data.jsUsefullLinkThree}>{data.jsUsefullLinkThree}</a>
            </div>
        </div>  
        <div className="row mb-3">
            <div className="col-md-5 html_useful-links-devider">
                <p>{data.navbarLinkYoutube}</p>
            </div>
            <hr />
            <div className="col-md-6 html_useful-links-devider">
                <a target="_blank" rel="noreferrer"  href={data.jsUsefullLinkFour}>{data.jsUsefullLinkFour}</a>
            </div>
        </div>  
        </>
    )
}

export default JsUsefullLinks
