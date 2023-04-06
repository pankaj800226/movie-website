const search = ()=>{
    // const productList = document.getElementById("product-list");
    const searchbox = document.getElementById('search-item').value.toUpperCase();
    const product = document.querySelectorAll(".product");
    const pname = document.getElementsByTagName("h2")

    for(var i = 0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];
        if(match){
            let textValue = match.textContent || match.innerHTML;

            if(textValue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";

            }
        }

    }
}

// nav bar 
let nav = document.getElementById('nav').innerHTML = "home"
let nav2 = document.getElementById('nav2').innerHTML = "about"
let nav3 = document.getElementById('nav3').innerHTML = "servics"


    
// 1 image 
let text = document.getElementById('text').innerHTML = "Dungeons & Dragons Hono<br>(HQ Dubbed) – English]<br>Movie 480p [600MB] | 720p<br>[1.6GB] | 1080p [3.5GB]"

// // 2 image 
let text2 = document.getElementById('text2').innerHTML = "Creed III (2023) WEBRip<br>Hindi (HQ-Dubbed) Full Movie<br>480p [400MB] | 720p [1.2GB] |<br>1080p [3.4GB]"

// 3 image 
let text3 = document.getElementById('text3').innerHTML = "Pathu Thala (2023) HQ-<br>HDCAM Hindi (HQ-Dubbed)<br>Full Movie 480p [500MB] |<br>720p [1.5GB] | 1080p [4GB]"

// 4 image 
let text4 = document.getElementById('text4').innerHTML = "Bholaa (2023) HDCAM Hindi<br>Full Movie 480p [450MB] |<br>720p [1.2GB] | 1080p [3GB]"

// 5 image 
let text5 = document.getElementById('text5').innerHTML = "Spider-Man: No Way Home<br>(2021) Dual Audio [Hindi ORG |<br>+ English] WeB-DL 480p |<br>720p | 1080p | 2160p 4K"


// 6 image 
let text6 = document.getElementById('text6').innerHTML = "Doctor Strange (2016) Dual<br>Audio {Hindi-English} 480p |<br>[400MB] | 720p [1.6GB] | |<br>1080p [3.6GB] | 2160p 4k"


// next slide page 
// let res = document.getElementById("res").innerHTML = "hello duniya"


