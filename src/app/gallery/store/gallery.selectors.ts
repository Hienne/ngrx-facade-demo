import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectGalleryState = 
createFeatureSelector('gallery');

export const selectGallery = createSelector(
    selectGalleryState,
    (state: any) => state?.galleries
)

export const selectSelectedGallery = createSelector(
    selectGalleryState,
    (state: any) => state?.selectedCats
)