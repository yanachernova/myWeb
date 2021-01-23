import React from 'react'
import { data } from '../../data/es'

const CssUsefullLinks = () => {
    return (
        <>
            <div className="row mb-3">
                <div className="col-md-5 html_useful-links-devider">
                    <p>{data.UsefullLinkNameOne}</p>
                </div>
                <hr />
                <div className="col-md-6 html_useful-links-devider">
                    <a target="_blank" rel="noreferrer"  href={data.cssUsefullLinkOne}>{data.cssUsefullLinkOne}</a>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-5 html_useful-links-devider">
                    <p>{data.UsefullLinkNameTwo}</p>
                </div>
                <hr />
                <div className="col-md-6 html_useful-links-devider">
                    <a target="_blank" rel="noreferrer"  href={data.cssUsefullLinkTwo}>{data.cssUsefullLinkTwo}</a>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-5 html_useful-links-devider">
                    <p>{data.navbarLinkGithub}</p>
                </div>
                <hr />
                <div className="col-md-6 html_useful-links-devider">
                    <a target="_blank" rel="noreferrer"  href={data.cssUsefullLinkThree}>{data.cssUsefullLinkThree}</a>
                </div>
            </div>
        </>
    )
}

export default CssUsefullLinks
