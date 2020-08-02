import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface Props {
    title: string;
}

export default (props: Props) => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
)