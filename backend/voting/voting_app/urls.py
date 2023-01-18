from django.urls import path
from . import views

urlpatterns = [
    path('election/', views.ElectionView.as_view(), name = 'Election'),
]