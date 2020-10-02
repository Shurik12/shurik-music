from django.urls import path

from . import views

app_name = 'music'

urlpatterns = [
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("shurik_music", views.shurik_music, name="shurik_music"),
    # path("profile/<str:username>", views.profile, name="profile"),
]
