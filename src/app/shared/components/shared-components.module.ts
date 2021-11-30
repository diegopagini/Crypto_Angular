import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { SpinnerModule } from './spinner/spinner.module';

const components = [HeaderModule, FooterModule, SpinnerModule];

@NgModule({
  imports: [CommonModule, ...components],
  exports: [...components],
})
export class SharedComponentsModule {}
