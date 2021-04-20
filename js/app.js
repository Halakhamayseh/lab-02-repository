'use stict';
const opKeyArray = [];
function An(nObject) {
  this.title = nObject.title;
  this.image_url = nObject.image_url;
  this.description = nObject.description;
  this.keyword = nObject.keyword;
  this.horns = nObject.horns;
}


An.prototype.render = function () {
  let nObjectClone = $('.nObjectTemplate').clone();
  $('main').append(nObjectClone);
  nObjectClone.find('h3').text(this.title);
  nObjectClone.find('img').attr('src', this.image_url);
  nObjectClone.find('p').text(this.description);
  nObjectClone.attr("class",this.title);
    nObjectClone.attr("class",`${this.keyword}`);
    
    
};
// console.log(opKeyArray);
function readJson() {
  const ajaxSet = {
    method: 'get',
    dataType: 'json'
  };
  $.ajax('data/page-1.json', ajaxSet).then(make);
}
function make(data) {
  data.forEach((item) => {
    let nnObject = new An(item);
    //   console.log(nnObject.keyword);
      nnObject.render();
      
    if (opKeyArray.includes(nnObject.keyword) === false) {
      opKeyArray.push(nnObject.keyword);

    }

  });
  keyRender();
}

readJson();
///////filiter/////

function keyRender() {
  opKeyArray.forEach(e => {
      $('select').append(`<option value=${e}>${e}</option>`);
  });
}
$('select').on('change', changeHandel);
function changeHandel() {
    let ss = $(this).val();
    
    if (ss!=='default') {
        $('div').hide();
        $('select').show();
        // $(`.${select}`).show();
        console.log(ss);
    }
    // event.preventDefault();
    // console.log(event);
    // for (let i = 0; i < opKeyArray.length; i++) {
    //     // console.log(opKeyArray[0]);
    //     console.log(event);
    //     if (event === opKeyArray[i]) {
    //         console.log('g');
    //         $('div').hide();
    //         $(`.${sel}`).show();
    //     }
        
    // }
   
}

