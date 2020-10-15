from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField
from django.db import models

class User(AbstractUser):
	def serialize(self):
		tracks = []
		for track in self.track_set.all():
			tracks.append(track.serialize())
		authors = []
		for author in self.author_set.all():
			authors.append(author.name)
		return {
			"tracks": tracks,
			"authors": authors
		}

class Author(models.Model):
	name = models.CharField(max_length=100, unique=True)
	year = models.CharField(max_length=4)
	like = models.ManyToManyField(User)
	def serialize(self):
		tracks = []
		for track in self.track_set.all():
			tracks.append(track.name)

		likes = []
		for user in self.like.all():
			likes.append(user.username)
		return {
			"id": self.id,
			"name": self.name,
			"year": self.year,
			"tracks": tracks,
			"likes": likes
		}

class Station(models.Model):
	name = models.CharField(max_length=100, unique=True)
	def serialize(self):
		return {
			"name": self.name
		}

class Track(models.Model):
	name = models.CharField(max_length=100, unique=True)
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