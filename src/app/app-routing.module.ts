import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CssComponent } from './pages/css/css.component';
import { HtmlComponent } from './pages/html/html.component';
import { SassComponent } from './pages/sass/sass.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'html', component: HtmlComponent},
  {path: 'css', component: CssComponent},
  {path: 'sass', component: SassComponent},
  {path: 'typescript', component:TypescriptComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
