import React,{useState} from 'react'
import './Home.css'
import Accounts from './Accounts/Accounts'
import RecentTransactions from './RecentTransactions/RecentTransactions'
import AddIcon from '@mui/icons-material/Add';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Modal } from '@mui/material';
import AddNewTransaction from '../NewTransaction/AddNewTransaction'
import { Link } from 'react-router-dom'
import { getAllTransactions } from '../../services/transactions';

function Home() {
  const [showAddNewTransac, setShowAddNewTransac] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [transactions,setTransactions] = useState([]);
  
  const getTransactions = () => {
    getAllTransactions().then((res)=>{
      console.log(res.data);
      setTransactions(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showAddNewTransacButton = () => {
    setShowAddNewTransac(true);
  }
  const hideAddNewTransacButton = () => {
    setShowAddNewTransac(false);
  }

  return (
    <div className='home'>
        <Accounts/>
        <RecentTransactions transactions={transactions} setTransactions={setTransactions} />
        <div className='add_new_transaction transit-slow'>
          {/* <Link to='/new_transaction'> */}
            <IconButton 
              // onMouseEnter={showAddNewTransacButton} 
              // onMouseLeave={hideAddNewTransacButton} 
              onClick={handleOpen}
              className='add_new_transaction__button transit-slow' 
            >
              <AddIcon fontSize='large' />
              
              {/* { showAddNewTransac?<span className='font-md transit-slow' >Add New Transaction</span>:null} */}
            </IconButton>
          {/* </Link> */}

        </div>

        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth={true}
          maxWidth='md'
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <DialogTitle id="modal-modal-title">Add New Transaction</DialogTitle>
          <DialogContent dividers>
            <AddNewTransaction handleClose={handleClose} getTransactions={getTransactions} />
          </DialogContent>
          {/* <DialogActions>
            <button onClick={handleClose} className='cancel' >Cancel</button>
            <button onClick={handleClose} className='add' >Add</button>
          </DialogActions> */}

        </Dialog>
    </div>
  )
}

export default Home