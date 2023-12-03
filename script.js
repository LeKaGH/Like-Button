like = document.getElementById("like");
liked = document.getElementById("liked");

likes = 0;
likedBool = false;

like.addEventListener("click", function(){
    if(likedBool == false) {
        likes = likes + 1;
        likedBool = true;
        like.style.display = "none";
        liked.style.display = "block";
        likes = likes + 1;
    }
});

liked.addEventListener("click", function(){
    if(likedBool == true){
        likes = likes - 1;
        likedBool = false;
        like.style.display = "block";
        liked.style.display = "none";
    };
});