from django.db import IntegrityError

from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect,JsonResponse
from django.core.paginator import Paginator
from django.views.decorators.csrf import csrf_exempt #  проверка сертификатов
from django.utils import timezone
import ast # для преобразования byte данных из пост запроса

from .models import *
from .methods.auth import logout_view, register, login_view

@csrf_exempt
def shurik_music(request):
	user = request.user.username
	tracks = Track.objects.all()
	context = {
		"tracks": [track.serialize() for track in tracks],
		"user": user
	}
	return JsonResponse(context)

@csrf_exempt
def like_track(request):
	user = request.user
	track = ast.literal_eval(request.body.decode("UTF-8")) # data = repr(b)
	track = Track.objects.get(name=track["name"])
	if user in track.like.all():
		track.like.remove(user)
	else:
		track.like.add(user)
	track.save()
	return JsonResponse({})

@csrf_exempt
def like_author(request):
	user = request.user
	author = ast.literal_eval(request.body.decode("UTF-8")) # data = repr(b)
	author = Author.objects.get(name=author["name"])
	if user in author.like.all():
		author.like.remove(user)
	else:
		author.like.add(user)
	author.save()
	return JsonResponse({})

@csrf_exempt
def categories(request):
	user = request.user.username
	categories = Station.objects.all()
	context = {
		"categories": [category.serialize() for category in categories],
		"user": user
	}
	return JsonResponse(context)

@csrf_exempt
def category(request, category):
	user = request.user.username
	station = Station.objects.get(name=category) 
	tracks = station.track_set.all()
	context = {
		"tracks": [track.serialize() for track in tracks],
		"user": user
	}
	return JsonResponse(context)

@csrf_exempt
def author(request, author):
	username = request.user.username
	author = Author.objects.get(name=author)
	context ={
		"username": username,
		"author": author.serialize()
	}
	return JsonResponse(context)

@csrf_exempt
def profile(request, username):
	user = User.objects.get(username=username)
	user = user.serialize()
	context ={
		"user": username,
		"tracks": user["tracks"],
		"authors": user["authors"]
	}
	return JsonResponse(context)

@csrf_exempt
def login_view(request):

	data = ast.literal_eval(request.body.decode("UTF-8")) # data = repr(b)
	# Attempt to sign user in
	username = data["username"]
	password = data["password"]
	user = authenticate(request, username=username, password=password)

	# Check if authentication successful
	if user is not None:
		login(request, user)
		context = {
			"username": username,
			"auth" : True,
			"message": ""
		}
	else:
		context = {
			"username": "",
			"auth" : False,
			"message": "Invalid username and/or password."
		}
	return JsonResponse(context)

@csrf_exempt
def logout_view(request):
	print("logout")
	logout(request)
	return JsonResponse({})

@csrf_exempt
def register(request):

	data = ast.literal_eval(request.body.decode("UTF-8")) # data = repr(b)
	username = data["username"]
	email = data["email"]
	password = data["password"]
	confirmation = data["confirmation"]

	if password != confirmation:
		context = {
			"username": "",
			"auth" : False,
			"message": "Passwords must match."
		}

	# Attempt to create new user
	else:
		try:
			user = User.objects.create_user(username, email, password)
			user.save()
			login(request, user)
			context = {
				"username": username,
				"auth" : True,
				"message": ""
			}
		except IntegrityError:
			context = {
				"username": "",
				"auth" : False,
				"message": "Username already taken."
			}
	
	return JsonResponse(context)