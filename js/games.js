import {  details } from "./details.js";
import { ui } from "./ui.js";
export class games{
    constructor(){ 
        document.getElementById('inner').classList.remove('d-none')        
        this.getgames('MMORPG')
        this.ui = new ui();
        $('.link a').click((e)=> {
            document.getElementById('inner').classList.remove('d-none')
            
                document.querySelector(".link .active").classList.remove("active");  
                e.target.classList.add("active");     
                console.log(e); 
             
           
             this.getgames(e.target.dataset.category)
                                 })
                }
    action(){
    $('.card').click((e)=>{
       let id=  e.currentTarget.id;
       document.getElementById('inner').classList.remove('d-none')    
       this.showdetail(id)
    
                           })
            }

    async  getgames(a){
   
        const options = {
    
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '19a5760f9bmsh66001e77a31bc05p15def6jsn15f30affde1f',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${a}`, options);
        const response =await api.json();
          this.ui. displaygames(response);
          this.action();
          setTimeout(function(){
          document.getElementById('inner').classList.add('d-none')},500)
        
        } 


    showdetail(id){
    this.details= new details(id);
    document.querySelector(".game").classList.add("d-none");
    document.querySelector("#details").classList.remove("d-none");
                 }

}


    