const apiUrl = 'https://api.netpie.io/v2/device/shadow/data';
const main = document.querySelector('main');
let lastUsed=0;
function getAvailable(url)
{
    fetch(url,{
        headers:{
            'Authorization' : 'Device f400cbf1-a9d2-48ac-87c7-d55cde31ad7e:VuULQbP34P9C1VvEepK7mBmgXhu7mjwQ'
        }
    })
    .then(res=>res.json())
    .then(function(data2){
        
        let tused=document.getElementById('TUsed');
        let used=document.getElementById('Used');
        let now=document.getElementById('Available');
        let score=document.getElementById('Score');

        console.log(tused);

        let TU=document.createElement('div');
        TU.setAttribute('class','chart');
        TU.setAttribute('data-percent',`${data2.data.used}`);
        TU.setAttribute('data-bar-color',"#23afe3");
        let TUchild=document.createElement('span')
        TUchild.setAttribute('class','percent');
        TUchild.innerHTML=data2.data.used;
        TU.appendChild(TUchild);

        let U=document.createElement('div');
        U.setAttribute('class','chart');
        U.setAttribute('data-percent',`${data2.data.used}`);
        U.setAttribute('data-bar-color',"#23afe3");
        let Uchild=document.createElement('span')
        Uchild.setAttribute('class','percent');
        Uchild.innerHTML=data2.data.used;
        U.appendChild(Uchild);

        let N=document.createElement('div');
        N.setAttribute('class','chart');
        N.setAttribute('data-percent',`${data2.data.num_status}`);
        N.setAttribute('data-bar-color',"#23afe3");
        let Nchild=document.createElement('span')
        Nchild.setAttribute('class','percent');
        Nchild.innerHTML=data2.data.num_status;
        N.appendChild(Nchild);

        let S=document.createElement('div');
        S.setAttribute('class','chart');
        S.setAttribute('data-percent','100');
        S.setAttribute('data-bar-color',"#23afe3");
        let Schild=document.createElement('span')
        Schild.setAttribute('class','percent');
        Schild.innerHTML=100;
        S.appendChild(Schild);

        tused.appendChild(TU);
        used.appendChild(U);
        now.appendChild(N);
        score.appendChild(S);

    });
}
async function apiCall(url)
{
    const response= await fetch(url,{
        headers:{
            'Authorization' : 'Device f400cbf1-a9d2-48ac-87c7-d55cde31ad7e:VuULQbP34P9C1VvEepK7mBmgXhu7mjwQ'
        }
    });
    const res=await response.json();
    return res
}
async function getAvailable2(url)
{
    
    const res=await apiCall(url);
    console.log(res.data.num_status);
    lastUsed=res.data.used;
        let tused=document.getElementById('TUsed');
        tused.removeChild(tused.childNodes[0]);
        let used=document.getElementById('Used');
        used.removeChild(used.childNodes[0]);
        let now=document.getElementById('Available');
        now.removeChild(now.childNodes[0]);
        let score=document.getElementById('Score');
        score.removeChild(score.childNodes[0]);


        let TU=document.createElement('div');
        TU.setAttribute('class','chart');
        TU.setAttribute('data-percent',`${res.data.used}`);
        TU.setAttribute('data-bar-color',"#8a2be2");
        let TUchild=document.createElement('span')
        TUchild.setAttribute('class','percent');
        TUchild.setAttribute('id','checkNum')
        TUchild.innerHTML=res.data.used;
        TU.appendChild(TUchild);

        let U=document.createElement('div');
        U.setAttribute('class','chart');
        U.setAttribute('data-percent',`${res.data.used}`);
        U.setAttribute('data-bar-color',"#23afe3");
        let Uchild=document.createElement('span')
        Uchild.setAttribute('class','percent');
        Uchild.innerHTML=res.data.used;
        U.appendChild(Uchild);

        let left=100-res.data.used;
        let N=document.createElement('div');
        N.setAttribute('class','chart');
        N.setAttribute('data-percent',`${left}`);
        N.setAttribute('data-bar-color',"#ff0000");
        let Nchild=document.createElement('span')
        Nchild.setAttribute('class','percent');
        Nchild.innerHTML=left;
        N.appendChild(Nchild);

        let S=document.createElement('div');
        S.setAttribute('class','chart');
        S.setAttribute('data-percent','100');
        S.setAttribute('data-bar-color',"#7cfc00");
        let Schild=document.createElement('span')
        Schild.setAttribute('class','percent');
        Schild.innerHTML=100;
        S.appendChild(Schild);

        tused.appendChild(TU);
        used.appendChild(U);
        now.appendChild(N);
        score.appendChild(S);

        let setText;
        if(left>=75)
            setText="Don't Worry So much straw in machine"
        else if(left <75 && left > 25)
            setText="These straw are enough for you"
        else 
            setText="Few straw left. Plz call this number and tell them to fill the machine"
        
        let status=document.getElementById("status");
        status.innerHTML=` ${setText}`;
        let tel=document.getElementById("telNum");
        if(left<=25)
            tel.innerHTML=` 09X-XXX-XXXX`;

}

var $window = $(window);
    function run()
    {
	    var fName = arguments[0],
		aArgs = Array.prototype.slice.call(arguments, 1);
	try {
		fName.apply(window, aArgs);
	} catch(err) {
		 
	}
};
function _chart ()
{
	$('.b-skills').appear(function() {
		setTimeout(function() {
			$('.chart').easyPieChart({
				easing: 'easeOutElastic',
				delay: 3000,
				barColor: '#369670',
				trackColor: '#fff',
				scaleColor: false,
				lineWidth: 21,
				trackWidth: 21,
				size: 250,
				lineCap: 'round',
				onStep: function(from, to, percent) {
					this.el.children[0].innerHTML = Math.round(percent);
				}
			});
		}, 150);
	});
};
async function web()
{
    await getAvailable2(apiUrl);
    run(_chart);
}
web();
async function check(url)
{
    const res=await apiCall(url);
    if(res.data.used != lastUsed)
        {
            console.log(lastUsed);
            console.log(res.data.used);
            web();
            setTimeout(() => {
            }, 1000);

        }
}

