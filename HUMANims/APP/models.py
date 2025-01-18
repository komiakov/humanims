from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    hmnUsername = models.CharField(max_length=90, null=False, blank=False, unique=True, verbose_name="Username")

    hmnLastName = models.CharField(max_length=124, verbose_name="Last name")
    hmnFirstName = models.CharField(max_length=124, verbose_name="First name")

    position = models.CharField(max_length=256, verbose_name="Position")
    