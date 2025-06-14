// components/Footer.js
import { Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 2,
        px: 1,
        bgcolor: "#f5f5f5",
        mt: "auto",
        borderTop: "1px solid #ddd",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2025 Utkarsh Mudgal. All rights reserved.
      </Typography>
      <Box mt={1}>
        <IconButton
          href="https://linkedin.com/in/utkarsh-mudgal"
          target="_blank"
          color="primary"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://github.com/UtkarshMudgal2802droid"
          target="_blank"
          color="inherit"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href=""
          target="_blank"
          color="primary"
        >
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
