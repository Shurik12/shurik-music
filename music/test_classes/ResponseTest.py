from django.test import TestCase, Client

from music.models import *
import json

class ResponseTest(TestCase):

	def setUp(self):
		self.client = Client(enforce_csrf_checks=True)

	def test_shurik_music(self):
		response = self.client.get("/music/shurik_music")
		self.assertEqual(response.status_code, 200)

	def test_categories(self):
		response = self.client.get("/music/categories")
		self.assertEqual(response.status_code, 200)

	def test_category(self):
		response = self.client.get("/music/categories/Rock")
		self.assertEqual(response.status_code, 200)

	def test_author(self):
		response = self.client.get("/music/authors/Rammstein")
		self.assertEqual(response.status_code, 200)

	def test_profile(self):
		User.objects.create(username="shurik", password="12345", email="alex@mail.ru")
		response = self.client.get("/music/profiles/shurik")
		self.assertEqual(response.status_code, 200)