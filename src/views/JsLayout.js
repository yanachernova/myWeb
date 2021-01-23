import React from 'react'
import JsCode from '../components/JS/JsCode'
import { jsTableData, data } from '../data/es'
import JsTableRow from '../components/JS/JsTableRow'
import JsUsefullLinks from '../components/JS/JsUsefullLinks'

const JsLayout = () => {
    return (
        <main className="main__content container mb-5">
        <article className="banner__content">
            <h1 className="text-center pb-5">{data.navbarLinkJs}</h1>
            <h3 className="text-center pb-3">{data.jsTableTitle}</h3>
                <div className="tableRWD mb-3">
                    <div className="table-headRWD">
                        <div className="columnRWD" data-label={data.cssTableTitleExample}>{data.cssTableTitleExample}</div>
                        <div className="columnRWD" data-label={data.TableDescription}>{data.TableDescription}</div>
                    </div>
                    {jsTableData.map((item, i) => <JsTableRow item={item} />)}
                </div>
            <h3 className="text-center py-4">{data.jsAboutTitle}</h3>
            <JsCode/>
            <h3 className="text-center py-3">{data.htmlUsefulLinksTitle}</h3>
            <JsUsefullLinks/>
        </article>
    </main>
    )
}

export default JsLayout
