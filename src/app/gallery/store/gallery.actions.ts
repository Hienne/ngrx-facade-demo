import { createAction, props } from "@ngrx/store"

export const GALLERY_ACTIONS = {
    GET_GALLERIES: '[GALLERY] Get Galleries',
    GET_GALLERIES_RESULT: '[GALLERY] Get Galleries result',
    SELECT_GALLERY: '[GALLERY] Toggle Select Cats'
}

export const getGalleries = createAction(
    GALLERY_ACTIONS.GET_GALLERIES
)

export const getGalleriesResult = createAction(
    GALLERY_ACTIONS.GET_GALLERIES_RESULT,
    props<{galleries: any}>()
)

export const toggleSelectCat = createAction(
    GALLERY_ACTIONS.SELECT_GALLERY,
    props<{ cat: any }>()
)