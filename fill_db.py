from music.models import *

tracks = {
	"Rammstein": {
		"year": 1994,
		"station": "Metal",
		"songs": ["Sonne", "Mutter"]
	},
	"Цой": {
		"year": 1981,
		"station": "Rock",
		"songs": ["Звезда", "Пачка сигарет", "Перемен", "Стук"]
	},
	"Ария": {
		"year": 1985,
		"station": "Classical",
		"songs": ["Беспечный ангел", "Штиль", "Я свободен", "Темная башня"]
	},
	"Scorpions": {
		"year": 1965,
		"station": "Jazz",
		"songs": ["Still loving you", "The wind of change"]
	}
}

categories = ["Rock", "Pop", "Classical", "Jazz", "Bardic", "Punk", "Metal"]
for category in categories:
	station = Station(name=category)
	station.save()

for group in tracks.keys():
	author = Author(name=group, year=tracks[group]["year"])
	author.save()
	station = Station.objects.get(name=tracks[group]["station"])
	for song in tracks[group]["songs"]:
		track = Track(name=song, author=author)
		track.save()
		track.station.add(station)
		track.save()