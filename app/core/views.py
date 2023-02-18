from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def home(render):
    template = loader.get_template('base.html')
    return HttpResponse(template.render())