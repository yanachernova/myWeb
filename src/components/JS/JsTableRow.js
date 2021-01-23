import React from 'react'

const JsTableRow = ({item}) => {
    return (
        <div className="rowRWD">
            <div className="columnRWD rowHeader stripe" data-label={item.example}>{item.example}</div>
            <div className="columnRWD stripe" data-label={item.description}>{item.description}</div>
        </div>
    )
}

export default JsTableRow
