import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Net.css'
import React from 'react'

function Net() {
  return (
    <div className='Principal'>
        <a href="https://api.whatsapp.com/send?phone=56951397667" target="_blank" rel="noreferrer">
          <WhatsAppIcon 
            color="success" fontSize="large" sx={{ borderRadius: '8px',
            boxShadow: '0 0 .5rem #1372df '}} />
        </a>
        <a href="https://www.linkedin.com/in/cristian-alexander-carhuas-yuyale-2a98a522a" target="_blank" rel="noreferrer">
          <LinkedInIcon
            sx={{ color: '#1003AE',borderRadius: '8px',
            boxShadow: '0 0 .5rem #1372df '}} fontSize="large"/>
        </a>
        <a href="https://github.com/Brianbrowncoopman" target="_blank" rel="noreferrer">
          <GitHubIcon
            sx={{ color: 'black',borderRadius: '8px',
            boxShadow: '0 0 .5rem #1372df '}} fontSize="large"/>
        </a>
      </div>
  )
}

export default Net;