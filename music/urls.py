from django.urls import path

from . import views

app_name = 'music'

urlpatterns = [
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("shurik_music", views.shurik_music, name="shurik_music"),
    path("profiles/<str:username>", views.profile, name="profile"),
    path("categories", views.categories, name="categories"),
    path("categories/<str:category>", views.category, name="category"),
    path("authors/<str:author>", views.author, name="author"),
    path("like_track", views.like_track, name="like_track")
    # path("profile/<str:username>", views.profile, name="profile"),
]
