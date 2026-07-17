import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type Message = {
  sender: 'user' | 'ai';
  text: string;
};

const getAIResponse = (message: string): string => {
  const lowerCaseMessage = message.toLowerCase();
  if (lowerCaseMessage.includes('irrigation')) {
    return 'For efficient irrigation, consider using drip irrigation to minimize water evaporation. Water your crops early in the morning or late in the evening. Would you like to know about irrigation scheduling for a specific crop?';
  } else if (lowerCaseMessage.includes('pest')) {
    return 'To manage pests, you can use neem oil, which is a natural pesticide. Also, practicing crop rotation can help disrupt pest cycles. Can you describe the pest you are seeing?';
  } else if (lowerCaseMessage.includes('crop recommendation')) {
    return 'I can help with that. Please go to the Crop Recommendation tool to get suggestions based on your location and season.';
  } else {
    return "I'm sorry, I can only answer questions about irrigation, pests, and crop recommendations right now. How can I help you with those topics?";
  }
};

export default function AiAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: 'Welcome to the Emetem AI Assistant. Ask me about irrigation, pests, or crop recommendations.' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = { sender: 'user', text: inputValue };
    const aiResponse: Message = { sender: 'ai', text: getAIResponse(inputValue) };

    setMessages([...messages, userMessage, aiResponse]);
    setInputValue('');
  };

  return (
    <div className="container mx-auto p-4 flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-primary">AI Assistant</CardTitle>
        </CardHeader>
        <CardContent className="h-96 overflow-y-auto flex flex-col gap-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-end gap-2 ${
                msg.sender === 'ai' ? 'justify-start' : 'justify-end'
              }`}>
              <div
                className={`rounded-lg px-4 py-2 max-w-sm ${
                  msg.sender === 'ai'
                    ? 'bg-muted text-muted-foreground'
                    : 'bg-primary text-primary-foreground'
                }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <div className="flex w-full space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
            />
            <Button onClick={handleSendMessage}>Send</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}