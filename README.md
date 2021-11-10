# CovoiturageApp



## Project description

Our-Application is a carpooling application that provides drivers with the ability 
to create ride offers and passengers to join available ride offers.
#### Realized by : 
- Hajji Mouhamed Emir
- Ketata Melek
- Ben abdelmalek Sarra
- Soula Erij
- Laabidi Hend
- Ramdhane Moez
- Henia Oussama

To create this application, we used an **existing API** called **Mapbox**: 
- The Mapbox web services APIs allow you to programmatically access Mapbox tools and services. You can use these APIs to retrieve information about your account, 		upload and change resources, use core Mapbox tools, and more. Mapbox APIs are divided into four distinct services: Maps, Navigation, Search, and Accounts.To download MapBox click [here](https://www.mapbox.com/) 
	


### Application Features
- Authentication
- Creating Rides
- Send request to join an existing ride
- Accept/ reject a ride request

## A user can perform the following

### As a passenger:
- Log In / Sign In	
- Can view all ride offers
- Can create a ride offer
- Can view a specific ride offer
- Make a request to join a ride.
- locate the position of his driver

### As a driver:
- Log In / Sign In
- Create a ride offer
- Can accept/reject ride request
- locate the position of a client


# Getting started with the app

## Technologies used to build the application
- [Python 3.8](https://www.python.org/downloads/)
- Flask
- [Firebase](https://firebase.google.com/?gclid=EAIaIQobChMIhobSiYeL9AIVCc13Ch3zMQB4EAAYASAAEgKRofD_BwE&gclsrc=aw.ds)
- [React native](https://reactnative.dev/)
- [Mapbox](https://www.mapbox.com/)
- [Android Studio](https://developer.android.com/studio?hl=fr&gclid=CjwKCAiA1aiMBhAUEiwACw25MXQ0piMVuICCZWNXMYBGVxAOE4iGoeoOxT_048KowH47HwWLb71czBoCN8UQAvD_BwE&gclsrc=aw.ds)

## Installation
### 1. Installer [Node Js](https://nodejs.org/en/download/)

### 2. Create a new directory and initialize git in it. Clone this repository using the link
	$ https://github.com/raizo123/covoiturage.git
### 3. Open the project On vsCode 
	$ code.
### 4. MapBox configuration
- Create a mapbox Account
- Scroll down to the access tokens and create a new token 
![mapbox](https://user-images.githubusercontent.com/87801601/140905629-b3783aa2-f0b4-4619-bfc3-bf19c27a55b5.PNG) 
### 5. Create a real time database for your project on Firebase
- To be able to use [firebase](https://firebase.google.com/?gclid=EAIaIQobChMIhobSiYeL9AIVCc13Ch3zMQB4EAAYASAAEgKRofD_BwE&gclsrc=aw.ds) you must have a Gmail account
- Now you can start your project  
![255102617_2914590792188250_1032679088386405656_n](https://user-images.githubusercontent.com/87801601/140905968-0f5eb817-2046-4424-bfe5-2c58b7c4930b.png)
### 6. Configure your enviroment 
- Create a file called ".env" in the root folder of your project.
- Import and inject your secret keys into the .env file containing your Mapbox and Firebase in this way.
```
	REACT_APP_FIREBASE_API_KEY=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
	REACT_APP_FIREBASE_AUTH_DOMAIN=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
	REACT_APP_FIREBASE_DATABASE_URL=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
	REACT_APP_FIREBASE_STORAGE_BUCKET=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
	REACT_APP_FIREBASE_PROJECT_ID=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx

	REACT_APP_MAP_BOX_API_KEY=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
```

### 7.  Install the dependencies and Start the application 
	$ npm install 
	$ react-native run-android
## A quick view of the Application 
1. Home Page: 
- ![1](https://user-images.githubusercontent.com/87801601/140884920-fd8b5669-1aae-49cb-a191-0ae39954294a.png) 
2. LogIn page: 
- ![2](https://user-images.githubusercontent.com/87801601/140885150-0cee5044-9727-4c00-8bdf-6c7e53963479.png) 
3. Sign In page: 
- ![3](https://user-images.githubusercontent.com/87801601/140885125-2d3e240f-ff8c-4e14-9f34-35fc66cf32fd.png) 
4. Account page: 
- ![4](https://user-images.githubusercontent.com/87801601/140885127-6d0d83ab-b461-48e5-be4d-ccb5ca9a115a.png) 
5. Propose a ride: 
- ![5](https://user-images.githubusercontent.com/87801601/140885134-12a8ed4c-a9e9-4763-8cbf-d4f678c1c7cf.png) 
6. Search page:
- ![6](https://user-images.githubusercontent.com/87801601/140885136-113ae984-aa50-4f2f-b654-07d75432fdf9.png)



 ## 
<img src ="https://user-images.githubusercontent.com/87801601/140917992-8bd79750-da92-4476-8d0e-335ce6d1a6f4.png" width = 60 hight = 60 />  This project has been saved as a docker image <img src = "https://user-images.githubusercontent.com/87801601/140916853-5529cd93-740d-4553-aa1b-9c47b799e961.png" width = 20 height = 20 /> to be used as a service directly.
- You can download the Image using this pulling request : 
		`docker pull usamahenia/doc-flask`



