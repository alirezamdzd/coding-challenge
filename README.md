# coding-challenge
A Javascript and Node js coding challenge

repo: https://github.com/alirezamdzd/coding-challenge.git  
email: alireza.mehdizadeh@kbs.krieger.de


#### Task #1: Javascript task (20 minutes)

We expect to get in the console by delay for 3 seconds for each log the out put below:

			0
			1
			2
			3
			4

Please fix the bug in the function.
Note that we don't want you to delete the for loop or use completely another solution to just simply achieve the result, please keep the for loop
as it is and solve the problem within the loop.


#### Task #2: NodeJS APP (90 minutes)

app  
|  
+-- public  
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |  
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +-- styles.css  
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +-- scripts.js  
|  
+-- views  
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |  
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +-- index.html  
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +-- register.html  
|  
+-- app.js  
+-- package.json  

1- Implement an express app to serve the "views/index.html" on your localhost:3333/

2 - Create a new route "/register" to serve the "views/register.html" and link the    
    "index.html" to the register.html

3 - On the "views/register.html" there is a simple Html form with 2 inputs and a submit     
    button.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  |  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  +-- Implement a client side javascript form submission handler "public/scripts.js"  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  +-- The handler accepts the user inputs and sends an ajax post request to  "/register".  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  +-- Implement an Api on the express app which handles post requests to  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp; "/register".  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  +-- *(optional) Validate the submitted form data.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      |  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      +-- name: Not empty and only alphabetical letters. Not number or symbol.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      +-- email: Not empty and valid email address.  

4 – Connect the express app to MongoDB database.

5 - In the userRegister api, save the form data in the database under the collection      
    name "users".  
Data model:
 
			{
    			name: String,
    			email: String
			}

6 - Handel the response message to the client with successful or failed registration.


#### Task #3: Build Header (60 minutes)

Use the screen provided in the readme folder to design a markup for the header and style it with CSS.
- you could use pure HTML and CSS for this task or if you prefer use any pre processor of your choice.
- The margins and paddings specified in the screen.
- Font family and size is optional (you choose somethings which looks good)
- The logo should be in center.
- Search form has, input field with only border bottom and a submit button label with SVG.  
-- The search form should has a dynamic width and fill the space between left items and the logo.  
--- The search form has always space of 110px on the right to the log and 90px on the left to the items.  
- Please use media query for mobile devices ( smaller than 720px )  
--- on the right only icons without labels.  
--- logo on the left side.  
--- search form should be hidden.  
--- items on the left side should be hidden.    
- Other adjustments is up to you just fairly close to what we provide in the Screen. 