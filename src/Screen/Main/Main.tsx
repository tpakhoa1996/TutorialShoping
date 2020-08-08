import * as React from 'react';
import { View } from 'react-native';
import Header from './Header';
import Vegetable from './Vegetable';
import VegetableList from './VegetableList';
import BagInfo from './BagInfo';
import { styles } from './styles';
import Sort from './Sort';
import { SortType } from '../../Model/SortType';
import { useSelector } from 'react-redux';
import { State } from '../../Redux/Reducer';

export default () => {
    const sortType = useSelector((state: State) => state.sortType);
    const count = useSelector((state: State) => state.selectionCount);

    return (
        <View style={styles.mainContainer}>
            <Header title="Vegetables" />
            <Sort />
            <VegetableList />
            <Header title={`Count: ${count}`} />
        </View>
    );
};