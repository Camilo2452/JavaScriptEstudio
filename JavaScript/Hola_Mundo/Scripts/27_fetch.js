'use strict'

//Fetch(ajax) y peticiones a servicios / apis rest
/***** 
var usuarios = [];
fetch('https://reqres.in/api/users')
    .then(data => data.json())
    .then(users =>{
        usuarios = users.data;
        console.log(usuarios);
    });
    */
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor =  document.querySelector("#profesor");
  /**  var usuarios = [];***/

  getUsers()
    .then(data => data.json())
    .then(users=>{
        listUsers(users.data);

        
        return getInfo();
    })
    .then(data =>{
        div_profesor.innerHTML = data;
        console.log(data);

        return getUniqueUser();
    })
    .then(data => data.json())
    .then(user =>{
        mostrarJannet(user.data);
    })
    .catch(error =>{
        console.log('Error en las Peticiones');
    });
    
    

function getUsers(){
    return fetch('https://reqres.in/api/users');
}

function getUniqueUser(){
    return fetch('https://reqres.i/api/users/2');
}

function getInfo(){
        var profesor = {
            nombre: "Camilo",
            apellidos: "Robles",
            url: "https://camilorozo.web.es"
    };

    return new Promise((resolve, reject)=>{

        var profesor_string= "";
        setTimeout(function(){ 
            profesor_string= JSON.stringify(profesor);
            
            if(typeof profesor_string != 'string' || profesor_string =='' ) return reject('Error Back-End');
        
            return resolve(profesor_string);
        },5000);

       
    });

    
}

    function listUsers(usuarios){
        usuarios.map((user, i)=>{
            let nombre = document.createElement('h2');
                nombre.innerHTML = i+". " + user.first_name + user.last_name;
            
            div_usuarios.appendChild(nombre);
            
            document.querySelector(".loading").style.display = 'none';
        
        });
    }

    function mostrarJannet(user){
       
            let nombre = document.createElement('h3');
            let avatar = document.createElement('img');
                nombre.innerHTML = user.first_name + user.last_name;
            avatar.src = user.avatar;
            avatar.width = '100' ;          
        
            div_janet.appendChild(nombre);
            div_janet.appendChild(avatar);
            
            document.querySelector("#janet .loading").style.display = 'none';
    }
