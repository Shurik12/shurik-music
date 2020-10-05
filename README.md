# Shurik-musik application
Django+React.js applcation.
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
npm run dev
python manage.py runserver
```
