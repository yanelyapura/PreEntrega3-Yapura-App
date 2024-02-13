import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '../../global/colors';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Seleccione una categoria</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: COLORS.primary,
    },
    title: {
        textAlign: 'center',
        color: COLORS.text,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Header;
