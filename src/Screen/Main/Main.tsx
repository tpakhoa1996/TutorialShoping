import * as React from 'react';
import { View } from 'react-native';
import Header from './Header';
import Vegetable from './Vegetable';
import VegetableList from './VegetableList';
import BagInfo from './BagInfo';
import { styles } from './styles';

export default () => {
    const [count, updateCount] = React.useState(4);

    const handleVegetableToggle = (newVegetableState: boolean) => {
        if (newVegetableState) {
            updateCount((count) => count + 1);
        } else {
            updateCount((count) => count - 1);
        }
    }

    return (
        <View style={styles.mainContainer}>
            <Header title="Vegetables" />
            <VegetableList onVegtableToggle={handleVegetableToggle} />
            <Header title={`Count: ${count}`} />
        </View>
    );
};