import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

const components = [HeaderModule, FooterModule];

@NgModule({
  imports: [CommonModule, ...components],
  exports: [...components],
})
export class SharedComponentsModule {}
