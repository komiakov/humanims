from django.shortcuts import render

def dashboardView(request):
    return render(request, 'basic/dashboard.html')

def databasesView(request):
    return render(request, 'basic/databases.html')

def reportsView(request):
    return render(request, 'basic/reports.html')

def settingsView(request):
    return render(request, 'basic/settings.html')
