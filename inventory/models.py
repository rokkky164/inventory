from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Item(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=255)
    added_on = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.name

class Inventory(models.Model):
    item = models.OneToOneField(Item)
    quantity = models.SmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(10000)])
    added_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)
    updated_by = models.ForeignKey(User)

    def __unicode__(self):
        return unicode(self.item) + " - " + unicode(self.quantity)

    class Meta:
        verbose_name_plural = 'Inventory'

