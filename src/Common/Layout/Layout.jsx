import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import TuneIcon from "@mui/icons-material/Tune";
import InfoIcon from "@mui/icons-material/Info";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import RoofingIcon from "@mui/icons-material/Roofing";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft(props) {
  const { children } = props;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(open ? false : true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{ zIndex: 1000 }} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Box mt={9}>
        <Toolbar>
          <Drawer
            sx={{
              zIndex: 999,
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader />
            <Divider />
            <List>
              {[
                { label: "Home", path: "/", icon: <RoofingIcon /> },
                { label: "About", path: "/about", icon: <InfoIcon /> },
                { label: "Service", path: "/service", icon: <TuneIcon /> },
                {
                  label: "Contact Us",
                  path: "/contact",
                  icon: <PhoneInTalkIcon />,
                },
              ].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <Link
                      to={text.path}
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <ListItemIcon>{text.icon}</ListItemIcon>
                      <ListItemText primary={text.label} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </Box>

      <Main open={open}>
        <DrawerHeader />
        <div>{children}</div>
      </Main>
    </Box>
  );
}
