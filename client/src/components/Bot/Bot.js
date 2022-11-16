import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../../chatboot/config';
import MessageParser from '../../chatboot/MessageParser';
import ActionProvider from '../../chatboot/ActionProvider';

import estilo from './Bot.module.css'


const Bot = ({setChatBot}) => {

  return (
    <div className={estilo.Chatbot}>
    <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        placeholderText='Escribe tu consulta aquí...'
      />
      <button onClick={()=>setChatBot(false)}>X</button>
    </div>  
  )
}

// onClick={()=>props.setOnOff()} className={estilo.cierre}
export default Bot;