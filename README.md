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