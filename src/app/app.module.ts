import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AddEditUserComponent } from './user/add-edit-user/add-edit-user.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CanActivateChildGuard } from './shared/gaurds/can-activate-child.guard';
import { CanActivateGuard } from './shared/gaurds/can-activate.guard';
import { CanDeactivateGuard } from './shared/gaurds/can-deactivate.guard';
import { CanLoadGuard } from './shared/gaurds/can-load.guard';
import { UserService } from './shared/services/user.service';
import { ResolverService } from './shared/resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddEditUserComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
