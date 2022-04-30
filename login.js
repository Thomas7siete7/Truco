const login= e=>{
    

    let data={
        user: document.getElementById('text').value,
        password: document.getElementById('contrasenia').value, 
    };

    localStorage.setItem('data', JSON.stringify(data));
    e.preventDefault();
}

