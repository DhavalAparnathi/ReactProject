import React from 'react'
import Box from '@mui/material/Box/Box';
import Sidebar from '../components/Sidebar';

export default function City() {
  return (
<>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <div className="Pageclass">City</div>
      </Box>
    </>  )
}
