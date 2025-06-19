import React from 'react';

const avatar = ({ name, size, bgColor, textColor }) => {
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
        marginRight: '8px' // Add margin right to space out from text
    };

    return (
        <div style={avatarStyle}>
            {name ? name.charAt(0) : ''}
        </div>
    );
};

export default avatar;
