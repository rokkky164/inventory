from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from inventory.models import Inventory

@login_required(login_url="login/")
def home(request):
    inventory = Inventory.objects.all().select_related('item')
    return render(request,"home.html", {'inventory': inventory, 'user':request.user})
