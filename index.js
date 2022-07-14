
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];


const mainEl = document.getElementById("main");

function mainRender(){
    let main = "";
    for(let i = 0 ; i < posts.length ; i++){

        main += `                
        <section class="post">
            <div class="post-head">
                <img class="avatar profile-pic" src="" alt="">
                <div class="head-content">
                    <p class="bold-text name"></p>
                    <p class="location"></p>
                </div>
            </div>
            <img class="post-img" src="" alt="Vincent van Gogh Post">
            <div class="post-icons">
                <img class="heart-like" src="./images/icon-heart.png" alt="Heart Icon">
                <img class="heart-filled remove-like" src="./images/icon-heart-filled.png" alt="Heart Icon Filled">
                <img src="./images/icon-comment.png" alt="Comment Icon">
                <img src="./images/icon-dm.png" alt="Personal Message Icon">
            </div>
            <p class="bold-text likes-number"><span class="likesEl"></span>,<span class="like-increased">492</span> likes</p>
            <p class="comment-section"><span class="bold-text comments username"></span> <span class="comment"></span></p>
            <div class="next-space"></div>
        </section>`
    }
    mainEl.innerHTML = main;
}

function renderPost(){
    const nameEl = document.querySelectorAll(".name");
    const locationEl = document.querySelectorAll(".location");
    const postEl = document.querySelectorAll(".post-img");
    const likesEl = document.querySelectorAll(".likesEl");
    const usernameEl = document.querySelectorAll(".username");
    const commentEl = document.querySelectorAll(".comment");
    const avatarEl = document.querySelectorAll(".avatar");

    for(let i = 0 ; i < posts.length ; i++){
        nameEl[i].textContent = posts[i].name;
        locationEl[i].textContent = posts[i].location;
        avatarEl[i].src = posts[i].avatar;
        postEl[i].src = posts[i].post;
        likesEl[i].textContent = posts[i].likes;
        commentEl[i].textContent = posts[i].comment;
        usernameEl[i].textContent = posts[i].username;
    }
};

mainRender();
renderPost();

// like button 

function likedPhoto(empty,filled){
    empty.classList.add("remove-like");
    filled.classList.remove("remove-like");
}

function likeIncreaseFn(liked,likedEl){
    liked = parseInt(likedEl.textContent);
    liked++;
    likedEl.textContent = liked.toString();
}

function likeDecreaseFn(liked,likedEl){
    liked = parseInt(likedEl.textContent);
    liked--;
    likedEl.textContent = liked.toString();
}

function likePictureFn(personPost,i,personLiked,personUnliked,pLikedEl) {
    personPost = document.querySelectorAll(".post-img")[i];
    personLiked = document.querySelectorAll(".heart-filled")[i];
    personUnliked = document.querySelectorAll(".heart-like")[i];
    pLikedEl = document.querySelectorAll(".like-increased")[i];
    let liked;
    let isLiked = false;
    
    personPost.addEventListener("dblclick", () => {
        if(isLiked){
            likedPhoto(personLiked,personUnliked);
            likeDecreaseFn(liked,pLikedEl);
            isLiked = false;
        } else {
            likedPhoto(personUnliked,personLiked);
            likeIncreaseFn(liked,pLikedEl);
            isLiked = true;
        }
    })
    
    personUnliked.addEventListener("click", () => {
        likedPhoto(personUnliked,personLiked);
        likeIncreaseFn(liked,pLikedEl);
    })
    
    personLiked.addEventListener("click", () => {
        likedPhoto(personLiked,personUnliked);
        likeDecreaseFn(liked,pLikedEl);
    })
}


// vincent van Gogh 

let vincentPost, i = 0 , vincentLiked, vincentUnliked, vLikedEl;
likePictureFn(vincentPost,i,vincentLiked,vincentUnliked,vLikedEl)


// Gustave Courbet

let gustavePost, g = 1 , gustaveLiked, gustaveUnliked, gLikedEl;
likePictureFn(gustavePost,g,gustaveLiked,gustaveUnliked,gLikedEl)

// Joseph Ducreux

let josephPost, j = 2 , josephLiked, josephUnliked, jLikedEl;
likePictureFn(josephPost,j,josephLiked,josephUnliked,jLikedEl)


