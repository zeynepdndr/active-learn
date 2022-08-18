import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Analytics,
  Class,
  Dashboard as DashboardIcon,
  HomeWork,
  Logout,
  PeopleOutlineSharp,
  Source,
} from "@mui/icons-material";
import Dashboard from "../../../pages/Dashboard/Dashboard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function MainNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        height: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          backgroundColor: "#357cd9",
          "& .Mui-selected": {
            color: "#fcb8d2",
            fontWeight: 400,
            borderRadius: "0.75rem",
          },
          variant: "fullWidth",
        }}
      >
        <Tab
          label="Dashboard"
          {...a11yProps(0)}
          icon={<DashboardIcon />}
          sx={{ color: "#fff" }}
        />
        <Tab
          label="Courses"
          {...a11yProps(1)}
          icon={<Class />}
          sx={{ color: "#fff" }}
        />
        <Tab
          label="Resources"
          {...a11yProps(2)}
          icon={<Source />}
          sx={{ color: "#fff" }}
        />
        <Tab
          label="Homework"
          {...a11yProps(3)}
          icon={<HomeWork />}
          sx={{ color: "#fff" }}
        />
        <Tab
          label="Analysis"
          {...a11yProps(4)}
          icon={<Analytics />}
          sx={{ color: "#fff" }}
        />
        <Tab
          label="Teachers"
          {...a11yProps(5)}
          icon={<PeopleOutlineSharp />}
          sx={{ color: "#fff" }}
        />
        <Tab
          label="Logout"
          {...a11yProps(6)}
          icon={<Logout />}
          sx={{ color: "#fff" }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Dashboard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
