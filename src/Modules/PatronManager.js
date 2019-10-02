const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/patrons/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/patrons?libraryId=${localStorage.getItem('email')}`).then(result => result.json())
  },
  archive(id) {
    return fetch(`${remoteURL}/patrons/${id}`, {
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
  post(newPatron) {
    return fetch(`${remoteURL}/patrons`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPatron)
    }).then(data => data.json())
},
update(editedPatron) {
  return fetch(`${remoteURL}/patrons/${editedPatron.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedPatron)
  }).then(data => data.json());
}
}