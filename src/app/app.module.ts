import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExercisePageComponent } from './exercise-page/exercise-page.component';
import { BannerComponent } from './banner/banner.component';
import { ValuesService } from './values-service';
import { HttpClientModule } from '@angular/common/http';
import { ExerciseService } from './exercise/exercise.service';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExercisePageComponent,
    BannerComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ValuesService, ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
