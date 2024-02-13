import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import COLORS from '../../global/colors';

const Card = ({ children, style }) => {
    return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: COLORS.primary, 
        shadowColor: COLORS.secondary,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 10,
        borderColor: COLORS.accent,
        borderWidth: 1,
    },
});

export default Card;
