import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Link } from 'react-router-dom';
import { BottomNavigationAction } from '@mui/material';

export default function Bar() {
  return (
    <Box sx={{ flexGrow: 1 ,zIndex:"100"}}>
      <AppBar position="fixed">
        <Toolbar >
          <Typography variant="h6" component="div"  sx={{ display: 'flex',flexGrow: 1, justifyContent: "center",mr: 2  }}>
            <IconButton
            size="medium"
            edge="start"
            color="#455a64"
            sx={{ mr: -2,mt:-2.5 }}
          >
           <Link to={"/"}><BottomNavigationAction label="Movie" icon={<PlayCircleFilledIcon sx={{mt:0.5}}/> } /></Link>
            </IconButton  >
           movie
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
