const apiUrl = 'https://api.netpie.io/v2/device/shadow/data';
const main = document.querySelector('main');
const search = document.querySelector('#search');
const form = document.querySelector('form');

// Fteching Data from the Api.
function searchProfile(url){
    fetch(url)
    .then(res => res.json())
    .then(function(data){
        
        const h3 = document.createElement('h3');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');

        main.appendChild(img);
        main.appendChild(h3);
        main.appendChild(h2);
        main.appendChild(p);
        // Putting the Api data on the elements.
        h3.innerHTML = ` Login : <a href="${data.html_url}" target="_blank">${data.login}</a>`;
        h2.innerHTML = ` Name : ${data.name}`;
        p.innerHTML = `Bio : ${data.bio}`
        });
}
function getAvailable(url)
{
    fetch(url,{
        headers:{
            'Authorization' : 'Device f400cbf1-a9d2-48ac-87c7-d55cde31ad7e:VuULQbP34P9C1VvEepK7mBmgXhu7mjwQ'
        }
    })
    .then(res=>res.json())
    .then(function(data2){
        let now=document.getElementById('now');
        let total=document.getElementById('total');
        console.log(data2);
        let setText;
        if(data2.data.num_status=='H')
            setText="High"
        else if(data2.data.num_status=='M')
            setText="Medium"
        else 
            setText="Low. YOU SHOULD FILL THE MACHINE WITH LORD"
        now.innerHTML=` ${setText}`;
        total.innerHTML=` ${data2.data.used}`;
    });
}
// The search form .
form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
    let sDate = docement.getElementById(StartDate);
    let eDate = docement.getElementById(EndDate);
    let sTime = docement.getElementById(Time1);
    let eTime = docement.getElementById(Time2);
    console.log(sDate)
    
});
//getAvailable(apiUrl);
