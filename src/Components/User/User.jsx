import React, { useState } from 'react'
import './User.css'
import Table from '../../BaseComponent/Table/Table'
import logo from '../../assests/jmv.jpg'


// icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import DropDown from '../../BaseComponent/DropDown/DropDown';





const User = () => {



  return (
    <div>
      <div className="UserHeader_cont ">
        <div className="logo">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="title">
            <h1>INTEGRATED PASSENGER INFORMATION SYSTEM</h1>
        </div>
        <div className="User_functions">
            <SearchIcon/>
            <RefreshIcon/>
            <ModeEditIcon/>
            <HelpIcon/>
            <SettingsIcon/>
            <AccountCircleIcon/>
        </div>
      </div>
      <Table
          tr1="Train No."
          tr2="Train Name"
          tr3="Origin Station"
          tr4="Destination Station"
          tr5="SCH Apr"
          tr6="SCH Dep"
          tr7="A/D"
          tr8="PF No."
          tr9="Actual Arrival Time"
          tr10="Actual Departure"
          tr11="Late"
          tr12="Status"
          tr13="TADDB"
          tr14="CGDB"
          tr15=" "
          tr16="Announcement"
          tr17="Delete"
        />


    </div>
  )
}

export default User