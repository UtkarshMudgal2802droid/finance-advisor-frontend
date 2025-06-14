// pages/credit-score.js
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Divider,
} from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CreditScore() {
  const creditScore = 752; // Mock score
  const scoreStatus =
    creditScore >= 790
      ? "Excellent"
      : creditScore >= 740
      ? "Good"
      : creditScore >= 690
      ? "Fair"
      : "Poor";

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f4f7fe" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, px: 3, pt: 10, pb: 4 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              📊 Credit Score Overview
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Monitor your credit health to make informed financial decisions.
            </Typography>

            <Card sx={{ mt: 3, borderRadius: 3, boxShadow: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Your Credit Score
                </Typography>
                <Typography variant="h3" color="primary" gutterBottom>
                  {creditScore}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Status: <strong>{scoreStatus}</strong>
                </Typography>

                <Box mt={2}>
                  <LinearProgress
                    variant="determinate"
                    value={(creditScore / 900) * 100}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: "#e0e0e0",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#4caf50",
                      },
                    }}
                  />
                </Box>
              </CardContent>
            </Card>

            <Grid container spacing={3} mt={3}>
              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    💳 Credit Card Usage
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Keep your credit utilization below 30% to maintain a healthy score.
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    🧾 On-Time Payments
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    96% of your payments were on time. Keep it above 95% to improve score.
                  </Typography>
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
