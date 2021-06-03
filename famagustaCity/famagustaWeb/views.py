from django.shortcuts import render
from django.http import HttpResponse
from .models import Messages,Locations, newsletters

def index(request):
    if request.method=="POST":
       email1 = request.POST.get("newsletter")
       newslet = Messages(email=email1)
       newslet.save()

    return render(request,"index.html")

def maps(request):
    places = Locations.objects.all()
    placesList =list(places)
    
    return render(request,"map.html",{'location':places})

def contact(request):
    if request.method=="POST":
       
        name = request.POST.get("inputName")
        email = request.POST.get("inputEmail")
        mess = request.POST.get("inputMessage")

        contct = Messages(Name=name, Email=email, Message=mess)
        contct.save()
         
        
    return render(request,"contactpg.html")

def mayor(request):
    return render(request,"mayor.html")

def council(request):
    return render(request,"council.html")

def history(request):
    return render(request,"history.html")

def news(request):
    return render(request,"newshome.html")

def singlepage(request):
    return render(request,"single-page.html")

def thankYou(request):
    return render(request,"thankyoupg.html")

def annouce(request):
    return render(request, "annoucements.html")


# Create your views here.
