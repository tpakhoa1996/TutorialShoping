import * as React from 'react';
import { View, Text } from 'react-native';

interface Props {
    vegetableNumber: number;
}

export default (props: Props) => (
    <View>
        <Text>Number of selected vegetable: {props.vegetableNumber}</Text>
    </View>
)