Guide: Creating Angular Routing with Examples

Angular routing allows you to navigate between different components in your application based on specified routes. This guide will walk you through the process of creating Angular routing and provide examples using snippets.

1. Creating Components
   Angular components are the building blocks of your application. To create components, use the following command:
   ```
   ng generate component <component name>
   ```
   Create at least two components using the above command.

2. Add the AppRoutingModule
   The AppRoutingModule is responsible for handling routing within your Angular application. To create the AppRoutingModule module file, use the following command:
   ```
   ng generate module app-routing --flat --module=app
   ```
   This command generates the `app-routing.module.ts` file in the `src/app` directory.

3. Import Components in AppRoutingModule
   In the `app-routing.module.ts` file, import the components that you want to route to. Add the following import statements at the top of the file:
   ```typescript
   import { TeamComponent } from './team/team.component';
   import { AboutComponent } from './about/about.component';
   ```

4. Define Routes
   Inside the `app-routing.module.ts` file, define the routes using the imported components. Add the following code below the import statements:
   ```typescript
   const routes: Routes = [
     { path: 'team', component: TeamComponent },
     { path: 'about', component: AboutComponent },
   ];
   ```

5. Configure AppRoutingModule
   Within the `@NgModule` decorator of the `AppRoutingModule`, import the necessary modules and configure the routing. Update the `imports` and `exports` arrays as shown below:
   ```typescript
   @NgModule({
     declarations: [],
     imports: [
       CommonModule,
       RouterModule.forRoot(routes)
     ],
     exports: [RouterModule]
   })
   export class AppRoutingModule { }
   ```

6. Import AppRoutingModule in AppModule
   In the `app.module.ts` file (root `AppModule`), import the `AppRoutingModule` and add it to the `imports` array. The Angular CLI usually performs this step automatically. Here's an example of the updated `app.module.ts` file:
   ```typescript
   import { BrowserModule } from '@angular/platform-browser';
   import { NgModule } from '@angular/core';

   import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule

   import { AppComponent } from './app.component';

   @NgModule({
     declarations: [
       AppComponent
     ],
     imports: [
       BrowserModule,
       AppRoutingModule // Add AppRoutingModule to imports array
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

Now you have set up Angular routing for your application. The defined routes will navigate to the specified components when accessed. For example, accessing the path `/team` will render the `TeamComponent`, and accessing the path `/about` will render the `AboutComponent`.
