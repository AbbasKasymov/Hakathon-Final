import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Avatar,
  Badge,
  Button,
  Container,
  ListItem,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import { clientContext } from "../contexts/ClientContext";
import { Logout, ShoppingCart } from "@mui/icons-material";
import PhoneIphoneSharpIcon from "@mui/icons-material/PhoneIphoneSharp";
import DraftsIcon from "@mui/icons-material/Drafts";
import FiveGIcon from "@mui/icons-material/FiveG";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import WatchIcon from "@mui/icons-material/Watch";
import CastIcon from "@mui/icons-material/Cast";
import HeadsetIcon from "@mui/icons-material/Headset";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const data = React.useContext(clientContext);
  const { cartCount, authWithGoogle, user, logout } = data;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const drawerWidth = 240;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          // sx={{ zIndex: 50 }}
          open={open}
          style={{ height: "70px" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                <Link to="/">
                  <img
                    width={83}
                    src="https://assets.flagfamily.com/web/images/articles/color-t-mobile-logo-1629114229.png?xezmKhSwED7lKCYlMSVqsTlw6ruCWaZQ"
                    alt=""
                  />
                </Link>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <Link to="/admin-panel">
                    {" "}
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Admin Panel</Typography>
                    </MenuItem>
                  </Link>
                  <Link to="/admin-panel/add">
                    {" "}
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Add Products</Typography>
                    </MenuItem>
                  </Link>
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                <Link to="/">
                  <img
                    width={50}
                    src="https://assets.flagfamily.com/web/images/articles/color-t-mobile-logo-1629114229.png?xezmKhSwED7lKCYlMSVqsTlw6ruCWaZQ"
                    alt=""
                  />
                </Link>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/admin-panel">
                  {" "}
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Admin Panel
                  </Button>
                </Link>
                <Link to="/admin-panel/add">
                  {" "}
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Add Product
                  </Button>
                </Link>
              </Box>

              <Box
                style={{ display: "flex", alignItems: "center" }}
                sx={{ flexGrow: 0 }}
              >
                <Link to="/cart" style={{ marginRight: 10 }}>
                  <Badge badgeContent={cartCount} color="error">
                    <ShoppingCart />
                  </Badge>
                </Link>
                {user ? (
                  <>
                    <Avatar
                      style={{ marginRight: 10 }}
                      src={user.photoURL}
                      alt={user.displayName}
                    />
                    <span style={{ marginRight: 10 }}>{user.email}</span>

                    <Button onClick={logout}>
                      <Logout color="error" />
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="contained"
                    color="error"
                    onClick={authWithGoogle}
                  >
                    Sign In
                  </Button>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <Link to="/category/cellphones">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PhoneIphoneSharpIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cell phones" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/category/fiveG">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FiveGIcon />
                  </ListItemIcon>
                  <ListItemText primary="5G phones" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/category/tablets">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TabletMacIcon />
                  </ListItemIcon>
                  <ListItemText primary="Tablets" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/category/smartwatches">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <WatchIcon />
                  </ListItemIcon>
                  <ListItemText primary="Smartwatches" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/category/hotspots">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CastIcon />
                  </ListItemIcon>
                  <ListItemText primary="Hotspot & more" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/category/accessories">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HeadsetIcon />
                  </ListItemIcon>
                  <ListItemText primary="Asseccories" />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
          <Toolbar />
          <section className="under-navbar">
            <Container>
              <List component={Stack} direction="row">
                <Link to="/category/cellphones">
                  <ListItem disablePadding>
                    <ListItemButton component={Stack} direction="column">
                      <ListItemIcon style={{ marginLeft: "20px" }}>
                        <PhoneIphoneSharpIcon />
                      </ListItemIcon>
                      <ListItemText primary="Cell phones" />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to="/category/fiveG">
                  <ListItem disablePadding>
                    <ListItemButton component={Stack} direction="column">
                      <ListItemIcon style={{ marginLeft: "20px" }}>
                        <FiveGIcon />
                      </ListItemIcon>
                      <ListItemText primary="5G phones" />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to="/category/tablets">
                  <ListItem disablePadding>
                    <ListItemButton component={Stack} direction="column">
                      <ListItemIcon style={{ marginLeft: "30px" }}>
                        <TabletMacIcon />
                      </ListItemIcon>
                      <ListItemText primary="Tablets" />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to="/category/smartwatches">
                  <ListItem disablePadding>
                    <ListItemButton component={Stack} direction="column">
                      <ListItemIcon style={{ marginLeft: "20px" }}>
                        <WatchIcon />
                      </ListItemIcon>
                      <ListItemText primary="Smartwatches" />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to="/category/hotspots">
                  <ListItem disablePadding>
                    <ListItemButton component={Stack} direction="column">
                      <ListItemIcon style={{ marginLeft: "20px" }}>
                        <CastIcon />
                      </ListItemIcon>
                      <ListItemText primary="Hotspot & more" />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to="/category/accessories">
                  <ListItem disablePadding>
                    <ListItemButton component={Stack} direction="column">
                      <ListItemIcon style={{ marginLeft: "20px" }}>
                        <HeadsetIcon />
                      </ListItemIcon>
                      <ListItemText primary="Asseccories" />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </List>
            </Container>
          </section>
        </Box>
      </Box>
    </React.Fragment>
  );
}
