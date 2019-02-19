import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const DeleteList = props => {
    return (
        <FlatList style={styles.listContainer}
            data={props.contents}
            renderItem={(info) => (
                <ListItem
                    contentName={info.item.name}
                    onItemPressed={() => props.onItemDeleted(info.item.key)} />
            )}
        />
    );
};

const styles = StyleSheet.create({

    listContainer: {
        width: "100%",
        borderColor: "#ECF0F1",
        borderWidth: 2
    }

});

export default DeleteList;