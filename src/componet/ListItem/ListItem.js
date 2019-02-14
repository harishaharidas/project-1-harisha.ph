import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <KeyboardAvoidingView style={styles.listItem} behavior="padding" enabled>
            <Text>{props.contentName}</Text>
        </KeyboardAvoidingView>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        flexDirection: "row",
        padding: 15,
        backgroundColor: "#2C3E50"
    }
});

export default listItem;