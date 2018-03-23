# Best Practices for Developpers of APD

  The purpose of this file is to keep consistent practices between all developers of this project and ensure the respect of the chosen
methodology.

## Keeping the architecture and the structure of the files

  In order to keep the architecture and the structure of the files, some rules or practices must be applied.
  
  * ### Create a new file for each major route.
      If a route is a major route. By major, I mean the path name which come right after the domain.
      Ex: https://www.example.com/pathname/more, pathname will be the major route. So, if a route is a major
      route, it will be best to create a new file in the folder controller. 
      For the previous example: it best to create a file in the controller call "pathname.js"
      
  * ### For each javascript file created never forget those.
      For each javascript file created, you have to ensure:
       -  that you import required module for the file with the syntax `const Module = require('module');`
       -  to write  `const router = express.Router();`  for the file in the controller folder (the routes).
       -  that you export the file, `module.exports = router;` for the file in the controller or 
          `module.exports = filename;` for any other file.
          
  * ### Create a folder in the view for each routes.
      If the route will be render in the front-end, it is necessary to create a folder in the view which will handle
      the view for this particular route.
      
  * ### Adding your personal helper function and/or algorithm in the middlewares.
      If for any reason, you need to create your own function or algorithm to handle a processus. You will need to either
      create a new file for your function in the middlewares folder or adding the function in the viewHelpers.js file
      already in the middlewares folder. If you are creating your own file, ensure that you export it at the end.
      
  * ### All test files should be in the folder "\_\_test\_\_" _(two underscore before and after test)_
      This folder is not yet created. However, when the test are created, it will be best to create a folder "__test__" and 
      save the test file into it. If this is done, it will be optional to name your test "testname.test.js" or "testname.js"
      both will run when in the folder \_\_test\_\_.(with Jest)
      
  * ### Inside of the view folder of each route, create a folder for each http request methods.
       Different http request method, we'll need to render different page. So, it is crucial to create a folder for each
       http request method with the file "index.handlebars" included.
       - create just the file "index.handlebars" for the GET /route. To render the principal page for the route.
       - create the folder new for the POST /route. To render the page form to create a new instance.
       - create the folder edit for the PUT /route/:multipleRender. To render the page form to edit a registered instance.
       - create the folder single for GET /route/:multipleRender. To render the page which show the data of a single element from
         multiple elements saved.
         
  * ### No need for `<html>`, `<head>`, `<body>` when creating a new handlebars file.
      All the handlebar file will be rendered from the main layout which already contains the `<html>`, `<head>`, `<body>` tags.
      So, when you are creating a new handlebars file, just make sure that your html/handlebars code is inside of a `<div>` and the
      extension is `.handlebars`. It is best practice to name the file "index.handlebars" so the engine will know which file to render.
      
  * ### All styling and images should be added in the public file.
      The public file is for the static information such as the style and the images. All the css files should be in the folder css 
      which is inside of the public file. All the image files should be in the folder img (which is not yet created) which is inside
      of the public file. 
      
 * ### Consistent style should be added to the main layout
      If you want your style to be consistent through the entire website, it is best practice to insert the link in the header of
      the main layout if a new css file is created for it. I think also it will be better if you just added the style in the "main.css"
      file.
      
 * ### Particular style should be added to the its particular file
      Otherwise, if the style is for a particular page. It is best practice to create the css file inside the css folder with the same 
      name as the page like "pagename.css" or "pagenameStyle.css". Then include the link directly to the handlebars of this particular
      page.
