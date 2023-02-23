import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { GalleryFacade } from 'src/app/gallery/store/gallery.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private galleryFacade = inject(GalleryFacade);
  cats = this.galleryFacade.selectedGalleries$.pipe(
    map((selectedCats: Map<string, any>) => {
      if (!selectedCats) {
        return [];
      }
      return Array.from(selectedCats?.values())
    })
  ) as any;

  // Use normal Ngrx
  // private store = inject(Store);
  // cats = this.store.select(selectSelectedGallery).pipe(
  //   map((selectedCats: Map<string, any>) => Array.from(selectedCats.values()))
  // )
}
