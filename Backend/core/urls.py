from django.urls import path
from . import views

urlpatterns = [
    path('available/', views.available_rides),
    path('accept/', views.accept_ride),
    path('start/', views.start_ride),
    path('end/', views.end_ride),
]