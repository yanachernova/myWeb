import React from 'react'

const CssPropertyTableRow = ({item}) => {
    return (
        <div className="rowRWD">
        <div className="columnRWD rowHeader stripe" data-label={item.property}>{item.property}</div>
        <div className="columnRWD stripe" data-label={item.description}>{item.description}</div>
    </div>
    )
}

export default CssPropertyTableRow
