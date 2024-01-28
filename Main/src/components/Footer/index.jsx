import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 1 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction href="https://github.com/phipham0" label="" icon={<GitHubIcon />} />
        <BottomNavigationAction href="https://www.linkedin.com/in/phi-pham1/" label="" icon={<LinkedInIcon />} />
        <BottomNavigationAction href="https://www.youtube.com/channel/UCbus08xnBEtvApce2odZNyQ" label="" icon={<YouTubeIcon />} />
      </BottomNavigation>
    </Box>
  );
}