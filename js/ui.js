export class ui {

 displaygames(data){   
        let x=""
        for (let i = 0; i <data .length; i++) {
           x+= ` <div class="col-lg-4 mb-3">
             <div id="${data[i].id}" class="card h-100 bg-transparent " >
                <div class=" card-body">   
                     <figure class="position-relative">
                       <img class="card-img-top w-100"
                       src='${data[i].thumbnail}'>
        
                    </figure>
        
                  <figcaption>
        
                   <div class="hstack justify-content-between">
                       <h3 class="h6 small">${data[i].title}</h3>
                       <span class="badge text-bg-primary p-2">Free</span>
                   </div>
        
                   <p class="card-text small text-center opacity-50">
                       ${data[i].short_description}
                   </p>
        
                  </figcaption>
        
               </div>
        
        
        
        <footer class="card-footer small d-flex justify-content-between">
        
           <span class="badge but p-2">${data[i].genre}</span>
           <span class="badge but p-2">${data[i].platform}</span>
        
        </footer>
            </div> </div> ` 
        }
        
        
        document.getElementById('gameData').innerHTML=x;
        
        
        }

    
    

 displaydetails(response){
  let  z=`
    <div class="container">
       <header class="d-flex justify-content-between">
          <h1 class="text-center h3 py-4">Details Game</h1>
          <button class="btn-close btn-close-white py-4" id="btnClose"></button>
       </header>
       <div class="row ">
 <div class="col-md-4">
 <img src="${response.thumbnail}" class="w-100" alt="image details">
</div>
<div class="col-md-8">
 <h3>Title: ${response.title}</h3>
 <p>Category: <span class="badge text-bg-info"> ${response.genre}</span> </p>
 <p>Platform: <span class="badge text-bg-info"> ${response.platform}</span> </p>
 <p>Status: <span class="badge text-bg-info"> ${response.status}</span> </p>
 <p class="small">${response.short_description}</p>
 <a class="btn btn-outline-warning" target="_blank" href='${response.game_url}'>Show Game</a>
</div>
 
 </div>
    </div>
 `
document.getElementById('details').innerHTML=z;
}}