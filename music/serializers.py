from rest_framework import serializers
from .models import *

class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = ('id', 'name', 'author', 'like')