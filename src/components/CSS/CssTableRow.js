import React from 'react'

const CssTableRow = ({item}) => {

    return (
        <div className="rowRWD">
            <div className="columnRWD rowHeader stripe" data-label={item.selector}>{item.selector}</div>
            <div className="columnRWD stripe" data-label={item.examlpe}>{item.examlpe}</div>
            <div className="columnRWD stripe" data-label={item.description}>{item.description}</div>
        </div>
    )
}

export default CssTableRow
