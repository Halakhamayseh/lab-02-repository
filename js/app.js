'use stict';
alert('ll');
function An(nObject) {
    this.title = nObject.title;
    this.img_url = nObject.img_url;
    this.description = nObject.description;
    this.keyword = nObject.keyword;
    this.horns = nObject.horns;
    // console.log(this.hoppies);
}
An.prototype.render = function () {
    let $nObjectClone = $('.nObjectTemplate').clone();
    $nObjectClone.find('h3').text(this.title);
    $nObjectClone.find('img').attr('src', this.img_url);
    $nObjectClone.find('p').text(this.description);
    $nObjectClone.find('h4').text(this.horns);
    $nObjectClone.removeClass('.nObjectTemplate');
    $nObjectClone.attr('class', this.title);
};
let nObject = new An('t', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F821766263244571575%2F&psig=AOvVaw1uZJ1QqGkJpPU_3vgGOyV0&ust=1618965230577000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLClnM7Ji_ACFQAAAAAdAAAAABAD', 'hh', 'key hh', 5);
nObject.render();
// An.readJson = () => {
//     const ajaxSet = {
//         method: 'get',
//         dataType: 'josn'
//     };

//     $.ajax('data/page-1.json', ajaxSet)
//         .then(data => {
//             data.forEach(item => {
//                 let nObject = new An(item);
//                 nObject.render();
//             });
//         });
// };
// $(() => An.readJson());

