import { Box, Typography, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 2,
        px: 2,
        bgcolor: "#f5f5f5",
        mt: "auto",
        borderTop: "1px solid #ddd",
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
      >
        © 2025 Utkarsh Mudgal. All rights reserved.
      </Typography>

      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={1}
        alignItems="center"
        justifyContent="center"
        mt={1}
      >
        <IconButton
          href="https://linkedin.com/in/utkarsh-mudgal"
          target="_blank"
          color="primary"
          size="small"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://github.com/UtkarshMudgal2802droid"
          target="_blank"
          color="inherit"
          size="small"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="#"
          target="_blank"
          color="primary"
          size="small"
        >
          <TwitterIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
