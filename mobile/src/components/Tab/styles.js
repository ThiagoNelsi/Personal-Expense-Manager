import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 5,
    },
    addIconContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#c5e03a',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 33,
    },
    addIcon: {
        color: 'white',
    },
});

export default styles;