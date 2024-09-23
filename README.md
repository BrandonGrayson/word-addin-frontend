# word-addin-frontend

## Start the app
Start the app by running npm start in the projects route directory

## Templates
Should see 3 templates inside the sidebar taskpane Basic contract, Advanced Contract, and business contract.

## How the app works
As you click on the 3 contracts they cycle through the word document

## Main Components to look through
The HeroList components is what renders inside the side task pane. App component is the projects home file

## Stop the application
run npm stop in the projects route Directory to stop the application

## Api Endpoint Error
Currently there is an error with retrieving the data from the server. I intially tried making a regular fetch request using the fetch api and noticed I was getting back undefined. After some Googleing I ran across this documentation from microsoft https://answers.microsoft.com/en-us/msoffice/forum/all/how-do-i-call-an-api-endpoint-in-my-word-add-in/eddd5c13-b670-48ea-ab90-2583e111e92c. And made adjustments to use this code and the Word object to make the request, as well as changed the backend to use HTTPS which is why you see a server cert and key file However neither of these changes ended up working.
