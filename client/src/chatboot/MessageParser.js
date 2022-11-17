import React from 'react';

const MessageParser = ({ children, actions }) => {
  var defaultMessage = true;
  const parse = (message) => {
  

    if (message.toLowerCase().includes('hi')) {
      actions.handleHello();
      defaultMessage=false;
    }

    if (message.toLowerCase().includes('help')) {
      actions.handleHelp();
      defaultMessage=false;
    }

    if(
      message.toLowerCase().includes('payment') ||
      message.toLowerCase().includes('to pay ')
    ) {
      actions.handlePago();
      defaultMessage=false;
    }

    if (message.toLowerCase().includes('cart')) {
      actions.handleCart();
      defaultMessage=false;
    }

    if (message.toLowerCase().includes('orders') || 
       message.toLowerCase().includes('order') 
    ) {
      actions.handleProfile();
      defaultMessage=false;
    }


    if(defaultMessage){
      actions.handleDefaultMessage();
    }
 
    
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;