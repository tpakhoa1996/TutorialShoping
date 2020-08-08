import { ActionType } from "./types";
import { SortType } from "../../Model/SortType";

export interface SelectVegetableAction {
    type: ActionType.SELECT_VEGETABLE;
    name: string;
}

export const selectVegetable = (name: string): SelectVegetableAction => ({
    type: ActionType.SELECT_VEGETABLE,
    name,
});

export interface UpdateSortTypeAction {
    type: ActionType.UPDATE_SORT_TYPE;
    newSortType: SortType;
}

export const updateSortType = (newSortType: SortType): UpdateSortTypeAction => ({
    type: ActionType.UPDATE_SORT_TYPE,
    newSortType,
});