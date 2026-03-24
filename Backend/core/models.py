from django.db import models

class User(models.Model):
    ROLE_CHOICES = (
        ('driver', 'Driver'),
        ('client', 'Client'),
    )

    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    def __str__(self):
        return self.name


class Ride(models.Model):
    STATUS = (
        ('requested', 'Requested'),
        ('accepted', 'Accepted'),
        ('started', 'Started'),
        ('completed', 'Completed'),
    )

    client = models.ForeignKey(User, on_delete=models.CASCADE, related_name='client_rides')
    driver = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    pickup = models.CharField(max_length=200)
    destination = models.CharField(max_length=200)
    status = models.CharField(max_length=20, choices=STATUS)

    def __str__(self):
        return f"{self.pickup} → {self.destination}"


