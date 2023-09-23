from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('sorting/', views.sorting, name='sorting'),
    path('tutorials/', views.tutorials, name='tutorials'),
    path('pathfinding/', views.pathfinding, name='pathfinding'),
    path('objectrecognition/', views.objectrecognition, name='objectrecognition'),
]