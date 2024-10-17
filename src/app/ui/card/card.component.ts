import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

industry:any=[
  {
    id:1,
    title:'shelby gt 500',
    image:'https://imgs.search.brave.com/G8MnnbllHLjZpW2RthkvBskuGsKqtprSnqAYB8L_tVk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/Mzg1NzA5Mi9mci9w/aG90by92dWUtZGUt/ZmFjZS1kZS1sYS1m/b3JkLW11c3Rhbmct/NTAwLWd0LWJsZXVl/LWdhciVDMyVBOWUt/ZGFucy1sYS1ydWUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWZSRXNsWXVfWFJW/Tk1WRy03eVFka0Yy/ek5sTzkyckxYNEo5/VURoZ0dRblU9',
    description:'The 1969 Mustang underwent a restyle, adding 3.8 inches (97 mm) to the body length, increasing width by almost half an inch, and increasing weight.',
  },
  {
    id:2, 
    title:'mustang 1969',
    image:'https://imgs.search.brave.com/9pGhKxxPUndyCgcCaxew2_rPcLiAhgEtjiu2P5CFeOU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXVzdGFuZ3NwZWNz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wNi8xOTY5/LVNoZWxieS1NdXN0/YW5nLmpwZw',
    description:'The 1969 Mustang underwent a restyle, adding 3.8 inches (97 mm) to the body length, increasing width by almost half an inch, and increasing weight.',
  },
  {
    id:3,
    title:'mustang boss',
    image:'https://imgs.search.brave.com/ELLTYXsE2YF9uYEioizrNCrxwA5TvkoPKpFXloXGZ9g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2Fyc2Nvb3BzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wOC8xOTcwLVBs/eW1vdXRoLUFBUi1D/dWRhLTAwMDA0LTEw/MjR4NTc2LmpwZw',
    description:'The Ford Mustang Boss 302 and Boss 429 are high-performance variants of the iconic Mustang muscle car. Here’s a breakdown of their key specifications',
  },
  {
    id:4,
    title:'Mustang 2020',
    image:'https://imgs.search.brave.com/Rvm47KQ00HsmYa82eThv20mm-WQdAFWSwLjXCQyiI3o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY2Fycy5jb20v/Y2xkc3RhdGljL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9mb3JkLW11/c3Rhbmctc2hlbGJ5/LWd0MzUwci0yMDIw/LTAxLWFuZ2xlLS1l/eHRlcmlvci0tZnJv/bnQtLXdoaXRlLmpw/Zw',
    description:'The Ford Mustang is a rear-wheel-drive, four-seat sports car that goes head-to-head with the Chevrolet Camaro and Dodge Challenger.',
  }


]





}
