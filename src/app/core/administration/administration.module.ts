import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewCategoryDetailsComponent } from './category/view-category-details/view-category-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryComponent } from './category/category/category.component';
import { AddNewCategoryComponent } from './category/add-new-category/add-new-category.component';
import { AddNewRoleComponent } from './role/add-new-role/add-new-role.component';
import { ViewRoleComponent } from './role/view-role/view-role.component';
import { AddNewUserComponent } from './users/add-new-user/add-new-user.component';
import { RolePermissionComponent } from './role/role-permission/role-permission.component';
import { SettingsComponent } from './settings/settings.component';
import { CustomersComponent } from './users/customers/customers.component';
import { AdminsComponent } from './users/admins/admins.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { BlogPostsComponent } from './blog/blog-posts/blog-posts.component';
import { AddBlogPostComponent } from './blog/add-blog-post/add-blog-post.component';
import { EditBlogPostComponent } from './blog/edit-blog-post/edit-blog-post.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    ViewCategoryDetailsComponent,
    CategoryComponent,
    AddNewCategoryComponent,
    AddNewRoleComponent,
    ViewRoleComponent,
    AddNewUserComponent,
    RolePermissionComponent,
    SettingsComponent,
    CustomersComponent,
    AdminsComponent,
    EditCategoryComponent,
    BlogPostsComponent,
    AddBlogPostComponent,
    EditBlogPostComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule
  ]
})
export class AdministrationModule { }
