import { FormControl, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import './AddNewTransaction.css'
import { addTransaction } from '../../services/transactions';



function AddNewTransaction({handleClose,getTransactions}) {
  const [title,setTitle] = useState("")
  const [date,setDate] = useState("");
  const [amount,setAmount] = useState(0);
  const [type, setType] = useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  console.log(date);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({title,date,amount,type}).then((res)=>{
      console.log(res.data);
      getTransactions();
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className='new_transact'>
      <div className='new_transact__body'>
        <div className='new_transact__body__wrapper' >
          <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} className='new_transact__body__description' placeholder='Description' />
        </div>  
        <div className='new_transact__body__wrapper' >
          <input type='date' value={date} onChange={(e)=>setDate(e.target.value)} className='new_transact__body__date' style={{margin:'10px 25px 10px 0px'}} />
          <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} className='new_transact__body__amount' placeholder='Amount' style={{margin:'10px 0px 10px 25px'}} />
        </div>
        <div className='new_transact__body__wrapper'>
          {/* <label htmlFor="type">Type</label> */}
          <select name="type" id="type" value={type} onChange={handleChange} className='new_transact__body__wrapper__select' >
            <option value="" disabled selected hidden>Type</option>
            <option value="debit" className='new_transact__body__wrapper__select__option'>Debit</option>
            <option value="credit" className='new_transact__body__wrapper__select__option' >Credit</option>
          </select>
          {/* <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Type"
              onChange={handleChange}
            >
              <MenuItem value={'debit'}>Debit</MenuItem>
              <MenuItem value={'credit'}>Crerdit</MenuItem>
            </Select>
          </FormControl> */}
          
        </div>
        <div className='new_transact__body__bottom' >
          <button onClick={handleClose} className='cancel' >Cancel</button>
          <button 
            onClick={(e)=>{ 
              handleClose();
              handleSubmit(e);
            }} 
            className='add' 
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddNewTransaction