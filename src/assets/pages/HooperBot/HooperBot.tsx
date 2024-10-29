import React, { useState, useEffect, useRef } from 'react';
import './hooperbot.scss';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const HooperQuestions: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  
  // Reference for the chat window div
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Fetch initial message from the backend on component mount
  useEffect(() => {
    const fetchInitialMessage = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:5001/api/chat', { message: '' });
        const aiMessage: Message = { role: 'assistant', content: response.data.reply };
        setMessages([aiMessage]);
      } catch (error) {
        console.error('Error fetching initial AI message:', error);
      }
    };

    fetchInitialMessage();
  }, []);

  // Scroll to the bottom of the chat window whenever a new message is added
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    // Add the user's message to the local state
    const userMessage: Message = { role: 'user', content: userInput };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setUserInput('');

    try {
      // Send user message to the backend API
      const response = await axios.post('http://127.0.0.1:5001/api/chat', {
        message: userMessage.content,
      });

      // Add the assistant's response to the conversation
      const aiMessage: Message = { role: 'assistant', content: response.data.reply };
      setMessages([...updatedMessages, aiMessage]);
    } catch (error) {
      console.error('Error communicating with AI:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h1>HooperBot</h1>
      <p>Your personal basketball coach to help you improve your skills and reach your goals.</p>
      <div 
        className="chat-window" 
        ref={chatWindowRef} // Attach the ref here
        style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', maxHeight: '300px', overflowY: 'auto', marginBottom: '10px', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      >
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`} style={{ marginBottom: '8px', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
            <strong>{msg.role === 'user' ? 'You' : 'Coach'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value)}
        placeholder="Ask a question or share a goal..."
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSend()}
        style={{ padding: '10px', width: '100%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#333', color: '#fff' }}
      />
      <button onClick={handleSend} style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>
        Send
      </button>
    </div>
  );
};

export default HooperQuestions;
