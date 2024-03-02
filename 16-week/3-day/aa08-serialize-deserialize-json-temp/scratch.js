fetch("/",{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({hello: "world"})
})
