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
    $('div').hide();
    readJsonPage1();
    filtirH();
    $('div').hide();
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
    $('div').hide();
    readJsonPage2();
    filtirH();
  }
}

////////////////////////////////////////////////////////////////
///////filiter/////

function keyRender1() {
  opKeyArray1.forEach(e => {
    $('select').append(`<option value=${e}>${e}</option>`);
  });

}
function keyRender2() {
  opKeyArray2.forEach(e => {
    $('select').append(`<option value=${e}>${e}</option>`);
  });

}
function filtirH() {
  $('select').on('change', changeHandel);
  function changeHandel() {
    let ss = $(this).val();
    if (ss !== 'default') {
      $('div').hide();
      $(`.${ss}`).show();
    }
  }
}
filtirH();

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
