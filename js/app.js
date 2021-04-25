'use stict';
const opKeyArray1 = [];
const opKeyArray2 = [];
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
  let templating = $('#templating').html();
  let templatingMergeObj = Mustache.render(templating, this);
  $('main').append(templatingMergeObj);
  // let nObjectClone  = $('.nObjectTemplate').clone();
  // nObjectClone.attr("class", `${this.keyword}`);
};
///page1handel/////////////////////////////////////
function readJsonPage1() {
  const ajaxSet = {
    method: 'get',
    dataType: 'json'
  };
  $.ajax('data/page-1.json', ajaxSet).then(make);
}

function make(data) {
  data.forEach((item) => {
    let nnObject = new An(item);
    nnObject.render();
    if (opKeyArray1.includes(nnObject.keyword) === false) {
      opKeyArray1.push(nnObject.keyword);

    }

  });
  keyRender1();
}
readJsonPage1();

$('#pageOne').on('click', clickHandel);
function clickHandel() {
  let pageOne = $(this).val();
  console.log(pageOne);

  if (pageOne === 'page1Click') {

    $("main").children().remove();
    
    readJsonPage1();
    filtirH();
    
  }
 
}

////////////////////////////////////////////////////
//////page 2 handel///
function readJsonPage2() {
  const ajaxSet = {
    method: 'get',
    dataType: 'json'
  };
  $.ajax('data/page-2.json', ajaxSet).then(makeTwo);
}
function makeTwo(data) {
  data.forEach((item) => {
    let nnObject = new An(item);
    nnObject.render();
    if (opKeyArray2.includes(nnObject.keyword) === false) {
      opKeyArray2.push(nnObject.keyword);

    }

  });
  keyRender2();
}

$('#pageTwo').on('click', clickHandeTwo);
function clickHandeTwo() {
  let pageTwo = $(this).val();
  console.log(pageTwo);
  if (pageTwo === 'page2Click') {
    $("main").children().remove();
    readJsonPage2();
    filtirH();
  }
}

////////////////////////////////////////////////////////////////
///////filiter/////

function keyRender1() {
  console.log('key render 1', $('option'));
  $('option').remove();
  console.log('After key render 1', $('option'));
  opKeyArray1.forEach(e => {

    $('.keyWords').append(`<option value=${e}>${e}</option>`);
    
    
  });

}
function keyRender2() {
  console.log('key render 2', $('option'));
  $('option').remove();
  console.log('After key render 2', $('option'));
  opKeyArray2.forEach(e => {
    $('.keyWords').append(`<option value=${e}>${e}</option>`);
  });

}
function filtirH() {
  $('.keyWords').on('change', changeHandel);
  function changeHandel() {
    let ss = $(this).val();
    if ((ss === 'default')){
      $('div').show();
    }
    else {
      $('div').hide();
      $(`.${ss}`).show();
    }
  }
}
filtirH();
//////////////sort//////////////////
  let select = $(this).val();
  if (select === 'title') {
    objArr.sort((a, b) => {
      let aTitle = a.title;
      let bTitle = b.title;
      if (aTitle < bTitle) {
        return -1;
      }
      if (aTitle > bTitle) {
        return 1;
      }
    });
  }
  if (select === 'horns') {
    objArr.sort((a, b) => {
      let aHorns = a.horns;
      let bHorns = b.horns;
      if (aHorns < bHorns) {
        return -1;
      }
      if (aHorns > bHorns) {
        return 1;
      }
    });
  }

////other way to slove this issue///
//   $('div').toArray().forEach((e) => {
//     console.log(e.classList);
//     if (e.classList.contains(ss)) {
//       $(`.${ss}`).show();
//     }
//   });
//  }
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

// }
