import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import data from '../data.json';
import COLORS from '../../global/colors';

const CategoryDetails = ({ route }) => {
    const { categoryId } = route.params;


    const category = data.categories.find(cat => cat.id === categoryId);

    if (!category) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Categoría no encontrada.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.name}</Text>
            <Text style={styles.description}>{category.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: COLORS.background,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: COLORS.primary,
    },
    description: {
        fontSize: 16,
        color: COLORS.text,
        textAlign: 'center',
    },
    errorText: {
        fontSize: 18,
        color: COLORS.secondary,
    },
});

export default CategoryDetails;
