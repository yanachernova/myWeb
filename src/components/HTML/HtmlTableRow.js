import React from 'react'

const HtmlTableRow = ({item}) => {
    return (
        <div className="rowRWD">
            <div className="columnRWD rowHeader stripe" data-label={item.tag}>{item.tag}</div>
            <div className="columnRWD stripe" data-label={item.description}>{item.description}</div>
        </div>
    )
}

export default HtmlTableRow
