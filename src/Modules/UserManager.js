export default{
    getOneUser(libraryName) {
        return fetch(`http://localhost:5002/libraries?libraryName=${libraryName}`).then(user => user.json())
      }
}