from django.db import models
import re
from django.core.exceptions import ValidationError

def pan_validator(value):
    pattern = "^[A-Z]{5}[0-9]{4}[A-Z]{1}$"
    if not re.match(pattern, value):
        raise ValidationError(
            "Invalid PAN Number"
        )

# Create your models here.
class Election(models.Model):
    election_name = models.CharField(max_length=255)

class OpenCandidate(models.Model):
    election = models.ForeignKey(Election,on_delete = models.CASCADE)
    name = models.CharField(max_length=255)
    pan = models.CharField(max_length=10, validators=[pan_validator])
    party  = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    is_accepted = models.BooleanField(default=False)

class ClosedCandidate(models.Model):
    election = models.ForeignKey(Election,on_delete = models.CASCADE)
    name = models.CharField(max_length=255)
    pan = models.CharField(max_length=10, validators=[pan_validator])
    party  = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    is_accepted = models.BooleanField(default=False)