export function getAllDogs() {
    return fetch("/dogs");
}

export function getDogNumberTwo() {
    return fetch("/dogs/2");
}

export function postNewDog() {
    const body = new URLSearchParams({name: "Gretchen", age: 7});
    return fetch("/dogs", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body
    })
}

export function postNewDogV2(name, age) {
    const body = new URLSearchParams({name, age});
    return fetch("/dogs", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body
    })
}

export function deleteDog(id) {
      return fetch(`/dogs/${id}/delete`, {
        method: "POST",
        headers: {AUTH: "ckyut5wau0000jyv5bsrud90y"}
      })
}