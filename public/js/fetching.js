

console.warn('fetching.js invoked!');


const b = document.querySelector('button');

b.addEventListener('click', async e => {
    const res =  await fetch('http://localhost:3000/', {
        method: 'post',
        body: JSON.stringify({eldinspayload: 'My post Req'}),
        headers: {'Content-Type': 'application/json'},
    });
    const data = await res.text();
    console.log(data);
});