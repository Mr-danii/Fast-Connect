// import React from 'react';
// import { Avatar, useChatContext } from 'stream-chat-react';

// const TeamChannelPreview = ({ setActiveChannel, setIsCreating, setIsEditing, setToggleContainer, channel, type }) => {
//     const { channel: activeChannel, client } = useChatContext();

//     const ChannelPreview = () => (
//         <p className="channel-preview__item">
//             # {channel?.data?.name || channel?.data?.id}
//         </p>
//     );


//     const DirectPreview = () => {
//         const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID);
    
//         // console.log(members[0]);

//         return (
//             <div className="channel-preview__item single">
//                 <Avatar 
//                     image={members[0]?.user?.image}
//                     name={members[0]?.user?.fullName || members[0]?.user?.id}
//                     size={24}
//                 />
//                 <p>{members[0]?.user?.fullName || members[0]?.user?.id}</p>
//             </div>
//         )
//     }

//     return (
//         <div className={
//             channel?.id === activeChannel?.id
//                 ? 'channel-preview__wrapper__selected'
//                 : 'channel-preview__wrapper'
//         }
//         onClick={() => {
//             setIsCreating(false);
//             setIsEditing(false);
//             setActiveChannel(channel);
//             if(setToggleContainer) {
//                 setToggleContainer((prevState) => !prevState)
//             }
//         }}
//         >
//             {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
//         </div>
//     );
// }

// export default TeamChannelPreview



import React from 'react';
import { useChatContext } from 'stream-chat-react';

const CustomAvatar = ({ name, size, bgColor, textColor }) => {
    const initials = name ? name.charAt(0).toUpperCase() : '?';

    const avatarStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: bgColor || '#005fff', // default background color
        color: textColor || '#ffffff', // default text color
        fontSize: size / 2,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginRight: '8px',
    };

    return (
        <div style={avatarStyle}>
            {initials}
        </div>
    );
};

const TeamChannelPreview = ({ setActiveChannel, setIsCreating, setIsEditing, setToggleContainer, channel, type }) => {
    const { channel: activeChannel, client } = useChatContext();

    const ChannelPreview = () => (
        <p className="channel-preview__item">
            # {channel?.data?.name || channel?.data?.id}
        </p>
    );

    const DirectPreview = () => {
        const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID);

        return (
            <div className="channel-preview__item single">
                <CustomAvatar 
                    name={members[0]?.user?.fullName || members[0]?.user?.id}
                    size={24}
                    bgColor="rgb(167 56 65)" // custom background color
                    textColor="#ffffff" // custom text color
                />
                <p>{members[0]?.user?.fullName || members[0]?.user?.id}</p>
            </div>
        )
    }

    return (
        <div className={
            channel?.id === activeChannel?.id
                ? 'channel-preview__wrapper__selected'
                : 'channel-preview__wrapper'
        }
        onClick={() => {
            setIsCreating(false);
            setIsEditing(false);
            setActiveChannel(channel);
            if(setToggleContainer) {
                setToggleContainer((prevState) => !prevState)
            }
        }}
        >
            {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
        </div>
    );
}

export default TeamChannelPreview;
