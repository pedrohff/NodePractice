console.log('Before')
getUser(1, (user) => {console.log(`User ${user}`, user)})
console.log('After')


function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from databse....')
        callback({id: id, gitHubUsername: "qwer"})
    }, 2000)

    return 1
}