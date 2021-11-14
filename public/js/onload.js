window.onload = () => {
    (async () => {const urlBase = "http://localhost:8000/news";
    const listacontent = document.getElementById("content");
    let texto = "";
    var myHeaders = new Headers();
  
    var myInit = { method: "GET", headers: myHeaders };
  
    var myRequest = new Request(`${urlBase}`, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        listacontent.innerHTML =
          "Não posso mostrar disciplinas de momento!";
      } else {
          newspapers = await response.json();
        console.log(newspapers);
        for (const newspaper of newspapers) {
          texto += ` 
                <div>
            <h4>${newspaper.title}</h4>
            &nbsp;&nbsp;&nbsp;Address: ${newspaper.url}
            <p>Base: ${newspaper.source}</p>
        </div>`;
        }
        listacontent.innerHTML = texto;
      }
    });
    })();
  }
  