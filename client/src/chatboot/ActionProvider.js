import React from 'react';
import { useSelector } from "react-redux";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hi!');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


 const handleHelp = () => {
    const botMessage = createChatBotMessage(
      "Hello, if you need help you can ask me:");
    const botMessage1 = createChatBotMessage(
        "How can I see the status of an order?");
    const botMessage2 = createChatBotMessage(
          "How can I see my shopping cart?");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage1, botMessage2],
    }));
  }; 



  const handleProfile = () => {
    let botMessage;
    if(user.email){
     botMessage = createChatBotMessage(
      "You can see your orders from your user profile. If you want you can access using this button:",
      {
        widget: 'Profile',
      }
    );
    } else {
      botMessage = createChatBotMessage(
        "To see your orders you must be logged in and then navigate to your profile."
      );
    }

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  const handleCart = () => {
     const botMessage = createChatBotMessage(
      "You can access the shopping cart from here:",
      {
        widget: 'Cart',
      }
    );
   
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };








  const handlePago = () => {

    var pagos = [
      "You can pay for your purchase using Paypal",
      "You can use any means of payment enabled by Paypal"
    ]
    var randomPago = pagos[Math.floor(Math.random() * pagos.length)];
    const botMessage = createChatBotMessage(randomPago);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDefaultMessage = () => {
    const botMessage = createChatBotMessage('Please contact the support center to resolve your query.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };



  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handlePago,
            handleDefaultMessage,
            handleProfile,
            handleHelp,
            handleCart,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;