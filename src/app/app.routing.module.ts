import { RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { ContactComponent } from "./contact/contact.component";
import { ContactReactiveComponent } from "./contact-reactive/contact-reactive.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { UserComponent } from "./users/user/user.component";
import { ListComponent } from "./users/list/list.component";
import { DetailsComponent } from "./users/details/details.component";
import { PermissionsGuard } from "./guards/permissions.guard";
import { WithoutSaveGuard } from "./guards/without-save.guard";


const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'contac-reactive', component: ContactReactiveComponent},
    {path: 'contac-template/:id', component: ContactComponent},
    {path: 'home', component: HomeComponent},
    {path: 'users', 
    component: UserComponent, 
    canActivate:[PermissionsGuard],
    canDeactivate:[WithoutSaveGuard],
        children: [
            {path: 'list', component: ListComponent},
            {path: 'details', component: DetailsComponent},
        ]
    },
    {path: '**', component: PagenotfoundComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}