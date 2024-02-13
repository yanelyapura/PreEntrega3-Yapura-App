import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Search = ({ onSearch }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleSearch = (text) => {
        if (/^\d+$/.test(text)) {
            setError('Por favor, ingresa solo letras.');
        } else {
            setError('');
            setInput(text);
            onSearch(text);
        }
    };

    return (
        <View style={styles.container}>
            <Ionicons name="search" size={20} color="grey" />
            <TextInput
                style={styles.input}
                placeholder="Buscar..."
                value={input}
                onChangeText={handleSearch}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
    error: {
        color: 'red',
        marginTop: 5,
    },
});

export default Search;