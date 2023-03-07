import { ui } from "./ui.js";
import { games } from "./games.js";
export class details{
    constructor(id){
        this.games=new games;
        this.ui = new ui();
        this.getDetails(id);
    
}

hiden(){
    $("#btnClose").click( function() {
        document.querySelector(".game").classList.remove("d-none");
        document.querySelector("#details").classList.add("d-none");
      });
}
      
        async getDetails(b){           
        const options = {
    
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '19a5760f9bmsh66001e77a31bc05p15def6jsn15f30affde1f',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const apidet=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${b}`, options);
        const response =await apidet.json();
         this.ui. displaydetails(response)
         this.hiden();
         
        } }
       
            