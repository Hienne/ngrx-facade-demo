import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GalleryComponent } from './gallery.component';
import { GalleryEffect } from './store/gallery.effect';
import { galleryReducer } from './store/gallery.reducer';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
  }
]

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('gallery',  galleryReducer),
    EffectsModule.forFeature([GalleryEffect])
  ],
  providers: []
})
export class GalleryModule { }
