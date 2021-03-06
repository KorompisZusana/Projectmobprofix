import React from 'react';
import { View, Text, Image } from 'react-native';

const Body = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>          Indonesia           </Text>
            <Image
                source={{ uri: 'https://publicdomainvectors.org/photos/emblem-of-indonesia.png'}}
                style={{ width: 45, height: 45, flex: 1, flexDirection: 'row'}}
            />
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: 'blanchedalmond',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'italic'
    }
}
export default TextBody;