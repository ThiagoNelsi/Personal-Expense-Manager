import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#999',
        marginVertical: 6,
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    description: {
        color: '#555',
    }
});

export default styles;