from django.db import models

# Create your models here.
class Election(models.Model):
    election_name = models.CharField(max_length=255)