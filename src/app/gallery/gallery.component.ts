import { Component, inject, OnInit } from '@angular/core';
import { GalleryFacade } from './store/gallery.facade';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  private galleryFacade = inject(GalleryFacade);
  cats = this.galleryFacade.allGalleries$;
  selectedCat = this.galleryFacade.selectedGalleries$;
  
  ngOnInit() {
    this.galleryFacade.init();
    // this.store.dispatch(getGalleries());
  }
  
  toggleSelectCat(cat: any) {
    this.galleryFacade.toggleSelectCat(cat);
  }
  
  isSelected(catId: any) {
    return this.galleryFacade.isCatSelected(catId);
  }
  
  // Use Ngrx normal
  // private store = inject(Store);
  // cats = this.store.select(selectGallery);
  // selectedCat = this.store.select(selectSelectedGallery);
  // toggleSelectCat(cat: any) {
  //   this.store.dispatch(toggleSelectCat({cat}));
  // }

  // isSelected(catId: any) {
  //   return this.selectedCat.pipe(
  //     map((selectedCats) => selectedCats.has(catId))
  //   );
  // }
}
