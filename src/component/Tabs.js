import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AutoComplete from './Autocomplete';
import Accordian from './Accordian';
import Appbar from './Appbar';
import BreadCrumbs from './BreadCrumbs';
import Drawer from './Drawer';
import Floatingbutton from './Floatingbutton';
import Ratings from './Rating';
import Sliders from './Slider';
import Snackbarr from './Snackbar';
import SpeedDials from './SpeedDial';
import Stepperr from './Stepper';
import Switchs from './Switch';
import TransferList from './TransferList';
import BadgeComponent from './Badge';
import Introduction from './Introduction';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Introduction" {...a11yProps(0)} />
        <Tab label="Accordian" {...a11yProps(1)} />
        <Tab label="Appbar" {...a11yProps(2)} />
        <Tab label="AutoComplete" {...a11yProps(3)} />
        <Tab label="Badge" {...a11yProps(4)} />
        <Tab label="Breadcrumbs" {...a11yProps(5)} />
        <Tab label="Drawer" {...a11yProps(6)} />
        <Tab label="Floating action button" {...a11yProps(7)} />
        <Tab label="Rating" {...a11yProps(8)} />
        <Tab label="Slider" {...a11yProps(9)} />
        <Tab label="Snackbar" {...a11yProps(10)} />
        <Tab label="Speed Dial" {...a11yProps(11)} />
        <Tab label="Stepper" {...a11yProps(12)} />
        <Tab label="Switch" {...a11yProps(13)} />
        <Tab label="Transfer List" {...a11yProps(14)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
        <Introduction/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Accordian/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Appbar/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <AutoComplete/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <BadgeComponent/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <BreadCrumbs/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Drawer/>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Floatingbutton/>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Ratings/>
      </TabPanel>
      <TabPanel value={value} index={9}>
        <Sliders/>
      </TabPanel>
      <TabPanel value={value} index={10}>
      <Snackbarr/>
      </TabPanel>
      <TabPanel value={value} index={11}>
        <SpeedDials/>
      </TabPanel>
      <TabPanel value={value} index={12}>
        <Stepperr/>
      </TabPanel>
      <TabPanel value={value} index={13}>
        <Switchs/>
      </TabPanel>
      <TabPanel value={value} index={14}>
        <TransferList/>
      </TabPanel>
    </Box>
  );
}
