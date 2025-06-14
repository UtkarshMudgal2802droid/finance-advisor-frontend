import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Settings() {
  // ✅ Preferences state
  const [darkMode, setDarkMode] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [biometricLogin, setBiometricLogin] = useState(false);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", background: "#f4f7fe" }}>
      <Sidebar />
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, px: 3, pt: 10, pb: 4 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              ⚙️ Settings
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Customize your preferences and privacy options.
            </Typography>

            <Grid container spacing={3} mt={1}>
              <Grid item xs={12}>
                <Card sx={{ p: 3, borderRadius: 3, boxShadow: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    App Preferences
                  </Typography>

                  <FormControlLabel
                    control={
                      <Switch
                        color="primary"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                      />
                    }
                    label="Enable Dark Mode"
                  />

                  <FormControlLabel
                    control={
                      <Switch
                        color="primary"
                        checked={emailNotifications}
                        onChange={() =>
                          setEmailNotifications(!emailNotifications)
                        }
                      />
                    }
                    label="Receive Email Notifications"
                  />

                  <FormControlLabel
                    control={
                      <Switch
                        color="primary"
                        checked={biometricLogin}
                        onChange={() =>
                          setBiometricLogin(!biometricLogin)
                        }
                      />
                    }
                    label="Allow Biometric Login"
                  />
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
