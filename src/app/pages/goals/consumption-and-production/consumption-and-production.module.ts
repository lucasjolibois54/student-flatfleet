import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumptionAndProductionPageRoutingModule } from './consumption-and-production-routing.module';

import { ConsumptionAndProductionPage } from './consumption-and-production.page';
import { NavComponent } from 'src/app/components/main/nav/nav.component';
import { HeroComponent } from 'src/app/components/goals/hero/hero.component';
import { SubheroComponent } from 'src/app/components/goals/subhero/subhero.component';
import { DefaultTextComponent } from 'src/app/components/goals/default-text/default-text.component';
import { VideoComponent } from 'src/app/components/goals/video/video.component';
import { TextSliderComponent } from 'src/app/components/goals/text-slider/text-slider.component';
import { FactBoxComponent } from 'src/app/components/goals/fact-box/fact-box.component';
import { ImageComponent } from 'src/app/components/goals/image/image.component';
import { QuoteComponent } from 'src/app/components/goals/quote/quote.component';
import { NextProjectComponent } from 'src/app/components/goals/next-project/next-project.component';
import { SecondaryFooterComponent } from 'src/app/components/main/secondary-footer/secondary-footer.component';
import { SecondaryDefaultTextComponent } from 'src/app/components/goals/secondary-default-text/secondary-default-text.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumptionAndProductionPageRoutingModule
  ],
  declarations: [ConsumptionAndProductionPage,
    NavComponent,
    HeroComponent,
    SubheroComponent,
    DefaultTextComponent,
    VideoComponent,
    TextSliderComponent,
    FactBoxComponent,
    ImageComponent,
    QuoteComponent,  
    NextProjectComponent,  
    SecondaryFooterComponent,
    SecondaryDefaultTextComponent,]
})
export class ConsumptionAndProductionPageModule {}
