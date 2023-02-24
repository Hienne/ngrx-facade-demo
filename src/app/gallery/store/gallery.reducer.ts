import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { getGalleriesResult, toggleSelectCat } from "./gallery.actions";


// Use Ngrx Entity
export interface GalleryEntity {
    id: string;
    title: string;
    url: string;
}

export interface GalleryState extends EntityState<GalleryEntity> {
    selectedCats: Map<string, any>
}

export const galleryAdapter: EntityAdapter<GalleryEntity> = createEntityAdapter<GalleryEntity>();

export const initialState: GalleryState = galleryAdapter.getInitialState({
    selectedCats: new Map(),
});

const reducer = createReducer(
    initialState,
    on(getGalleriesResult, (state, { galleries }) => 
        galleryAdapter.setAll(galleries, { ...state })
    ),
    on(toggleSelectCat, (state, { cat }) => {
        const newState = { ...state };
        if (newState.selectedCats.has(cat.id)) {
            newState.selectedCats.delete(cat.id)
        } else {
            newState.selectedCats.set(cat.id, cat)
        }
        return newState;
    })
)
export function galleryReducer(state: GalleryState | undefined, action: Action) {
    return reducer(state, action);
}

// Use normal Ngrx
// export interface GalleryState {
//     galleries: any,
//     selectedCats: any,
// }
// export const initialState = {
//     galleries: [],
//     selectedCats: new Map(),
// }

// export const galleryReducer = createReducer(
//     initialState,
    // on(getGalleriesResult, (state, { galleries }) => {
    //     return {
    //         ...state,
    //         galleries
    //     }
    // }),
    // on(toggleSelectCat, (state, { cat }) => {
    //     const newState = { ...state };
    //     if (newState.selectedCats.has(cat.id)) {
    //         newState.selectedCats.delete(cat.id)
    //     } else {
    //         newState.selectedCats.set(cat.id, cat)
    //     }
    //     return newState;
    // })
// )
