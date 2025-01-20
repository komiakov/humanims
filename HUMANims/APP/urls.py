from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboardView, name="dashboardUrl"),
    path('databases/', views.databasesView, name="databasesUrl"),
    path('databases/new/', views.databasesCreateNewView, name="databasesCreateNewUrl"),
    path('reports/', views.reportsView, name="reportsUrl"),
    path('settings/', views.settingsView, name="settingsUrl"),
]
