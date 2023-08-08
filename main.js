let posts = [];
let user = {
    lastActivity: null
};

function createPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST' });
            resolve();
        }, 1000);
    });
}

function createPost2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST2' });
            resolve();
        }, 1000);
    });
}
function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                posts.pop();
                resolve();
            } else {
                reject("No posts to delete.");
            }
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivity = new Date().toISOString();
            console.log("User's last activity time updated:", user.lastActivity);
            resolve();
        }, 1000);
    });
}

Promise.all([createPost(),createPost2(), updateLastUserActivityTime()])
    .then(() => {
        console.log("Posts created:", posts);

        // Delete the last post
        deleteLastPost()
            .then(() => {
                console.log("Last post deleted.");
                console.log("Updated posts:", posts);
            })
            .catch((error) => {
                console.error("Error deleting post:", error);
            });
})
    .catch((error) => {
        console.error("Error:", error);
});