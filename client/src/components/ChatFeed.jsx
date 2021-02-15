import MessageForm from "./MessageForm";
import TheirMessage from "./TheirMessage";
import MyMessage from "./MyMessage";

const ChatFeed =(props) => {
    const {chats, activeChat, userName, messages} = props;

    const chat = chats && chats[activeChat];

    const renderMessage = () => {
        const keys = Object.keys(messages);

        return keys.map ((key, index) =>{
            const message = messages[key];
            const lastMessageKey = index == 0 ? null : key[index -1];
            const isMyMessage = userName == message.sender.username;

            return (
                <div key = {` msg_${index}`} style = {{width: '100%'}}>
                    <div className = "message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message}></MyMessage>
                            : <TheirMessage message ={message} lastMessage = {messages[lastMessageKey]}></TheirMessage>
                        }

                    </div>
                    <div className = "read-receipts" style = {{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px': '68px'}}>
                    </div>
                </div>
            )
        })
    }

    if (!chat) return 'Loading...';

    return (
        <div className="chat-feed">
            <div className ="chat-title">
                {chat ?.title}
            </div>

            <div className = "chat-sub">
                {chat.people.map((person) => `Chat goes here`)}
            </div>
            {renderMessage()}
            <div style = {{height: '100px'}}></div>

            <div className = 'message-form-container'>
                <MessageForm {... props} chatId = {activeChat} />
            </div>
        </div>
    );
}

export default ChatFeed;