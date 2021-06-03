from django.db import models
import uuid

class Locations(models.Model):
    locationID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    locationName = models.CharField(max_length=200)
    locationPhone = models.BigIntegerField()
    locationAddress = models.CharField(max_length=200)

class Messages(models.Model):
    messageID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    Name = models.CharField(max_length=200)
    Email = models.EmailField(max_length=200)
    Message = models.CharField(max_length=5000)

class newsletters(models.Model):
    email=models.EmailField(max_length=200)


# Create your models here.
