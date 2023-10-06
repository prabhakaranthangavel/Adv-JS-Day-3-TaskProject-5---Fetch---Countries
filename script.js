// 1.https://restcountries.com/v2/all

// 2.API link ன் output ஐ screen க்கு கொண்டுவரவும்.

// 3.Using bootstrap grid groups 

// 4.screen ல் வந்த output ஐ மேலும் dynamic & styling (.css)செய்யவும்.


const res = fetch("https://restcountries.com/v2/all");
    res.then((data) => data.json()).then((data1) => {
    for (var i = 0; i < data1.length; i++) {
      const div = document.createElement("div");

      div.innerHTML =               //paste the bootstrap grid groups content

       `<div class="row row-cols-1 row-cols-md-3 ">
        <div class="col">
          <div class="card">
            <img src="${data1[i].flag}" class="card-img-top" alt="restcountries flag images here">
            <div class="card-body">
              <h5 class="card-title">${data1[i].name}</h5>
              <p class="card-text"><b><i>Capital: ${data1[i].capital}</i></b></p>
              <p class="card-text"><b><i>Region: ${data1[i].region}</i></b></p>
              <p class="card-text"><b><i>SubRegion: ${data1[i].subregion}</i></b></p>
              <p class="card-text"><b><i>Population: ${data1[i].population}</i></b></p>
            </div>
          </div>
        </div>
        </div>`;
      document.body.append(div);
    }
});