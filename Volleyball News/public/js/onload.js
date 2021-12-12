window.onload = () => {
    (async () => {const urlBase = "http://localhost:9090/";
    let listacontent = document.getElementById("content");
    let conteudo = "";
    var myHeaders = new Headers();
  
    var myInit = { method: "GET", headers: myHeaders
   };
  
    var myRequest = new Request(`${urlBase}`, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        listacontent.innerHTML =
          "Não posso mostrar imagens de momento!";
      } else {
          conteudo += ` 
          <div id="container">
            <!-- content -->
            <div class="row">
            <div class="col">
            <div id="content">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://images.volleyballworld.com/image/private/t_editorial_landscape_12_desktop/f_auto/fivb-prd/biu8vdj1hvjynbcdoz6g.jpg" class="d-block w-100" height="450px" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://images.volleyballworld.com/image/private/t_editorial_landscape_12_desktop/f_auto/fivb-prd/fdyuvlnr2zhawiccv6xk.jpg" class="d-block w-100" height="450px" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://images.volleyballworld.com/image/private/t_editorial_landscape_12_desktop/f_auto/v1639133545/fivb-prd/ylrqjnzxy6g3jownqlrv.jpg" class="d-block w-100" height="450px" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://images.volleyballworld.com/image/private/t_editorial_landscape_12_desktop/f_auto/v1639132087/fivb-prd/t8jleydhnebxh1qfrpkj.jpg" class="d-block w-100" height="450px" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
              <h2>Volleyball</h2>
              <h4> Este site têm como meta mostrar as notícias sobre o Volleyball.</h4>
              <footer id="footer">© 2021 Copyright</footer>
              </div>
              </div>
            </div>
          </div>
          `;
        listacontent.innerHTML = conteudo;
      }
    });
    })();
  }
  