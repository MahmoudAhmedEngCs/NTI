import { Routes } from "@angular/router";
import { PostsListComponent } from "./features/posts/postslist/postslist.component";
import { PostCreateComponent } from "./features/posts/postcreate/postcreate.component";
import { PostUpdateComponent } from "./features/posts/postupdate/postupdate.component";


export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    // {
    //     path: 'home',
    //     component: HomeComponent,
    //     children: [
    //         { path: 'dashboard', component: DashboardComponent },
    //         { path: 'setting', component: SettingComponent }
    //     ]
    // },
    // { path: 'about-us', component: AboutUsComponent },
    // { path: '**', component: NotfoundpageComponent }


    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: 'posts', component: PostsListComponent },
    { path: 'create', component: PostCreateComponent },
    
    { path: 'update/:id', component: PostUpdateComponent },

];

