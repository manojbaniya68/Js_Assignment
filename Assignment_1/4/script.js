function fetchUserProfile(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: 'Manoj Baniya', email: 'manoj88@gmail.com' });
            } else {
                reject(new Error('User profile not found'));
            }
        }, 1000); 
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve([
                    { id: 1, title: 'Post 1', body: 'This is the first post' },
                    { id: 2, title: 'Post 2', body: 'This is the second post' }
                ]);
            } else {
                reject(new Error('User posts not found'));
            }
        }, 1500);
    });
}


function getUserData(userId) {
    return new Promise((resolve, reject) => {
        fetchUserProfile(userId)
            .then(profile => {
                return fetchUserPosts(userId)
                    .then(posts => {
                        const userData = {
                            profile,
                            posts
                        };
                        resolve(userData);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
            .catch(error => {
                reject(error);
            });
    });
}


getUserData(1)
    .then(userData => {
        console.log('User data:', userData);
    })
    .catch(error => {
        console.error('Error fetching user data:', error.message);
    });