from django.contrib import admin
from .models import Messages,Locations

class MessagesAdmin(admin.ModelAdmin):
    list_display = ("Name", "Email", "Message")

admin.site.register(Messages,MessagesAdmin)

class LocationsAdmin(admin.ModelAdmin):
    list_display = ("locationID","locationName","locationPhone","locationAddress")
    
admin.site.register(Locations,LocationsAdmin)
# Register your models here.
