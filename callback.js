function getuser(id,callback){
    setTimeout(() => {
        console.log("user fetched");
        const user = {
            id : 101,
            username : "mukesh"
        }
        callback(null, user);
    }, 2000);
}
function getprofile(id, callback){
    setTimeout(() => {
        console.log("profile fetched");
        const profile = {
            username : "mukesh",
            location : "Ghaziabad"
        }
        callback(null, profile);
    }, 2000);
}

function getPosts (username, callback){
    setTimeout(() => {
        console.log("posts fetched");
        const posts = ["post1", "post2", "post3"];
        callback(null, posts);
    }, 2000);
}
getuser(1, function(error, user) {
    if(error){
        console.log(error);
        return;
    }
    getprofile(user.id, function(error, profile){
        if(error){
            console.log(error);
            return;
        }
        getPosts(profile.username, function(error, posts){
            if(error){
                console.log(error);
                return;
            }
            console.log(`Fetched Posts ${posts}`);
    
        });
    });
});
