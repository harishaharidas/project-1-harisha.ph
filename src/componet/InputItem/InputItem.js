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
        if (this.state.contentName.trim() === "") {
            return;
        }

        this.props.onContentAdded(this.state.contentName);
        this.setState({
            contentName: ''
        });
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <View style={styles.contentInput}>
                    <TextInput
                        contentholder="Write.."
                        value={this.state.contentName}
                    // onChangeText={this.contentChangeHandler}
                    />
                </View>
                <View style={styles.contentButton}>
                    <Button title="Add"
                        onPress={this.contentSubmitHandler} />
                </View>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20
    },
    contentInput: {
        flex:2,
        height:42,
        backgroundColor: "#ECF0F1",
        color: "#2C3E50"
    },
    contentButton: {
        flex:1,
        borderColor:"#ECF0F1",
        borderWidth:2,
        backgroundColor: "#2C3E50",
        color: "#ECF0F1",
        paddingTop:2,
        paddingBottom:0,
        textAlign:"center"
    }
});

export default InputItem;
