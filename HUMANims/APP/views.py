from django.shortcuts import render

def dashboardView(request):
    return render(request, 'basic/dashboard.html')
