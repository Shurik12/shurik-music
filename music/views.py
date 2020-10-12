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
def author(request):
	if request.method == "POST":
		author = get_data_from_request()
		author = Author.objects.get(name=author)
		context ={
			"author": author.serialize()
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
			"auth" : True,
			"message": ""
		}
	else:
		context = {
			"auth" : False,
			"message": "Invalid username and/or password."
		}
	return JsonResponse(context)

@csrf_exempt
def logout_view(request):
	print("logout")
	logout(request)

@csrf_exempt
def register(request):

	data = ast.literal_eval(request.body.decode("UTF-8")) # data = repr(b)
	username = data["username"]
	email = data["email"]
	password = data["password"]
	confirmation = data["confirmation"]

	if password != confirmation:
		context = {
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
				"auth" : True,
				"message": ""
			}
		except IntegrityError:
			context = {
				"auth" : False,
				"message": "Username already taken."
			}
	
	return JsonResponse(context)