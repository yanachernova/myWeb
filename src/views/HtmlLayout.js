import React from 'react'
import HtmlCode from '../components/HTML/HtmlCode'
import HtmlTableRow from '../components/HTML/HtmlTableRow'
import HtmlUsefullLinks from '../components/HTML/HtmlUsefullLinks'
import { htmlTagsTableData, data } from '../data/es'


const HtmlLayout = () => {
    return (
        <main className="main__content container mb-5">
            <h1 className="text-center pb-5">{data.navbarLinkHtml}</h1>
            <h3 className="text-center pb-3">{data.htmlTableTitle}</h3>
            <div className="tableRWD mb-3">
                <div className="table-headRWD">
                    <div className="columnRWD" data-label={data.htmlTableTitleTag}>{data.htmlTableTitleTag}</div>
                    <div className="columnRWD" data-label={data.TableDescription}>{data.TableDescription}</div>
                </div>
                {htmlTagsTableData.map((item, i) => <HtmlTableRow item={item} />)}
            </div>
            <h3 className="text-center py-3">{data.htmlStructureTitle}</h3>
            <HtmlCode />
            <h3 className="text-center py-3">{data.htmlUsefulLinksTitle}</h3>
            <HtmlUsefullLinks />
        </main>

    )
}

export default HtmlLayout
