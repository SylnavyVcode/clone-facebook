import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); // Connexion au serveur

export default function Chat() {
  const [messages, setMessages] = useState<{ sender: string; message: string }[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("message", { sender: "User", message });
    setMessage("");
  };

  return (
    <div>
      <h2>Chat en temps réel</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg.sender}: {msg.message}</li>
        ))}
      </ul>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Envoyer</button>
    </div>
  );
}
