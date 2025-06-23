import Link from "next/link";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Tooltip,
  Divider,
  ListItemIcon,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import Person from "@mui/icons-material/Person";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import { useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:899px)");

  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const [anchorElNotif, setAnchorElNotif] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleProfileClick = (event) => {
    setAnchorElNotif(null);
    setAnchorElProfile((prev) => (prev ? null : event.currentTarget));
  };

  const handleNotifClick = (event) => {
    setAnchorElProfile(null);
    setAnchorElNotif((prev) => (prev ? null : event.currentTarget));
  };

  const handleCloseMenus = () => {
    setAnchorElProfile(null);
    setAnchorElNotif(null);
  };

  const navigateTo = (path) => {
    handleCloseMenus();
    router.push(path);
  };

  const handleDrawerItemClick = (action) => {
    setDrawerOpen(false);
    if (action === "notifications") {
      // handle later
    } else if (action === "profile") {
      navigateTo("/profile");
    } else if (action === "logout") {
      alert("Logged out!");
    }
  };

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "auto";
  }, [drawerOpen]);

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: 1301, bgcolor: "primary.main" }}>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          {/* Left side */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isSmallScreen ? null : (
  <Link href="/" passHref legacyBehavior>
    <a style={{ textDecoration: "none", color: "white" }}>
      <Typography variant="h6" noWrap>
        💼 WealthVista
      </Typography>
    </a>
  </Link>
)}

          </Box>

          {/* Centered logo on small screens */}
          {isSmallScreen && (
            <Box sx={{ position: "absolute", left: 0, right: 0, textAlign: "center" }}>
              <Link href="/" passHref legacyBehavior>
                <a style={{ textDecoration: "none", color: "white" }}>
                  <Typography variant="h6" noWrap>
                    💼 WealthVista
                  </Typography>
                </a>
              </Link>
            </Box>
          )}

          {/* Right-side icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Tooltip title="Notifications">
              <IconButton color="inherit" onClick={handleNotifClick}>
                <NotificationsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Account">
              <IconButton color="inherit" onClick={handleProfileClick}>
                <AccountCircle />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 240 } }}
      >
        <Box role="presentation" onKeyDown={() => setDrawerOpen(false)}>
          <Box sx={{ p: 2 }}>
            Menu
          </Box>
          <Divider />
          <List>
            <ListItem button onClick={() => handleDrawerItemClick("notifications")}>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItem>
            <ListItem button onClick={() => handleDrawerItemClick("profile")}>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={() => handleDrawerItemClick("logout")}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Notifications Menu */}
      <Menu
        anchorEl={anchorElNotif}
        open={Boolean(anchorElNotif)}
        onClose={handleCloseMenus}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ mt: 1 }}
        PaperProps={{ elevation: 4, sx: { minWidth: 250, borderRadius: 2, p: 1 } }}
      >
        <MenuItem disabled>
          <ListItemIcon>
            <NotificationsActiveIcon fontSize="small" />
          </ListItemIcon>
          No new notifications
        </MenuItem>
      </Menu>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorElProfile}
        open={Boolean(anchorElProfile)}
        onClose={handleCloseMenus}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ mt: 1 }}
        PaperProps={{ elevation: 4, sx: { minWidth: 180, borderRadius: 2, p: 1 } }}
      >
        <MenuItem onClick={() => navigateTo("/profile")}>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          View Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => alert("Logged out!")}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
