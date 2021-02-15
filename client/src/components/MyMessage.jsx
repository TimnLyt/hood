const MyMessage = ({message}) => {
    if (message?.attachments?.length > 0){
        return (
            <img 
            src={message.attachments[0].filename} 
            alt="message-attachment" 
            className="message-image" 
            style = {{float:'right'}}
            />
        )
    }
    return (
        <div>

        </div>
    )
}

export default MyMessage;