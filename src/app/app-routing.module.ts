import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { AddEditUserComponent } from "./user/add-edit-user/add-edit-user.component";
import { CategoriesComponent } from "./categories/categories.component";
import { CanActivateGuard } from "./shared/gaurds/can-activate.guard";
import { CanActivateChildGuard } from "./shared/gaurds/can-activate-child.guard";
import { CanLoadGuard } from "./shared/gaurds/can-load.guard";
import { CanDeactivateGuard } from "./shared/gaurds/can-deactivate.guard";
import { ResolverService } from "./shared/resolver.service";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        // canActivate: [CanActivateGuard]
    },
    {
        path: 'user',
        component: UserComponent,
        canActivateChild: [CanActivateChildGuard],
        resolve: { user: ResolverService },
        children: [
            {
                path: 'list', component: UserListComponent
            },
            {
                path: 'add', component: AddEditUserComponent
            },
            {
                path: 'edit/:Id', component: AddEditUserComponent
            },
            {
                path: 'edit', component: AddEditUserComponent,
                canDeactivate: [CanDeactivateGuard]
            }
        ]
    },
    // {
    //     path: 'user',
    //     component: UserComponent,
    //     canActivate: [CanActivateGuard],
    //     children: [
    //         {
    //             path: 'list', component: UserListComponent
    //         },
    //         {
    //             path: 'add', component: AddEditUserComponent
    //         },
    //         {
    //             path: 'edit/:Id', component: AddEditUserComponent
    //         },
    //         {
    //             path: 'edit', component: AddEditUserComponent
    //         }
    //     ]
    // },
    {
        path: 'categories',
        component: CategoriesComponent,
        canLoad: [CanLoadGuard],
        loadChildren: () => import('./categories/categories.module').then((m) => m.CategoriesModule)
    },
    // {
    //     path: 'categories',
    //     component: CategoriesComponent,
    //     canActivate: [CanActivateGuard],
    //     loadChildren: () => import('./categories/categories.module').then((m) => m.CategoriesModule)
    // }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }