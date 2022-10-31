let LocalColor = generatePlaceholder('ss','ds').avaColor;
let pageFlex = localStorage.getItem('pageFlex') || 'flex';
let pageNone = localStorage.getItem('pageNone') || 'none';
let avaColor = localStorage.getItem('avaColor') || LocalColor;
let avaName = localStorage.getItem('avaName') || '';
let underAva = localStorage.getItem('underAva') || '';
let textFlex = localStorage.getItem('textFlex') || 'none';
let mainText= localStorage.getItem('mainText') || 'Your Account';
let image = localStorage.getItem('image') ||  '';

const chooseFile = document.getElementById("avatar__inp");
const imgPreview = document.getElementById("avatar");

avatar.style.backgroundColor = avaColor;
wrap__inputGroup.style.display = pageFlex;
btn.style.display = pageFlex;
avatar.style.display = pageNone;
cancel.style.display = pageNone;
avatar__p.innerText = avaName;
fulname.innerText = underAva;
fulname.style.display = textFlex;
wrap__header.innerText = mainText;
$('#avatar').css('background-image',`url(${image})`);

$('.btn').click(function(){
if(inpName.value && inpSurname.value){
localStorage.setItem('mainText','Your Account');
mainText = 'Your Account';
wrap__header.innerText = mainText;
localStorage.setItem('avaColor',LocalColor);
avaColor = LocalColor;
avatar.style.backgroundColor = avaColor
localStorage.setItem('avaName',generatePlaceholder(inpName.value,inpSurname.value).avaName);
avaName = generatePlaceholder(inpName.value,inpSurname.value).avaName;
avatar__p.innerText = avaName;
localStorage.setItem('pageFlex', 'none');
localStorage.setItem('pageNone', 'flex');
pageFlex = 'none';
pageNone = 'flex';
btn.style.display = pageFlex;
wrap__inputGroup.style.display = pageFlex;
avatar.style.display = pageNone;
cancel.style.display = pageNone;
localStorage.setItem('underAva',inpName.value+' '+inpSurname.value);
underAva = inpName.value+' '+inpSurname.value;
fulname.innerText = underAva;}else{
    alert('Ведіть інформацію');
};
});
$('.cancel').click(function(){
inpName.value = '';
inpSurname.value = '';
localStorage.setItem('mainText','Generate Your Placeholder');
mainText = 'Generate Your Placeholder';
wrap__header.innerText = mainText;
localStorage.setItem('image','') ;
image = '';

$('#avatar').css('background-image',`url(${image})`);
$('.wrap__inputGroup').css('display','flex');
$('.btn').css('display','flex');
$('.avatar').css('display','none');
$('.cancel').css('display','none');

fulname.innerText = '';
localStorage.setItem('pageFlex', 'flex');
localStorage.setItem('pageNone', 'none');
pageFlex = 'flex';
pageNone = 'none';
wrap__inputGroup.style.display = pageFlex;
btn.style.display = pageFlex;
avatar.style.display = pageNone;
cancel.style.display = pageNone;
localStorage.setItem('textFlex', 'none');             
pageFlex = 'none';
fulname.style.display = textFlex;
localStorage.setItem('underAva','');
underAva =  '';
fulname.innerText = underAva;
fulname.style.display = pageNone;
});
chooseFile.addEventListener("change", function () {
getImgData();
localStorage.setItem('avaName','');
avaName = '';
avatar__p.innerText = avaName;
localStorage.setItem('textFlex', 'flex');             
textFlex = 'flex';
fulname.style.display = textFlex;
});
function getImgData() {
const files = chooseFile.files[0];
if (files) {
const fileReader = new FileReader();
fileReader.readAsDataURL(files);
fileReader.addEventListener("load", function () {
localStorage.setItem('image',this.result) ;
image = this.result;
$('#avatar').css('background-image',`url(${image})`);
});    
};
};
function generatePlaceholder (name,surname){
let sum = name[0].toUpperCase() +  surname[0].toUpperCase();
let randomBgc = '#' + (Math.floor(Math.random() * 16777217)).toString(16);  
return obj = {
    avaName: sum,
    avaColor:randomBgc
};     
};
