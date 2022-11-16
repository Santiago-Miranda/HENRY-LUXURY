
import { createChatBotMessage } from 'react-chatbot-kit';
import WidgetProfile from '../components/Bot/widgets/WidgetProfile';
import WidgetCart from '../components/Bot/widgets/WidgetCart';

const botName = 'Virtual Assistant';

const config = {
  initialMessages: [createChatBotMessage(`Hi, I'm the ${botName}. How can I help you?`)],
  customComponents: {
    // Replaces the default header
   header: () => <div style={{ textAlign: 'center', fontFamily: 'sans-serif' , color: 'white', backgroundColor: '#0B74CB', padding: "5px", borderRadius: "3px" }}>Virtual Assistant</div>
   
  },
  widgets:[
  {
    widgetName: 'Profile',
    widgetFunc: (props) => <WidgetProfile {...props}/>
  },
  {
    widgetName: 'Cart',
    widgetFunc: (props) => <WidgetCart {...props}/>
  }
]
};

export default config;