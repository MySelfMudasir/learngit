import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ArticalComponent } from './artical/artical.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { GetApiComponent } from './get-api/get-api.component';
import { PostApiComponent } from './post-api/post-api.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },  // Show multiple components on the default route
    { path: 'app-Header', component: HeaderComponent },
    { path: 'app-navbar', component: NavbarComponent },
    { path: 'app-about', component: AboutComponent },
    { path: 'app-artical', component: ArticalComponent },
    { path: 'app-contact', component: ContactComponent },
    { path: 'app-footer', component: FooterComponent },
    { path: 'app-get-api', component: GetApiComponent },
    { path: 'app-post-api', component: PostApiComponent },
    { path: 'app-put-api', component: GetApiComponent },
    { path: 'app-delete-api', component: GetApiComponent },
    

];
  
//   @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
  export class AppRoutingModule { }
  