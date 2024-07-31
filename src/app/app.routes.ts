import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    // {path:'/',component:AppComponent}
    {path:'departments',component:FirstComponent},
    {path:'second',component:SecondComponent},
    {path:'employee',component:EmployeeListComponent,
        children:[
            {path:'overview',component:OverviewComponent},
            {path:'contact',component:ContactComponent}
        ]
    },
    {path:'employee/:id',component:FirstComponent},
];
