const url = "http://localhost:8081/"

async function fetchData() {
    const res = await fetch(url);
    const result = await res.json();
    console.log(result);
    
}

fetchData();