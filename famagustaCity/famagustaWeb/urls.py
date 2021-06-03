from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('index', views.index, name="home" ),
    path('map', views.maps, name="maps"),
    path('contact', views.contact, name="contact"),
    path('mayor', views.mayor, name="mayor"),
    path('council', views.council, name="council"),
    path('history', views.history, name="history"),
    path('news', views.news, name="news"),
    path('reading', views.singlepage, name="reading"),
    path('thankyou', views.thankYou, name="Thankyou"),
    path('announcements', views.annouce, name="annoucement"),
    


] 