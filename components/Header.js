// components/Header.js
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
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import Person from "@mui/icons-material/Person";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useState } from "react";

export default function Header() {
  const router = useRouter();

  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const [anchorElNotif, setAnchorElNotif] = useState(null);

  // Handle profile button click
  const handleProfileClick = (event) => {
    if (anchorElProfile) {
      setAnchorElProfile(null);
    } else {
      setAnchorElNotif(null); // Close other
      setAnchorElProfile(event.currentTarget);
    }
  };

  // Handle notification button click
  const handleNotifClick = (event) => {
    if (anchorElNotif) {
      setAnchorElNotif(null);
    } else {
      setAnchorElProfile(null); // Close other
      setAnchorElNotif(event.currentTarget);
    }
  };

  const handleCloseMenus = () => {
    setAnchorElProfile(null);
    setAnchorElNotif(null);
  };

  const navigateToProfile = () => {
    handleCloseMenus();
    router.push("/profile");
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: 1301, bgcolor: "primary.main" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link href="/" passHref legacyBehavior>
          <a style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6">💼 WealthVista</Typography>
          </a>
        </Link>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
          <MenuItem onClick={navigateToProfile}>
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
      </Toolbar>
    </AppBar>
  );
}
