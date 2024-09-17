import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CategoryComponent } from './category/category/category.component';
import { AddNewCategoryComponent } from './category/add-new-category/add-new-category.component';
import { AddNewUserComponent } from './users/add-new-user/add-new-user.component';
import { RolePermissionComponent } from './role/role-permission/role-permission.component';
import { AddNewRoleComponent } from './role/add-new-role/add-new-role.component';
import { SettingsComponent } from './settings/settings.component';
import { CustomersComponent } from './users/customers/customers.component';
import { AdminsComponent } from './users/admins/admins.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { AddBlogPostComponent } from './blog/add-blog-post/add-blog-post.component';
import { BlogPostsComponent } from './blog/blog-posts/blog-posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    data: { title: 'Dashboard' },
  },
 
  {
    path: 'add-new-blog-post',
    component: AddBlogPostComponent,
    data: { title: 'Add New Blog Post' },
  },
  {
    path: 'blog-posts',
    component: BlogPostsComponent,
    data: { title: 'All Blog Posts' },
  },
  {
    path: 'profile-settings',
    component: SettingsComponent,
    data: { title: 'Profile Information' },
  },
  {
    path: 'customers',
    component: CustomersComponent,
    data: { title: 'All Customers' },
  },
  {
    path: 'administrators',
    component: AdminsComponent,
    data: { title: 'All Administrators' },
  },
  {
    path: 'categories',
    component: CategoryComponent,
    data: { title: 'All Categories' },
  },
  {
    path: 'edit-category/:id',
    component: EditCategoryComponent,
    data: { title: 'Edit Category' },
  },
  {
    path: 'add-new-category',
    component: AddNewCategoryComponent,
    data: { title: 'Add New Category' },
  },
  { path: 'add-new-user', component: AddNewUserComponent },
  { path: 'view-user/:id', component: AddNewUserComponent },
  { path: 'add-new-role', component: AddNewRoleComponent },
  { path: 'role-permissions', component: RolePermissionComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
