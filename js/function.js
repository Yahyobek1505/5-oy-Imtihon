
function creatCard(countries) {
  return `
  <div  class="card" id="infoCard" >
  <img data-id = 'data_${countries.name.slug}' src ="${countries.flags.svg}" alt="">
  <div class="ml-4 mt-2">
  <h1 class="country">${countries.name.common}</h1>
  <h4>Population:<span> ${countries.population}</span></h4>
  <h4>Region:<span class="regionName"> ${countries.region}</span></h4>
  <h4>Capital:<span>${countries.capital[0]}</span></h4>
  </div>
  </div>
  `
}
function creatRegion(regions) {
  return `
  <div class="card" id="infoCard">
  <img src ="${regions.flags.svg}" alt="">
  <div class="ml-4 mt-2">
  <h1 class="country">${regions.name.common}</h1>
  <h4>Population:<span> ${regions.population}</span></h4>
  <h4>Region:<span class="regionName"> ${regions.region}</span></h4>
  <h4>Capital:<span>${regions.capital[0]}</span></h4>
  </div>
  </div>
  `
}

function loader() {
  const AmagiLoader = {
    __loader: null,
    show: function () {
  
        if (this.__loader == null) {
            let divContainer = document.createElement('div');
            divContainer.style.position = 'fixed';
            divContainer.style.left = '0';
            divContainer.style.top = '0';
            divContainer.style.width = '100%';
            divContainer.style.height = '100%';
            divContainer.style.zIndex = '9998';
            divContainer.style.backgroundColor = 'rgba(250, 250, 250, 0.80)';
  
            let div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.left = '50%';
            div.style.top = '50%';
            div.style.zIndex = '9999';
            div.style.height = '64px';
            div.style.width = '64px';
            div.style.margin = '-76px 0 0 -76px';
            div.style.border = '8px solid #e1e1e1';
            div.style.borderRadius = '50%';
            div.style.borderTop = '8px solid (250, 250, 250, 0.80)';
            div.animate([
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(360deg)' }
              ], {
                duration: 2000,
                iterations: Infinity
              });
            divContainer.appendChild(div);
            this.__loader = divContainer
            document.body.appendChild(this.__loader);
        }
        this.__loader.style.display="";
    },
    hide: function(){
        if(this.__loader!=null)
        {
            this.__loader.style.display="none";
        }
    }
  }
}

export {creatCard, loader, creatRegion};
