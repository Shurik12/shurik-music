# Shurik-musik application
Django+React.js applcation.
## Description
1. It is a music single-page application. In future will playing audios, tracks.  
2. Backend part was written on Django. Contains 4 models: User (store information about users), Author (store information about authors and groups), Station (store information about categories and stations) and Track (store information about tracks). Also there are any relations between models. Contains the next views shurik_music, like_track, like_author, categories, category, author, profile, login_view, logout_view, register, which send information to fronend part (React) using json format.
3. Frontend part was written on React. Conteins 9 components: WelcomePage (start page with some animation), App (main component with navbar and routing), AllMusic (display all tracks), Categories (display categories), Category (display earch category separately), Author (display earch music author and group separatly), Profile (display page of user), ListSong and Song. There is main.js, with compile front app. 

## Summary of steps:
* Create REST-API;
* Set up a build system for the frontend;
* Write scripts and styles.

### Process of creation:
1. Create Django in virtual enviroment
	1. Create direcory of project and navigate to it:
	```bash
	mkdir djangoReactAPI && cd $_
	```
	2. Activate virtual environment
	```bash
	python3 -m venv venv
	source venv/bin/activate
	```
	3. Install libs and create project
	```bash
	pip install django djangorestframework
	django-admin startproject shurik-music
	django-admin startapp music
	```
	4. Create db in psql for this project
	5. Library for testng and commands
	```bash
	pip install coverage
	coverage run --source='.' manage.py test
	coverage html
	coverage report
	```


2. Install React and webpack
	1. Create a new app Django for frontend part
	```bash
	django-admin startapp frontend
	```
	2. Let's prepare folders for storing React components and static:
	```bash
	mkdir -p ./frontend/src/components
	mkdir -p ./frontend/{static,templates}/frontend
	```
	3. Install React, webpack, babel. Go to the frontend folder and create an environment:
	```bash
	cd ./frontend && npm init -y
	```
	Install webpack and webpack cli:
	```bash
	npm i webpack webpack-cli --save-dev
	```
	Open package.json and write 2 scripts for prod and develop:
	```html
	"scripts": {
	  "dev": "webpack --mode development ./src/index.js --output ./static/frontend/main.js",
	  "build": "webpack --mode production ./src/index.js --output ./static/frontend/main.js"
	}
	```
	Install babel to make the code compatible with older browsers that don't support the latest JavaScript standards:
	```bash
	npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
	```
	Install React
	```bash
	npm i react react-dom --save-dev
	```

### Run application
```bash
source venv/bin/activate
cd frontend
npm run dev
cd ..
python manage.py runserver
```
