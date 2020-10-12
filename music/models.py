from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField
from django.db import models

class User(AbstractUser):
	def serialize(self):
		tracks = []
		for track in self.track_set.all():
			tracks.append(track.serialize())
		return {
			"tracks": tracks
		}

class Author(models.Model):
	name = models.CharField(max_length=100)
	year = models.CharField(max_length=4)
	def serialize(self):
		tracks = []
		for track in self.track_set.all():
			tracks.append(track.name)
		return {
			"id": self.id,
			"name": self.name,
			"year": self.year,
			"tracks": tracks
		}

class Station(models.Model):
	name = models.CharField(max_length=100)
	def serialize(self):
		return {
			"name": self.name
		}

class Track(models.Model):
	name = models.CharField(max_length=100)
	author = models.ForeignKey(Author, on_delete=models.CASCADE)
	station = models.ManyToManyField(Station)
	like = models.ManyToManyField(User)
	def serialize(self):
		likes = []
		for l in self.like.all():
			likes.append(l.username)
		return {
			"id": self.id,
			"name": self.name,
			"author": self.author.name,
			"like": likes
		}

class Profile(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	station = models.ManyToManyField(Station)

