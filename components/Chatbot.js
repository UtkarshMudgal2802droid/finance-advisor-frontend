import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Modal,
  Fade,
  Fab,
  Divider,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { useState } from "react";
import axios from "axios";

export default function Chatbot() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);

  const askBot = async () => {
    if (!question.trim()) return;
    const newMessages = [...messages, { sender: "user", text: question }];
    setMessages(newMessages);
    setQuestion("");

    try {
      const res = await axios.post("http://localhost:8000/chat", {
        question,
        history: newMessages.map((m) => `${m.sender === 'user' ? 'You' : 'Bot'}: ${m.text}`).join("\n"),
      });
      setMessages([...newMessages, { sender: "bot", text: res.data.reply }]);
    } catch {
      setMessages([...newMessages, { sender: "bot", text: "❌ Server error" }]);
    }
  };

  return (
    <>
      <Fab
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 1500 }}
      >
        <ChatIcon />
      </Fab>

      <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition>
        <Fade in={open}>
          <Box
            sx={{
              position: "fixed",
              bottom: 80,
              right: 20,
              width: 360,
              maxHeight: 500,
              bgcolor: "background.paper",
              borderRadius: 2,
              p: 2,
              boxShadow: 6,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" gutterBottom>
              💬 Chat with FinanceBot
            </Typography>
            <Divider />
            <Box
              sx={{
                flexGrow: 1,
                overflowY: "auto",
                mt: 1,
                mb: 2,
                maxHeight: 300,
              }}
            >
              {messages.length === 0 ? (
                <Typography color="text.secondary" textAlign="center" mt={2}>
                  Start asking your finance questions!
                </Typography>
              ) : (
                messages.map((msg, idx) => (
                  <Box
                    key={idx}
                    display="flex"
                    justifyContent={msg.sender === "user" ? "flex-end" : "flex-start"}
                    mb={1}
                  >
                    <Paper
                      sx={{
                        p: 1,
                        maxWidth: "80%",
                        bgcolor: msg.sender === "user" ? "#e3f2fd" : "#f0f0f0",
                      }}
                    >
                      <Typography variant="body2">{msg.text}</Typography>
                    </Paper>
                  </Box>
                ))
              )}
            </Box>

            <TextField
              size="small"
              placeholder="Type your question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && askBot()}
              fullWidth
            />
            <Button variant="contained" onClick={askBot} fullWidth sx={{ mt: 1 }}>
              Ask
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
