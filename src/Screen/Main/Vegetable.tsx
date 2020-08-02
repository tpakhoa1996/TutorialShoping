import * as React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { styles } from './styles';

interface Props {
    name: string;
    onVegtableToggle: (newVegetableState: boolean) => void;
}

export default (props: Props) => {
    const [selectedState, updateSelectedState] = React.useState(false);

    React.useEffect(
        () => {
            props.onVegtableToggle(selectedState);
        },
        [selectedState]
    );

    const handleSelectedStateToggle = () => {
        updateSelectedState((currentSelectedState) => !currentSelectedState);
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
            </View>
        </TouchableWithoutFeedback>
    );
};