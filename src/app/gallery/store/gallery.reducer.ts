import { createReducer, on } from "@ngrx/store";
import { getGalleriesResult, toggleSelectCat } from "./gallery.actions";

export interface GalleryState {
    galleries: any,
    selectedCats: any,
}
export const initialState = {
    galleries: [],
    selectedCats: new Map(),
}

export const galleryReducer = createReducer(
    initialState,
    on(getGalleriesResult, (state, { galleries }) => {
        console.log(galleries);
        return {
            ...state,
            galleries
        }
    }),
    on(toggleSelectCat, (state, { cat }) => {
        const newState = { ...state };
        console.log(cat);
        if (newState.selectedCats.has(cat.id)) {
            newState.selectedCats.delete(cat.id)
        } else {
            newState.selectedCats.set(cat.id, cat)
        }
        return newState;
    })
)