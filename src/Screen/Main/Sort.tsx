import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { SortType } from "../../Model/SortType";
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../Redux/Reducer';
import { updateSortType } from '../../Redux/Action';

export default () => {
    const sortType = useSelector((state: State) => state.sortType);
    const dispatch = useDispatch();

    const handleSortTypeChange = (newSortType: SortType) => {
        updateSortType(newSortType);
        dispatch(updateSortType(newSortType));
    }

    return (
        <View style={styles.sortContainer}>
            <Text>Sort By: </Text>

            <TouchableOpacity onPress={() => handleSortTypeChange(SortType.ASC_NAME)}>
                <View style={[styles.sortTypeContainer, { borderColor: sortType === SortType.ASC_NAME ? 'purple' : 'black' }]}>
                    <Text>Name Asc</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSortTypeChange(SortType.ASC_PRICE)}>
                <View style={[styles.sortTypeContainer, { borderColor: sortType === SortType.ASC_PRICE ? 'purple' : 'black' }]}>
                    <Text>Price Asc</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSortTypeChange(SortType.DES_PRIC)}>
                <View style={[styles.sortTypeContainer, { borderColor: sortType === SortType.DES_PRIC ? 'purple' : 'black' }]}>
                    <Text>Price Desc</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}