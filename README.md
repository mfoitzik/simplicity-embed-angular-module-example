# Simplicity Embed Angular Module Example (Angular 17)

This project demonstrates the use of the Simplicity Embed&trade; web component in an Angular Module Component Project.

There is a separate example available for demonstrating the use of the Simplicity Embed web component in an angular standalone project.

## Free Test License
To use the Simplicity Embed&trade; web component you first need to obtain a free trial license or purchase a license. This is available at: https://www.simplicitywebtools.com.

## Sample Widget
This example references a vanilla JavaScript widget example that demonstrates 
https://github.com/mfoitzik/simplicity-embed-widget-example-vanilljs
```
git clone https://github.com/mfoitzik/simplicity-embed-widget-example-vanilljs.git
```
Open the project in Visual Studio Code and run Live Server or run the code in your dev server of choice. You just need to pay attention to the URL/port it is running on as you will need top reference it later.

## Instructions
```
git clone https://github.com/mfoitzik/simplicity-embed-angular-module-example.git
npm install
ng serve --open
```

Please note: The <simplicity-embed> component in the app.components.html file references the setup file being at: http://localhost:5500/config.json, you may need to change the port numnber depending on what Live Server (or your dev server of choice) assigns as the port number. 
