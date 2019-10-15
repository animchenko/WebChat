import React from 'react';
import PropTypes from 'prop-types';

//add date soon
import distanceInWordsToNow from 'date-fns/format';
import uaLocale from 'date-fns/locale/uk';

const Message = ({ avatar, user, text, date, isMe }) => (
    <div className={'message', {'message--isme': isMe} }>
        <div className='message_avatar'>
            <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className='message_content'>
            <div className='message_bubble'>
                <p className='message_text'>{text}</p>
            </div>
        </div>
    </div>
);

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar:PropTypes.string,
    text:PropTypes.string,
    date:PropTypes.string,
    user:PropTypes.object,
}

export default Message;