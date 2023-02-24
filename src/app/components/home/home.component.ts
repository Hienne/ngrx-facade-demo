import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { GalleryFacade } from 'src/app/gallery/store/gallery.facade';
import { selectRouteData } from 'src/app/router.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private galleryFacade = inject(GalleryFacade);
  private store = inject(Store);
  cats = this.galleryFacade.selectedGalleries$.pipe(
    map((selectedCats: Map<string, any>) => {
      if (!selectedCats) {
        return [];
      }
      return Array.from(selectedCats?.values())
    })
  ) as any;

  ngOnInit() {
    this.store.select(selectRouteData).subscribe(res => console.log(res))
  }

  // Use normal Ngrx
  // private store = inject(Store);
  // cats = this.store.select(selectSelectedGallery).pipe(
  //   map((selectedCats: Map<string, any>) => Array.from(selectedCats.values()))
  // )
}
