from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'opencandidate', views.OpenCandidateViewSet)
router.register(r'closedcandidate', views.ClosedCandidateViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('election/', views.ElectionsView.as_view(), name = 'Election'),

]