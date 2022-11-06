import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './style.css'
import React from 'react'

function Net() {
  return (
    <div className='Principal'>
        <a href="https://api.whatsapp.com/send?phone=56951397667" target="_blank" rel="noreferrer">
          <WhatsAppIcon 
            color="success" fontSize="large" sx={{ borderRadius: '8px',
            boxShadow: '0 0 .5rem #2ff53c '}} />
        </a>
        <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">
          <LinkedInIcon
            sx={{ color: '#1003AE',borderRadius: '8px',
            boxShadow: '0 0 .5rem #1119f5 '}} fontSize="large"/>
        </a>
        <a href="https://github.com/Brianbrowncoopman" target="_blank" rel="noreferrer">
          <GitHubIcon
            sx={{ color: 'black',borderRadius: '8px',
            boxShadow: '0 0 .5rem #01010a '}} fontSize="large"/>
        </a>
      </div>
  )
}

export default Net;