from django.test import TestCase
from django.core.exceptions import ObjectDoesNotExist
from django.db import IntegrityError

from music.models import User, Author, Station, Track # import all creating models

class AuthorTest(TestCase):

	@classmethod
	def setUpTestData(cls):
		# "setUpTestData: Run once to set up non-modified data for all class methods."
		User.objects.create(username="user1", password="password1", email="user1@mail.ru")
		User.objects.create(username="user2", password="password2", email="user2@mail.ru")

	def setUp(self):
		# "setUp: Run once for every test method to setup clean data."
		User.objects.create(username="Shurik", password="12345", email="alex@mail.ru")
		User.objects.create(username="foo", password="bar", email="foo@mail.ru")

	def test_select_exist(self):
		author = Author.objects.get(name='Rammstein')
		self.assertEqual(author.name, 'Rammstein')

	def test_select_not_exist(self):
		try:
			author = Author.objects.get(name='dsfbdskjb')
			print("Object not exist:" + author)
		except ObjectDoesNotExist as e:
			pass

	def test_insert_not_exist(self):
		count_authors = Author.objects.count()
		author = Author(name='sdvhsdav', year=2020)
		author.save()
		count_authors_new = Author.objects.count()
		self.assertEqual(count_authors_new, count_authors+1)

	def test_insert_exist(self):
		try:
			author = Author.objects.create(name='Rammstein', year='2123')
			print("Duplicate")
		except IntegrityError as e:
			pass

	def test_like(self):
		author = Author(name="aaaaaaaaaa", year=1111)
		author.save()
		u1 = User.objects.get(username='Shurik')
		u2 = User.objects.get(username='foo')
		author.like.add(u1, u2)
		author.save()
		self.assertEqual(author.like.count(), 2)
