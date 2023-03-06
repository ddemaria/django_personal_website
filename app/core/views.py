from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def home(render):
    template = loader.get_template('home.html')
    return HttpResponse(template.render())

def about(render):
    template = loader.get_template('about.html')
    return HttpResponse(template.render())

def sorting(render):
    template = loader.get_template('sorting.html')
    return HttpResponse(template.render())

def pathfinding(render):
    template = loader.get_template('pathfinding.html')
    return HttpResponse(template.render())