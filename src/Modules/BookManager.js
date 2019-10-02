const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/books/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/books`).then(result => result.json())
  },
  archive(id) {
    return fetch(`${remoteURL}/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({archived: true})
    })
    .then(result => result.json())
  },
  unarchive(id) {
    return fetch(`${remoteURL}/patrons/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({archived: false})
    })
    .then(result => result.json())
  },
  post(newBook) {
    return fetch(`${remoteURL}/books`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
    }).then(data => data.json())
},
update(editedBook) {
  return fetch(`${remoteURL}/books/${editedBook.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedBook)
  }).then(data => data.json());
}
}