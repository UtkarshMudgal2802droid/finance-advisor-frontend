// pages/investments.js
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Toolbar,
  Avatar,
} from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export default function Investments() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", background: "#f4f7fe" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Header />

        <Box component="main" sx={{ flexGrow: 1, px: 3, pt: 10, pb: 4 }}>
          <Container maxWidth="xl">
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              💼 Your Investments
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Track your active investments, past returns, and fund allocations.
            </Typography>

            <Grid container spacing={3} mt={1}>
              {/* Card 1 */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 3,
                    boxShadow: 4,
                    bgcolor: "#fff",
                    transition: "0.3s",
                    cursor: "pointer",
                    userSelect: "none",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Mutual Funds
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" color="primary">
                      ₹ 1,45,000
                    </Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: "#1976d2" }}>
                    <AccountBalanceIcon />
                  </Avatar>
                </Card>
              </Grid>

              {/* Card 2 */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 3,
                    boxShadow: 4,
                    bgcolor: "#fff",
                    transition: "0.3s",
                    cursor: "pointer",
                    userSelect: "none",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      ETFs
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" color="success.main">
                      ₹ 60,000
                    </Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: "#4caf50" }}>
                    <TrendingUpIcon />
                  </Avatar>
                </Card>
              </Grid>
            </Grid>

            <Box mt={4}>
              <Typography variant="subtitle2" color="text.secondary">
                📅 Last Updated: 14 June 2025
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
}
