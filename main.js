let row=document.querySelector(".row");
const getMovie=()=>{
	fetch(`http://api.tvmaze.com/shows/1/episodes`)
	.then((res)=>res.json())
	.then((msg)=>{
		for(m of msg){
			data(m)
			console.log(m);
		}
	})
	.catch((err)=>{
		console.log("error")
	})
}
getMovie()


const data=(m)=>{
	row.innerHTML+=`<div class="col">
				    <div class="card">
					    <img src="${m.image.medium}">
						<div class="details">
							<h3 class="title">${m.name}</h3>
							<span class="rate">${m.rating.average}</span>
						</div>
					</div>
				</div>`;
}