import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { products } from '../data.json';

const ItemDetail = ({ route }) => {
    const { productId } = route.params;
    const product = products.find(product => product.id === productId);

    if (!product) {
        return (
            <View style={styles.container}>
                <Text>Producto no encontrado</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: product.imageUrl }}
                style={styles.productImage}
            />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    productImage: {
        width: '100%',
        height: 300,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#E47911',
    },
    description: {
        fontSize: 16,
    },
});

export default ItemDetail;
