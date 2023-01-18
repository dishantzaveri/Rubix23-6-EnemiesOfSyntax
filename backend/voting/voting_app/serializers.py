from rest_framework import serializers
from .models import *

class ElectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Election
        fields = '__all__'