import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

class InputItem extends Component {
    state = {
        contentName: ''
    };

    contentChangeHandler = val => {
        this.setState({
            contentName: val
        });
    };

    contentSubmitHandler = () => {
        console.warn('sssss')
        if (this.state.contentName.trim() === "") {
            return;
        }

        this.props.onContentAdded(this.state.contentName);
        this.setState({
            contentName: ''
        });
    };

    render() {
        console.log(this.state.contentName, 'hai');
        
        return (
            <View style={styles.inputContainer}>
                <View style={styles.contentInput}>
                    <TextInput
                        placeholder="Write.."
                        value={this.state.contentName}
                        onChangeText={this.contentChangeHandler}
                    />
                </View>
                <View style={styles.contentButton}>
                    <Button
                        title="Add"
                        color="#2C3E50"
                        onPress={this.contentSubmitHandler}
                    />
                </View>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
    },
    contentInput: {
        flex: 2,
        height: 42,
        backgroundColor: "#ECF0F1",
        color: "#2C3E50"
    },
    contentButton: {
        flex: 1,
        borderColor: "#ECF0F1",
        borderWidth: 2,
        color: "#2C3E50",
        paddingTop: 2,
        textAlign: "center"
    }
});

export default InputItem;
