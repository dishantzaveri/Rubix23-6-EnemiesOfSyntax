from rest_framework import serializers
from .models import *

class ElectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Election
        fields = '__all__'

class CandidateSerializer(serializers.ModelSerializer):

    class Meta:
        model = OpenCandidate
        fields = '__all__'