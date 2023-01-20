from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'candidate', views.CandidateViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('election/', views.ElectionsView.as_view(), name = 'Election'),

]