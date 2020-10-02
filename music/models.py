from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField
from django.db import models

class User(AbstractUser):
	pass

class Track(models.Model):
	name = models.CharField(max_length=100)
	author = models.CharField(max_length=100)
	like = models.ManyToManyField(User,  blank=True, related_name="like_user")
	def serialize(self):
		return {
			"id": self.id,
			"name": self.name,
			"author": self.author
		}

class Station(models.Model):
	name = models.CharField(max_length=100)
	track = models.ManyToManyField(Track,  blank=True, related_name="station_track")

class Profile(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	like = models.ManyToManyField(Track,  blank=True, related_name="like_track")
	station = models.ManyToManyField(Station,  blank=True, related_name="user_station")

