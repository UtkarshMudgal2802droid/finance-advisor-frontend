import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ShowChartIcon from "@mui/icons-material/ShowChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PaidIcon from "@mui/icons-material/Paid";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export default function Reports() {
  const reports = [
    {
      title: "P&L Statement",
      description: "Profit and Loss from all trades.",
      icon: <ShowChartIcon />,
      color: "#1976d2",
    },
    {
      title: "Mutual Fund Performance",
      description: "Track returns and growth of your mutual funds.",
      icon: <TrendingUpIcon />,
      color: "#43a047",
    },
    {
      title: "Stock Returns",
      description: "Analyze gains from stock investments.",
      icon: <PaidIcon />,
      color: "#f57c00",
    },
    {
      title: "SIP Report",
      description: "Overview of your monthly SIPs and returns.",
      icon: <AutorenewIcon />,
      color: "#00acc1",
    },
    {
      title: "FD Summary",
      description: "Details of fixed deposits and interest earned.",
      icon: <AccountBalanceIcon />,
      color: "#8e24aa",
    },
    {
      title: "Tax Summary",
      description: "Capital gains and tax deductions overview.",
      icon: <ReceiptLongIcon />,
      color: "#e53935",
    },
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", background: "#f4f7fe" }}>
      <Sidebar />

      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Header />

        <Box component="main" sx={{ flexGrow: 1, px: 3, pt: 10, pb: 4 }}>
          <Container maxWidth="xl">
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              📈 Reports & Insights
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Dive deeper into your investment performance and financial summary.
            </Typography>

            <Grid container spacing={3} mt={1}>
              {reports.map((report, i) => (
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
                      userSelect: "none",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        {report.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mt: 0.5 }}
                      >
                        {report.description}
                      </Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: report.color }}>{report.icon}</Avatar>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}
