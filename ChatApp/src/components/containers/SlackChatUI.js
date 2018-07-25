
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative, { Platform } from 'react-native';
import PropTypes from 'prop-types';

import { View, Title, Screen } from '@shoutem/ui';
import { GiftedChat } from 'react-native-gifted-chat';

import { sendMessage } from '../../actions';
import SlackMessage from '../presentationals/SlackMessage';
import DeviceInfo from 'react-native-device-info';

const mapStateToProps = (state) => ({
    user: state.user,
    messages: state.chatroom.messages,
    isFetching: state.chatroom.meta.isFetching
});

class SlackChatUI extends Component {
    onSend(messages = []) {
        console.log('message length: ' + messages.length);
        messages.forEach(msg => {
            this.props.dispatch(
                sendMessage(msg, this.props.user)
            );
        });
    }

    renderMessage(props) {
        return (
          <SlackMessage {...props} />
        );
    }

    render() {
        return (
          <GiftedChat
            messages={this.props.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: DeviceInfo.getUniqueID(),
            }}
            renderMessage={this.renderMessage}
            renderAvatarOnTop={true}
          />
        );
    }
}

export default connect(mapStateToProps)(SlackChatUI);
