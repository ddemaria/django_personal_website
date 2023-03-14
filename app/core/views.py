from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.db import connections
from django.conf import settings

def home(request):
    template = loader.get_template('home.html')
    with connections['nlp_data'].cursor() as cursor:
        cursor.execute("SELECT tweet_object_text FROM twitter_mining_data")
        data = cursor.fetchall()
    for item in data:
        print(item)
    return render(request, "home.html")

def about(render):
    template = loader.get_template('about.html')
    return HttpResponse(template.render())

def sorting(render):
    template = loader.get_template('sorting.html')
    return HttpResponse(template.render())

def pathfinding(render):
    template = loader.get_template('pathfinding.html')
    return HttpResponse(template.render())