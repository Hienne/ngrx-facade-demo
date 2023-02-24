import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { map } from "rxjs";
import { getGalleries, toggleSelectCat } from "./gallery.actions";
import { selectGallery, selectSelectedGallery } from "./gallery.selectors";

@Injectable({
    providedIn: 'root'
})
export class GalleryFacade {
    private readonly store = inject(Store);

    allGalleries$ = this.store.select(selectGallery);
    selectedGalleries$ = this.store.select(selectSelectedGallery);

    isCatSelected(catId: any) {
        return this.selectedGalleries$.pipe(
            map((selectedCats) => selectedCats.has(catId))
        );
    }

    toggleSelectCat(cat: any) {
        this.store.dispatch(toggleSelectCat({cat}));
    }

    init() {
        this.store.dispatch(getGalleries());
    }
}