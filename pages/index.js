import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Slider from "react-slick";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import PaymentIcon from "@mui/icons-material/Payment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", background: "#f4f7fe" }}>
      <Sidebar />

      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Header />

        <Box component="main" sx={{ flexGrow: 1, px: { xs: 2, sm: 3 }, pt: 10, pb: 4 }}>
          <Container maxWidth="lg">
            <Typography
              variant={isMobile ? "h5" : "h4"}
              fontWeight="bold"
              gutterBottom
            >
              Welcome Utkarsh 👋
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              gutterBottom
              sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }}
            >
              Track your financial performance and get personalized advice.
            </Typography>

            <Grid container spacing={3} mt={1}>
              {[
                {
                  title: "Total Investment",
                  value: "₹ 2,45,000",
                  icon: <AccountBalanceWalletIcon fontSize="large" />,
                  color: "#1976d2",
                },
                {
                  title: "SIP (Monthly)",
                  value: "₹ 5,000",
                  icon: <PaymentIcon fontSize="large" />,
                  color: "#00bcd4",
                },
                {
                  title: "Portfolio Growth",
                  value: "+12.6%",
                  icon: <TrendingUpIcon fontSize="large" />,
                  color: "#4caf50",
                },
              ].map((card, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
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
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        {card.title}
                      </Typography>
                      <Typography variant="h5" fontWeight="bold" sx={{ color: card.color }}>
                        {card.value}
                      </Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: card.color }}>{card.icon}</Avatar>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Market Updates */}
            <Grid container spacing={3} mt={1}>
              <Grid item xs={12}>
                <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3, minHeight: 180 }}>
                  <Typography variant="h6" gutterBottom>
                    📢 Market Updates
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Slider
                      dots
                      infinite
                      speed={500}
                      autoplay
                      autoplaySpeed={4000}
                      arrows={false}
                    >
                      {[
                        "📉 Aviation crash impacts airline stocks temporarily.",
                        "🏦 RBI maintains repo rate; stable outlook.",
                        "📊 Sensex gains 300 pts led by IT & Pharma.",
                        "💼 Govt. to announce capex plan for Q3 growth.",
                      ].map((news, i) => (
                        <Box key={i} sx={{ py: 1, minHeight: 60 }}>
                          <Typography variant="body2" color="text.secondary">
                            {news}
                          </Typography>
                        </Box>
                      ))}
                    </Slider>
                  </Box>
                </Card>
              </Grid>
            </Grid>

            {/* Top Opportunities */}
            <Grid container spacing={3} mt={1}>
              {/* Mutual Funds */}
              <Grid item xs={12} sm={6}>
                <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                  <Typography variant="h6" gutterBottom>🏆 Top Mutual Funds</Typography>
                  {[
                    "Axis Bluechip Fund – 24.3% (3Y)",
                    "Mirae Asset Large Cap – 22.1% (3Y)",
                    "HDFC Flexi Cap Fund – 20.7% (3Y)",
                  ].map((fund, i) => (
                    <Typography key={i} variant="body2" sx={{ mt: 0.8 }}>
                      • {fund}
                    </Typography>
                  ))}
                </Card>
              </Grid>

              {/* Stocks */}
              <Grid item xs={12} sm={6}>
                <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                  <Typography variant="h6" gutterBottom>📈 Top Performing Stocks</Typography>
                  {[
                    "Tata Motors – ₹932 ▲3.2%",
                    "Infosys – ₹1,426 ▲2.8%",
                    "ICICI Bank – ₹1,065 ▲2.5%",
                    "Wipro – ₹495 ▼1.4%",
                  ].map((stock, i) => {
                    const match = stock.match(/(▲|▼)([\d.]+)%/);
                    const isPositive = match?.[1] === "▲";
                    const percentage = match?.[0];
                    const parts = stock.split(percentage);

                    return (
                      <Typography key={i} variant="body2" sx={{ mt: 0.8 }}>
                        • {parts[0]}
                        <span style={{ color: isPositive ? "green" : "red" }}>
                          {percentage}
                        </span>
                      </Typography>
                    );
                  })}
                </Card>
              </Grid>

              {/* ETFs */}
              <Grid item xs={12} sm={6}>
                <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                  <Typography variant="h6" gutterBottom>📊 Top ETFs</Typography>
                  {[
                    "Nippon India ETF Nifty BeES – NAV ₹231",
                    "ICICI Prudential Nifty Next 50 – NAV ₹499",
                    "Motilal Oswal Nasdaq 100 ETF – NAV ₹1,150",
                  ].map((etf, i) => (
                    <Typography key={i} variant="body2" sx={{ mt: 0.8 }}>
                      • {etf}
                    </Typography>
                  ))}
                </Card>
              </Grid>

              {/* Futures */}
              <Grid item xs={12} sm={6}>
                <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                  <Typography variant="h6" gutterBottom>🔮 Futures & Derivatives</Typography>
                  {[
                    "Bank Nifty Futures – 49,800 ▲1.4%",
                    "Nifty 50 Futures – 22,100 ▲0.9%",
                    "Reliance Futures – ₹2,920 ▲2.1%",
                    "HDFC Futures – ₹1,800 ▼0.7%",
                  ].map((future, i) => {
                    const match = future.match(/(▲|▼)([\d.]+)%/);
                    const isPositive = match?.[1] === "▲";
                    const percentage = match?.[0];
                    const parts = future.split(percentage);

                    return (
                      <Typography key={i} variant="body2" sx={{ mt: 0.8 }}>
                        • {parts[0]}
                        <span style={{ color: isPositive ? "green" : "red" }}>
                          {percentage}
                        </span>
                      </Typography>
                    );
                  })}
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Footer />
      </Box>

      <Chatbot />
    </Box>
  );
}
