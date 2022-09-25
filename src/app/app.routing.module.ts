import { RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { ContactComponent } from "./contact/contact.component";
import { ContactReactiveComponent } from "./contact-reactive/contact-reactive.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'contac-reactive', component: ContactReactiveComponent},
    {path: 'contac-template/:id', component: ContactComponent},
    {path: 'home', component: HomeComponent},
    {path: '**', component: PagenotfoundComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}