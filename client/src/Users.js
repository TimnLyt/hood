import React, { Component } from "react";
export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  async componentDidMount() {
    const { users } = await this.props.chatClient.queryUsers({
      id: { $ne: this.props.user.id }
    });
    this.setState({ users });
  }
  startConversation = async (partnerId, partnerName) => {
    const userId = this.props.user.id;
    const userName = this.props.user.name;
    const filter = {
      id: { $in: [userId, partnerId] }
    };
    const channels = await this.props.chatClient.queryChannels(filter);
    if (channels.length > 0) {
      alert("chat with this user is already in your conversation list");
    } else {
      const channel = this.props.chatClient.channel("messaging", userId, {name: `Conversation with ${this.user.name}`});
    }
  }
}