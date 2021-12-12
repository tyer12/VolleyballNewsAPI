async function getNews() {
  
  const urlBase = "http://localhost:9090/api/news";
  const listacontent = document.getElementById("content");
  let texto = "";
  var myHeaders = new Headers();

  const token = localStorage.token;
  console.log(token);

  //const myInit = { method: "GET", headers: myHeaders };
  const myInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:` Bearer ${token}`,
    },
  };


  var myRequest = new Request(`${urlBase}`, myInit);

  await fetch(myRequest).then(async function (response) {
    if (!response.ok) {
      listacontent.innerHTML =
        "Não posso mostrar noticias de momento!";
    } else {
        newspapers = await response.json();
      console.log(newspapers);
      for (const newspaper of newspapers) {
        texto += `  
          <div class="card border-info mb-3 d-flex justify-content-center">
          <div class="card-header"><h4>${newspaper.title}</h4></div>
          <div class="card-body">
          <p class="card-title">Address: <a href= "${newspaper.url}" class="link-secondary"> ${newspaper.url}</a></p>
          <p class="card-text">Base: ${newspaper.source}</p>
          </div>
          </div>
          `;
      }
      listacontent.innerHTML = texto;
    }
  });
}

async function getHome() { 
let listacontent = document.getElementById("content");
let conteudo = "";
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
  };

  async function getLive() { 
    let listacontent = document.getElementById("content");
    let conteudo = "";
          conteudo += ` 
          <div id="container">
            <!-- content -->
            <div class="row">
            <div class="col">
            <div id="content">
            <iframe width="1300" height="700" src="https://www.youtube.com/embed/udl3DVZ5Z18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <footer id="footer">© 2021 Copyright</footer>  
            </div>
            </div>
            </div>
          </div>
          `;
        listacontent.innerHTML = conteudo;
      };