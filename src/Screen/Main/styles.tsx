import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../Style/Theme";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },

    header: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'orange',
        elevation: 4,
    },

    headerTitle: {
        color: 'white',
        fontSize: theme.textSize.big,
        textTransform: 'uppercase',
        letterSpacing: 0.5
    },

    vegetableList: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        flexGrow: 99999,
    },

    vegetable: {
        width: 0.4 * Dimensions.get('screen').width,
        height: 0.4 * Dimensions.get('screen').width,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    vegetableName: {
        color: 'white',
        fontSize: theme.textSize.medium,
    },

    sortContainer: {
        flexDirection: 'row',
        padding: 8,
    },

    sortTypeContainer: {
        padding: 4,
        borderWidth: 1,
        marginRight: 8,
    },
});