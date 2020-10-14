# Generated by Django 3.1.1 on 2020-10-13 10:07

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0002_auto_20201013_0847'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='like',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
        migrations.DeleteModel(
            name='Profile',
        ),
    ]
