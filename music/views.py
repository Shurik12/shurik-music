from django.db import IntegrityError

from django.http import HttpResponse, HttpResponseRedirect,JsonResponse
from django.core.paginator import Paginator
from django.views.decorators.csrf import csrf_exempt #  проверка сертификатов
from django.utils import timezone
import ast # для преобразования byte данных из пост запроса

from .models import *
from .methods.auth import logout_view, register, login_view

@csrf_exempt
def shurik_music(request):
	tracks = Track.objects.all()
	context = {
		"tracks": [track.serialize() for track in tracks],
	}
	print(context)
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