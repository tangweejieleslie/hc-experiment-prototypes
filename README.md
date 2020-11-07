# Team Caters

Repository of CS4249 AY20/21 Sem 1, Group 7.
This repository contains the source code for our User Interface under test.
The project is built using using Vue.js and Vuetify Material Design.

# UI Variations
To maintain consistency of UI across different variables, we made use of components. 
Different UI variations are served from the same URL with different URL parameters. 

The following is an example URL
**Accordion/Increment, Obvious Error, Default Menu, User ID, Trial A**: http://103.253.146.212/#/home/0/1/0/userid/A

**List of Conditions**
0: Accordion/Increment
1: Accordion/Input
2: Accordion/Slider
3: Full/Increment
4: Full/Input
5: Full/Slider

**List of Errors Display**
0: Obvious Display
1: Subtle Display

**List of Menu Categories**
0: Default Menu
1: Custom Menu

**List of Trial Tasks**
A
B
C

**URL to 24 UI Variants**

 1. http://103.253.146.212/#/home/0/1/0/userid/A
 2. http://103.253.146.212/#/home/1/1/0/userid/B
 3. http://103.253.146.212/#/home/2/1/0/userid/C
 4. http://103.253.146.212/#/home/3/1/0/userid/A
 5. http://103.253.146.212/#/home/4/1/0/userid/B
 6. http://103.253.146.212/#/home/5/1/0/userid/C
 7. http://103.253.146.212/#/home/0/2/0/userid/A
 8. http://103.253.146.212/#/home/1/2/0/userid/B
 9. http://103.253.146.212/#/home/2/2/0/userid/C
 10. http://103.253.146.212/#/home/3/2/0/userid/A
 11. http://103.253.146.212/#/home/4/2/0/userid/B
 12. http://103.253.146.212/#/home/5/2/0/userid/C
 13. http://103.253.146.212/#/home/0/1/1/userid/A
 14. http://103.253.146.212/#/home/1/1/1/userid/B
 15. http://103.253.146.212/#/home/2/1/1/userid/C
 16. http://103.253.146.212/#/home/3/1/1/userid/A
 17. http://103.253.146.212/#/home/4/1/1/userid/B
 18. http://103.253.146.212/#/home/5/1/1/userid/C
 19. http://103.253.146.212/#/home/0/2/1/userid/A
 20. http://103.253.146.212/#/home/1/2/1/userid/B
 21. http://103.253.146.212/#/home/2/2/1/userid/C
 22. http://103.253.146.212/#/home/3/2/1/userid/A
 23. http://103.253.146.212/#/home/4/2/1/userid/B
 24. http://103.253.146.212/#/home/5/2/1/userid/C

# Folders and Files

## Views

This folder stores all the main views, which are built using components. 
### Deployment
We have 4 views that makes up the deployed UI. 

 1. Home: this serve as a landing page. Users would click on start which brings them to the UI under test. This help us compute the time spent completing the task
 2. Accordion View: this is the view layout for our our primary IV
 3. Full Layout View: this is the view layout for our primary IV
 4. Select Time: this is view for user to select the delivery date and time

By using view files to structure the layout, we are able to ensure consistency across our different conditions.

## Components
This folder stores all our components, the building blocks of the different views. 

### Quantity Components
These components make up another of our IV. There are 3 different quantity inputs, namely:

 1. Increment/Decrement
 2. Input Field
 3. Slider

### Item Components
We have an item component for both Accordion (Item.vue) and Full Layout View (ItemFull.vue). The item component is where the users make the quantity selection for their items. The item component would display each of the 3 different quantity components to be test based on the URL parameters. 

### Mini Item Components
The mini item components is used to display the list of items in the menu. This is being tailored to our 2 main views (Accordion and Full Layout)

### Cart
This is our shopping cart. It displays the items user has selected and also serve as the entry point to Date/Time Selection and Placing of Order. Upon successful placing of order, the task will end and the timestamp will be logged. Checking of order success is done through `OrderValidation.js`

### Top Bar
This is the navigation bar. It is mainly used during development to help us quickly navigate to the different UIs.


## Assets
The assets folder contains the resources that are served, namely images and menu items. 

### Images
This folder stores some of the custom images that are used in our application. The menu items images are served through a URL which reference to Old Chang Kee's website. 

### Items
We have `items.xlsx` which is our raw file to manage Old Chang Kee Items list and `items.json` which is used to populate the data in our UI. 

### Mappings
We have various mappings files to programmatically update our menu categories.   

## Logging

`customLogging.js` is used as an interface to the provided `logging.js` file, to handle custom event loggings. 


## Plugins
`orderValidation.js` is our helper function to validate that the user has successfully completed the trial task.
`vuetify.js` is our entry point of using Vuetify Material Design in our application.

## Router
`index.js` in this folder conains all the different routes our application has, as well as the handling of URL paramters. 

## Store
`index.js` in this folder contains the settings for Vuex. This is used to maintain a consistent global state within our application.


# OCK UI

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
