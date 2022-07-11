fetch("https://random.dog/woof.json")
    .then(res => res.json())
    .then(json => {
        const image = '<img src="' + json.url + '" />';
        document.body.innerHTML = image;
    });
