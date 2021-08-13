import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 
        
        let slideData =["images/cake6.jpg","images/cake8.jpg","images/cake12.jpg","images/cake13.jpg"];

        
        
        slideIndex = 0;
        
        showSlides()
         {

          
        //    alert("showSlides"  + slideIndex);
          
            let sliderIndex=this.slideIndex++;
            let mySlidesDiv = document.querySelectorAll('.mySlides');
            
            // Don't display images
            mySlidesDiv.forEach( divObj=>{                                                  
                // divObj.style.display = "none";
            });
            

            //reset to 1st image
            if (slideIndex > mySlidesDiv.length) {
                 slideIndex = 1 
            }

            //display one image at at time
            // mySlidesDiv[slideIndex - 1].style.display = "block";

            setTimeout(this.showSlides, 1200); // Change image every 2 seconds  
        }
        