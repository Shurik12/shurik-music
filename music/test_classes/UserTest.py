from django.test import TestCase
from django.core.exceptions import ObjectDoesNotExist
from django.db import IntegrityError

from music.models import User

class UserTest(TestCase):

	@classmethod
	def setUpTestData(cls):
		# "setUpTestData: Run once to set up non-modified data for all class methods."
		User.objects.create(username="user1", password="password1", email="user1@mail.ru")
		User.objects.create(username="user2", password="password2", email="user2@mail.ru")
		User.objects.create(username="user3", password="password3", email="user3@mail.ru")
		User.objects.create(username="user4", password="password4", email="user4@mail.ru")
		

	def setUp(self):
		# "setUp: Run once for every test method to setup clean data."
		User.objects.create(username="Mike", password="1234", email="mike@mail.ru")
		User.objects.create(username="Nikole", password="321", email="nikole@mail.ru")
		User.objects.create(username="Shurik", password="12345", email="alex@mail.ru")
		User.objects.create(username="foo", password="bar", email="foo@mail.ru")

	def test_select_exist(self):
		user = User.objects.get(username='Shurik')
		self.assertEqual(user.username, 'Shurik')

	def test_select_not_exist(self):
		try:
			user = User.objects.get(username='dsfbdskjb')
		except ObjectDoesNotExist as e:
			pass

	def test_insert_not_exist(self):
		count_users = User.objects.count()
		self.assertEqual(count_users, 8)
		user = User(username="foo1", password="bar1", email="foo1@mail.ru")
		user.save()
		count_users = User.objects.count()
		self.assertEqual(count_users, 9)

	def test_insert_exist(self):
		try:
			user = User.objects.create(username="foo", password="bar", email="foo@mail.ru")
		except IntegrityError as e:
			pass