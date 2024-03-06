import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const MessageContainer = styled.div`
  margin-bottom: 10px;
`;

const Message = styled.div`
  font-size: 16px;
`;

const Input = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
`;

const Messaging: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const updatedMessages: string[] = [...messages, newMessage];
      setMessages(updatedMessages);
      setNewMessage('');
    }
  };

  return (
    <Container>
      <Title>Messaging</Title>
      <div>
        {messages.map((message, index) => (
          <MessageContainer key={index}>
            <Message>{message}</Message>
          </MessageContainer>
        ))}
      </div>
      <div>
        <Input type="text" value={newMessage} onChange={handleInputChange} />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </Container>
  );
};

export default Messaging;