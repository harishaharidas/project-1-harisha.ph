import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
class listItem extends Component {
    state = {
        click: false
    };

   setClick = () => {
        this.setState({click:true})
    }
    render() {
        return (
            <View style={styles.listItem}>
                <TouchableOpacity style={{ flex: 10 }}
                    onPress={this.setClick}>
                    <Text style={this.state.click === true ? styles.markList : styles.oldList}>
                        {this.props.contentName}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onItemPressed}>
                    <Text style={styles.deleteMark}>X</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        flexDirection: "row",
        padding: 15,
        backgroundColor: "#2C3E50",
    },
    deleteMark: {
        flex: 1,
        color: "#ECF0F1"
    },
    oldList:
    {
        color: "#ECF0F1",
        flex: 10,
        fontSize:18
    },
    markList:
    {
        color: "red",
        flex: 10,
        textDecorationLine: 'line-through',
        fontSize:18
    }

});

export default listItem;

