from django.urls import path
from . import views

urlpatterns = [
    path('election/', views.ElectionsView.as_view(), name = 'Election'),
]