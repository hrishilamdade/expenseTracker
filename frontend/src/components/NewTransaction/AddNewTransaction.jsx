import { FormControl, Input, InputLabel, TextField } from '@mui/material'
import React from 'react'
import './AddNewTransaction.css'

function AddNewTransaction() {
  return (
    <div className='new_transact'>
      <div className='new_transact__body'>
        <div className='new_transact__body__wrapper' >
          <input type='text' className='new_transact__body__description' placeholder='Description' />
        </div>  
        <div className='new_transact__body__wrapper' >
          <input type='date' className='new_transact__body__date' style={{margin:'10px 25px 10px 0px'}} />
          <input type='number' className='new_transact__body__amount' placeholder='Amount' style={{margin:'10px 0px 10px 25px'}} />
        </div>
      </div>
    </div>
  )
}

export default AddNewTransaction