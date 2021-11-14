window.onload = () => {
    (async () => {const urlBase = "http://localhost:8000/";
    let listacontent = document.getElementById("content");
    let conteudo = "";
    var myHeaders = new Headers();
  
    var myInit = { method: "GET", headers: myHeaders };
  
    var myRequest = new Request(`${urlBase}`, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        listacontent.innerHTML =
          "Não posso mostrar videos de momento!";
      } else {
          conteudo += ` 
          <div id="container">
            <!-- content -->
            <div class="row">
            <div class="col">
            <div id="content">
              <h2 ">Volleyball</h2>
            </div>
            </div>
            </div>
          </div>
          <div class="row">
          <div class="col">
          <iframe width="1500" height="700" src="https://www.youtube.com/embed/Zf-bcG5IRIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          </div>`;
        listacontent.innerHTML = conteudo;
      }
    });
    })();
  }
  