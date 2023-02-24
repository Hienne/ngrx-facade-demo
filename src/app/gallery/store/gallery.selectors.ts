import { createFeatureSelector, createSelector } from "@ngrx/store";
import { galleryAdapter, GalleryState } from "./gallery.reducer";

// use ngrx entity
export const { selectAll } = galleryAdapter.getSelectors();

export const selectGalleryState = 
createFeatureSelector<GalleryState>('gallery');

export const selectGallery = createSelector(
    selectGalleryState,
    (state: GalleryState) => selectAll(state)
)

export const selectSelectedGallery = createSelector(
    selectGalleryState,
    (state: any) => state?.selectedCats
)

// use normal Ngrx
// export const selectGalleryState = 
// createFeatureSelector('gallery');

// export const selectGallery = createSelector(
//     selectGalleryState,
//     (state: any) => state?.galleries
// )

// export const selectSelectedGallery = createSelector(
//     selectGalleryState,
//     (state: any) => state?.selectedCats
// )