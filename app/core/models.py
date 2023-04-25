from django.db import models


class Sample(models.Model):
    attachment = models.FileField()

class TerryVideo(models.Model):
    video = models.FileField(upload_to='media')

