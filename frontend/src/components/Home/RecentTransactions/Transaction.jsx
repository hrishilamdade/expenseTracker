import React from 'react'
import './RecentTransactions.css'


function Transaction({ data,index }) {
    const {date, title, amount,type} = data
    console.log(data)
    return (
        <div className={`recenttransact__body__item ${index%2?"bg-light":""}`}>
            <div className='recenttransact__body__item__data'>{date}</div>
            <div className='recenttransact__body__item__data'>{title}</div>
            <div className={`recenttransact__body__item__data color-${type==="debit"?"red":"green"}`}> {type==="debit"?"-":"+"} ₹ {amount} </div>
        </div>
    )
}

export default Transaction