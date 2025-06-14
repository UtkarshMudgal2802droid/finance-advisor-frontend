import {
  Box,
  Container,
  Typography,
  Avatar,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Profile() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f4f7fe" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Header />

        <Box component="main" sx={{ px: 3, pt: 10, pb: 6 }}>
          <Container maxWidth="md">
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              👤 Profile Overview
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={4}>
              Your personal and financial information at a glance.
            </Typography>

            <Card sx={{ borderRadius: 3, boxShadow: 4, p: 3 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                  <Avatar
                    alt="Utkarsh Mudgal"
                    src="/avatar.jpg"
                    sx={{ width: 120, height: 120, mx: "auto" }}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <CardContent>
                    <Typography variant="h6">Utkarsh Mudgal</Typography>
                    <Typography color="text.secondary">Individual Investor</Typography>
                    <Box mt={2}>
                      <Typography>Email: utkarsh.mudgal123si@gmail.com</Typography>
                      <Typography>Phone: +91-7420941843</Typography>
                      <Typography>Location: Nagpur, India</Typography>
                    </Box>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>

            <Box mt={4}>
              <Card sx={{ borderRadius: 3, boxShadow: 3, p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  🧾 Financial Information
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" color="text.secondary">PAN Number</Typography>
                    <Typography>*****1234F</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" color="text.secondary">KYC Status</Typography>
                    <Typography color="green">✔️ Verified</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" color="text.secondary">Nominee Name</Typography>
                    <Typography>Ajay</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" color="text.secondary">Account Type</Typography>
                    <Typography>Individual</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" color="text.secondary">Bank Linked</Typography>
                    <Typography>Axis Bank - ****7321</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" color="text.secondary">UPI ID</Typography>
                    <Typography>utkarsh@upi</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Container>
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}
