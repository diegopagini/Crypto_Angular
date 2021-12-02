import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CoinsEffects } from 'src/app/store/effects/coins.effect';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { CoinsResolver } from 'src/app/resolvers/coins.resolver';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ComponentsModule,
    SharedComponentsModule,
    EffectsModule.forFeature([CoinsEffects]),
  ],
  exports: [HomeComponent],
  providers: [CoinsResolver],
})
export class HomeModule {}
