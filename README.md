# node.js Post base64 Image API

This small node.js app stores a base64 payload as an image on your local storage using node.js's fs(fs-extra to be precise).
It also supports nested directories and the image format.

It removes any extra info sent in the base64Data parameter ("data:image/jpg;base64,").  

**In order to call the POST API you must use this URL:**

``http://localhost:3000/api/uploadImage``

**This is an example payload for posting an image**
```
{
	"base64Data": "data:image/png;base64,iVBORw0KGgoAAAANSUhE",
	"imageFormat": "jpeg",
	"userID": "4"
}
```
The userID parameter is used to created a sub-folder. 
For instance, the JSON above will create a jpeg image
in this directory : ``C:\image\4\profileImage.jpeg``


**In order to start the API Server just run :**
```node index.js```
