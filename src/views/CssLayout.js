import React from 'react'
import CssCode from '../components/CSS/CssCode'
import CssPropertyTableRow from '../components/CSS/CssPropertyTableRow'
import CssTableRow from '../components/CSS/CssTableRow'
import CssUsefullLinks from '../components/CSS/CssUsefullLinks'
import { cssSelectorsTableData, cssPropertyTableData, data } from '../data/es'

const CssLayout = () => {
    return (
        <main className="main__content container mb-5">
        
                <h1 className="text-center pb-5">{data.navbarLinkCss}</h1>
                <h3 className="text-center pb-3">{data.cssTableTitle}</h3>
                <div className="tableRWD mb-3">
                    <div className="table-headRWD">
                        <div className="columnRWD" data-label={data.cssTableTitleSelector}>{data.cssTableTitleSelector}</div>
                        <div className="columnRWD" data-label={data.cssTableTitleExample}>{data.cssTableTitleExample}</div>
                        <div className="columnRWD" data-label={data.TableDescription}>{data.TableDescription}</div>
                    </div>
                    {cssSelectorsTableData.map((item, i) => <CssTableRow item={item}  />)}
                </div>

                <h3 className="text-center py-3">{data.cssTablePropertyTitle}</h3>
                <div className="tableRWD mb-3">
                    <div className="table-headRWD">
                        <div className="columnRWD" data-label={data.cssTableTitleProperty}>{data.cssTableTitleProperty}</div>
                        <div className="columnRWD" data-label={data.TableDescription}>{data.TableDescription}</div>
                    </div>
                    {cssPropertyTableData.map((item, i) => <CssPropertyTableRow item={item}  />)}
                </div>
                
                <h3 className="text-center py-3">{data.htmlStructureTitle}</h3>
                <CssCode />
                <h3 className="text-center py-3">{data.htmlUsefulLinksTitle}</h3>
                <CssUsefullLinks />
  
        </main>
    )
}

export default CssLayout
