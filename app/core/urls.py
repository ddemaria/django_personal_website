from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('sorting/', views.sorting, name='sorting'),
    path('pathfinding/', views.pathfinding, name='pathfinding'),
]