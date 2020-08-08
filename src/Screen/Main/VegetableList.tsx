import * as React from 'react';
import { View } from 'react-native';
import Vegetable from './Vegetable';
import { styles } from './styles';
import { SortType } from '../../Model/SortType';
import { useSelector } from 'react-redux';
import { State } from '../../Redux/Reducer';

const VEGETABLE_LIST = [
    {
        name: 'potato', price: 4
    },
    {
        name: 'carrot', price: 6
    },
    {
        name: 'spring onion', price: 3
    },
    {
        name: 'brown onion', price: 5,
    }
];

export default () => {
    const sortType = useSelector((state: State) => state.sortType);

    const sortedVegetableList = [...VEGETABLE_LIST].sort((vegetable1, vegetable2): number => {
        switch (sortType) {
            case SortType.ASC_NAME:
                return vegetable1.name.localeCompare(vegetable2.name);
            case SortType.DES_PRIC:
                return vegetable2.price - vegetable1.price;
            case SortType.ASC_PRICE:
                return vegetable1.price - vegetable2.price;
        }
    });

    return (
        <View style={styles.vegetableList}>
            {sortedVegetableList.map(vegetable => (
                <Vegetable
                    name={vegetable.name}
                    price={vegetable.price}
                    key={vegetable.name}
                />
            ))}
        </View>
    );
};