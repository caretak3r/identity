import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmbedComponent} from './embed/embed.component';
import {HomeComponent} from './home/home.component';
import {ImportComponent} from './import/import.component';
import {LogoutComponent} from './logout/logout.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LogInComponent} from './log-in/log-in.component';

export class RouteNames {
  public static EMBED = 'embed';
  public static IMPORT = 'import';
  public static LOGOUT = 'logout';
  public static SIGN_UP = 'sign-up';
  public static LOG_IN = 'log-in';
}

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: RouteNames.EMBED, component: EmbedComponent, pathMatch: 'full' },
  { path: RouteNames.IMPORT, component: ImportComponent, pathMatch: 'full' },
  { path: RouteNames.LOGOUT, component: LogoutComponent, pathMatch: 'full' },
  { path: RouteNames.SIGN_UP, component: SignUpComponent, pathMatch: 'full' },
  { path: RouteNames.LOG_IN, component: LogInComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
