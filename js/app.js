'use stict';
const opKeyArray = [];
const objArr = [];
function An(nObject) {
  this.title = nObject.title;
  this.image_url = nObject.image_url;
  this.description = nObject.description;
  this.keyword = nObject.keyword;
  this.horns = nObject.horns;
  objArr.push(this);
}


An.prototype.render = function () {
  let nObjectClone = $('.nObjectTemplate').clone();
  $('main').append(nObjectClone);
  nObjectClone.find('h3').text(this.title);
  nObjectClone.find('img').attr('src', this.image_url);
  nObjectClone.find('img').attr('alt', `${this.keyword}`);
  nObjectClone.find('p').text(this.description);
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
  if (ss !== 'default') {
    $('div').hide();
    $(`.${ss}`).show();
    ////other way to slove this issue///
    // $('div').toArray().forEach((e) => {
    //   console.log(e.classList);
    //   if (e.classList.contains(ss)) {
    //     $(`.${ss}`).show();
    //   }
    // });
   }
    //   objArr.forEach(element => {
    //       if (element===ss) {
            
    //       }
    //     });
    //     console.log(ss);
    // }
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

