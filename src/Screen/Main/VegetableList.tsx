import * as React from 'react';
import { View } from 'react-native';
import Vegetable from './Vegetable';
import { styles } from './styles';

interface Props {
    onVegtableToggle: (newVegetableState: boolean) => void;
}

const VEGETABLE_LIST = [
    'potato', 'carrot', 'spring onion', 'brown onion'
];

export default (props: Props) => {
    return (
        <View style={styles.vegetableList}>
            {VEGETABLE_LIST.map(vegetable => (
                <Vegetable name={vegetable} onVegtableToggle={props.onVegtableToggle} key={vegetable} />
            ))}
        </View>
    );
};