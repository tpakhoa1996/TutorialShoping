import { SortType } from "../../Model/SortType";
import { SelectVegetableAction, UpdateSortTypeAction } from "../Action";
import { ActionType } from "../Action/types";

export interface State {
    selectionCount: number;
    sortType: SortType;

    selectedItems: {
        [itemName: string]: boolean;
    }
}

const initialState: State = {
    selectionCount: 0,
    sortType: SortType.ASC_NAME,
    selectedItems: {}
};

export default (state: State = initialState, action: SelectVegetableAction | UpdateSortTypeAction): State => {
    console.log(action);

    switch (action.type) {
        case ActionType.SELECT_VEGETABLE:
            const newSelectedState = !(state.selectedItems[action.name] || false);
            return {
                ...state,
                selectionCount: state.selectionCount + (newSelectedState ? 1 : -1),
                selectedItems: {
                    ...state.selectedItems,
                    [action.name]: newSelectedState,
                }
            };
        case ActionType.UPDATE_SORT_TYPE:
            return {
                ...state,
                sortType: action.newSortType
            }
        default:
            return state;
    }
}