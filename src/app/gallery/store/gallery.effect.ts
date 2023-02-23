import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, switchMap, tap } from "rxjs";
import { GalleryService } from "../gallery.service";
import { GALLERY_ACTIONS, getGalleriesResult } from "./gallery.actions";

@Injectable()
export class GalleryEffect {
    private actions$ = inject(Actions);
    private galleryService = inject(GalleryService);
    
    getGalleries$ = createEffect(() => this.actions$.pipe(
        ofType(GALLERY_ACTIONS.GET_GALLERIES),
        tap(res => console.log('hiuhiu')),
        switchMap(() => this.galleryService.getCatsList()
            .pipe(
                map(res => getGalleriesResult({galleries: res})),
                catchError(() => EMPTY)
            )
        )

    ))

}