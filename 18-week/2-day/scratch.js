fetch("/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({person: "Greg"})
}).then(res => {
    
})