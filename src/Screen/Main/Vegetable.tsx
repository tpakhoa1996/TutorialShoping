import * as React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectVegetable } from '../../Redux/Action';
import { State } from '../../Redux/Reducer';

interface Props {
    name: string;
    price: number;
}

export default (props: Props) => {
    const { isInitialRender } = useRenderVersion();
    const selectedState = useSelector((state: State) => state.selectedItems[props.name] || false);
    const dispatch = useDispatch();

    const handleSelectedStateToggle = () => {
        dispatch(selectVegetable(props.name));
    }

    return (
        <TouchableWithoutFeedback onPress={handleSelectedStateToggle}>
            <View
                style={[
                    styles.vegetable,
                    { backgroundColor: selectedState ? 'red' : 'blue' }
                ]}
            >
                <Text style={styles.vegetableName}>{props.name}</Text>
                <Text style={styles.vegetableName}>{props.price} $</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const useRenderVersion = () => {
    const version = React.useRef<number>(0);

    version.current += 1;

    return {
        isInitialRender: version.current === 1
    };
}