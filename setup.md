# Setting Up `ngx-extended-pdf-viewer` in Angular 15

This guide provides step-by-step instructions to integrate and use the `ngx-extended-pdf-viewer` library in an Angular 15 project.

---

## Prerequisites

Before starting, make sure you have the following:

- **Node.js** and **npm** installed on your system.
- Created a new Angular project using the following commands:

  ```terminl
  ng new PDF-viewer-app
  cd PDF-viewer-app
  ```

## Step 1: Install the Library

To install the `ngx-extended-pdf-viewer` library, run the following command:

```zsh
npm install ngx-extended-pdf-viewer --save
```

## Step 2: Add Required Styles

The library requires additional styles for proper rendering. To include these styles:

1. Open the `angular.json` file located in the root of your project.
2. Add the following entry under the `styles` array:

   ```json
   "styles": [
     "src/styles.css",
     "./node_modules/ngx-extended-pdf-viewer/assets/pdf.viewer.min.css"
   ]
   ```

## Step 3: Import the PDF Viewer Module

Import the `NgxExtendedPdfViewerModule` into this application module (`app.module.ts`):

1. Open `src/app/app.module.ts`.
2. Update the file with the following content:

   ```typescript
   import { NgModule } from "@angular/core";
   import { BrowserModule } from "@angular/platform-browser";
   import { AppComponent } from "./app.component";
   import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";

   @NgModule({
     declarations: [AppComponent],
     imports: [BrowserModule, NgxExtendedPdfViewerModule],
     providers: [],
     bootstrap: [AppComponent],
   })
   export class AppModule {}
   ```

## Step 4: Add these lines in tsconfig.json file

Add these lines in `"compilerOptions":`

```
 "typeRoots": ["node_modules/@types"],
    "types": ["pdfjs-dist"]
```

## Step 5: Create a component

To created a component, run the following command:

```zsh
ng g c pdf-viewer
```

## Step 6: Add the PDF Viewer to this Component

Update the `pdf-viewer.component.ts` file to include a source for the PDF file:

1. Open `src/app/app.component.ts`.
2. Add the following code:

   ```typescript
   import { Component } from "@angular/core";

   @Component({
     selector: "app-pdf-viewer",
     templateUrl: './pdf-viewer.component.html',
     styleUrls: ['./pdf-viewer.component.scss'],
   })
   export class AppComponent {
     samplePDF = "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"; /
   }
   ```

## Step 7: Use the PDF Viewer in HTML

Update the `pdf-viewer.component.html` file to use the `ngx-extended-pdf-viewer` component:

1. Open `src/app/pdf-viewer/pdf-viewer.component.html`.
2. Add the following code:

   ```html
   <div class="container">
     <h1>PDF Viewer works here</h1>

     <ngx-extended-pdf-viewer [src]="samplePDF" backgroundColor="#ffffff" [height]="'85vh'" [useBrowserLocale]="true" [handTool]="false" [showHandToolButton]="true"> </ngx-extended-pdf-viewer>
   </div>
   ```

## Step 8: Add a PDF File

Use sample PDF file from the browser and use tha path in `ngx-extended-pdf-viewer` in html.

## Step 9: Run the Application

Start the Angular development server to see the PDF viewer in action:

1. Open terminal and run the following command:

   ```zsh
   ng serve
   ```
