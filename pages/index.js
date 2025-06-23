import {
  Box,
  Typography,
  Grid,
  Card,
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const overviewCards = [
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
  ];

  const marketUpdates = [
    "📉 Aviation crash impacts airline stocks temporarily.",
    "🏦 RBI maintains repo rate; stable outlook.",
    "📊 Sensex gains 300 pts led by IT & Pharma.",
    "💼 Govt. to announce capex plan for Q3 growth.",
  ];

  const mutualFunds = [
    "Axis Bluechip Fund – 24.3% (3Y)",
    "Mirae Asset Large Cap – 22.1% (3Y)",
    "HDFC Flexi Cap Fund – 20.7% (3Y)",
  ];

  const topStocks = [
    "Tata Motors – ₹932 ▲3.2%",
    "Infosys – ₹1,426 ▲2.8%",
    "ICICI Bank – ₹1,065 ▲2.5%",
    "Wipro – ₹495 ▼1.4%",
  ];

  const topETFs = [
    "Nippon India ETF Nifty BeES – NAV ₹231",
    "ICICI Prudential Nifty Next 50 – NAV ₹499",
    "Motilal Oswal Nasdaq 100 ETF – NAV ₹1,150",
  ];

  const futures = [
    "Bank Nifty Futures – 49,800 ▲1.4%",
    "Nifty 50 Futures – 22,100 ▲0.9%",
    "Reliance Futures – ₹2,920 ▲2.1%",
    "HDFC Futures – ₹1,800 ▼0.7%",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#f4f7fe",
        width: "100vw",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Sidebar />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <Header />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            px: 2,
            pt: 10,
            pb: 4,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            overflowX: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: {
                xs: "100%",
                sm: "100%",
                md: "95%",
                lg: "100%",
                xl: "1140px",
              },
              mx: "auto",
            }}
          >
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
              sx={{ mb: 3, fontSize: { xs: "0.95rem", sm: "1rem" } }}
            >
              Track your financial performance and get personalized advice.
            </Typography>

            {/* Overview Cards */}
            <Grid container spacing={3} sx={{ boxSizing: "border-box" }}>
              {overviewCards.map((card, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Card
                    sx={{
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderRadius: 3,
                      boxShadow: 3,
                      bgcolor: "#fff",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        {card.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: card.color }}
                      >
                        {card.value}
                      </Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: card.color }}>{card.icon}</Avatar>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Market Updates */}
            <Grid container spacing={3} mt={1} sx={{ boxSizing: "border-box" }}>
              <Grid item xs={12}>
                <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    📢 Market Updates
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      overflow: "hidden",
                      ".slick-slide": {
                        px: 1,
                        boxSizing: "border-box",
                      },
                    }}
                  >
                    <Slider
                      dots
                      infinite
                      speed={500}
                      autoplay
                      autoplaySpeed={4000}
                      arrows={false}
                      responsive={[
                        {
                          breakpoint: 768,
                          settings: { dots: true },
                        },
                      ]}
                    >
                      {marketUpdates.map((news, i) => (
                        <Box key={i} sx={{ py: 1 }}>
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

            {/* Data Sections */}
            <Grid container spacing={3} mt={1} sx={{ boxSizing: "border-box" }}>
              {[
                { title: "🏆 Top Mutual Funds", data: mutualFunds },
                { title: "📈 Top Performing Stocks", data: topStocks, isStock: true },
                { title: "📊 Top ETFs", data: topETFs },
                { title: "🔮 Futures & Derivatives", data: futures, isStock: true },
              ].map((section, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      {section.title}
                    </Typography>
                    {section.data.map((item, i) => {
                      if (!section.isStock) {
                        return (
                          <Typography key={i} variant="body2" sx={{ mt: 0.8 }}>
                            • {item}
                          </Typography>
                        );
                      }

                      const match = item.match(/(▲|▼)([\d.]+)%/);
                      const isPositive = match?.[1] === "▲";
                      const percentage = match?.[0];
                      const parts = item.split(percentage);

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
              ))}
            </Grid>
          </Box>
        </Box>

        <Footer />
      </Box>

      <Chatbot />
    </Box>
  );
}
