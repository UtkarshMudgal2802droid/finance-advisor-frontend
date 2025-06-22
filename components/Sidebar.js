import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Toolbar,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentIcon from "@mui/icons-material/Payment";
import { useState } from "react";

const drawerWidth = 240;

const menuItems = [
  { text: "Dashboard", href: "/", icon: <DashboardIcon /> },
  { text: "Investments", href: "/investments", icon: <BarChartIcon /> },
  { text: "Reports", href: "/reports", icon: <AssessmentIcon /> },
  { text: "Credit Score", href: "/credit-score", icon: <CreditScoreIcon /> },
  { text: "Settings", href: "/settings", icon: <SettingsIcon /> },
];

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerContent = (
    <>
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", color: "#fff" }}
      >
        Menu
        {isMobile && (
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        )}
      </Toolbar>
      <Box sx={{ overflow: "auto", mt: 2 }}>
        <List>
          {menuItems.map(({ text, href, icon }) => (
            <Link href={href} passHref key={text} legacyBehavior>
              <ListItem
                button
                component="a"
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: "0 20px 20px 0",
                  "&:hover": {
                    backgroundColor: "#3949ab",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "inherit", minWidth: 36 }}>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            onClick={() => setMobileOpen(true)}
            sx={{
              position: "fixed",
              top: 16,
              left: 16,
              zIndex: 1302,
              color: "#1a237e",
              backgroundColor: "#fff",
              boxShadow: 2,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            ModalProps={{ keepMounted: true }}
            sx={{
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                backgroundColor: "#1a237e",
                color: "#fff",
              },
            }}
          >
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#1a237e",
              color: "#fff",
            },
          }}
        >
          <Toolbar />
          {drawerContent}
        </Drawer>
      )}
    </>
  );
}
