let img;
let hen;
let input;
let input2;
let input3;
let input4;
let input5;
let input6;
let typeTexts;
// let qr;

// load images
function preload()
{
  hen = loadImage("og-image.jpg");
  cnew = loadFont('courier-new.ttf');
  //future qrcode generator implementation
  //      uncomment all to see how it goes
  // qr = loadImage("qr.png")
}

//setup
function setup() {

//input upload file box =============================
  msg = createP('Upload a <b>squared</b> preview of your artwork </br>that is at least <b>800x800px</b>');
  msg.position(20, 1000);

  input = createFileInput(handleFile);
  input.position(20, 1075);
  let c = createCanvas(1300, 800);

//input Artowk Name
  msg = createP('Insert <b>Artwork Name</b> (break like = enter key)');
  msg.position(20, 1130);

  input2 = createElement('textarea', 'Artwork Name');
  input2.position(20, 1180);

//input Artist Name
  msg = createP('Insert <b>Artist Name</b>');
  msg.position(20, 1240);

  input3 = createInput('Artist');
  input3.position(20, 1280);

  //input Description
  msg = createP('Insert the <b>Description</b> (break like = enter key)');
  msg.position(20, 1330);

  input6 = createElement('textarea', 'Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit. \nPhasellus massa arcu, convallis \neu tristique a, euismod a purus. \nIn hac habitasse platea dictumst. \nUt sed ...');
  input6.position(20, 1380);

  // OBJKT number
  msg = createP('Insert the <b>OBJKT number</b>');
  msg.position(20, 1460);

  input4 = createInput('/OBJKT/9999');
  input4.position(20, 1500);

//input Editions Number
  msg = createP('How many <b>editions?</b> eg. 10/10');
  msg.position(20, 1540);

  input5 = createInput('10/10');
  input5.position(20, 1580);

  //future qrcode generator implementation
  // qr.loadPixels();
  // get color of middle pixel
  // c = hen.get(hen.width / 2, hen.height / 2);

//final text
  msg = createP('<b> *bip bop* real time rendering baby, now just save the image</b>');
  msg.position(20, 1610);

//credits - dear hax0r, if you contributed paste your alias here
  msg = createP('By baby commando with love <3');
  msg.position(20, 1810);

//just a dot to make the page longer -
//or maybe a future easter egg hehe
  msg = createP('.');
  msg.position(20, 1840);

}

//========================================================
//drawing on the canvas (real time rendering from inputs)

function draw() {
  background(255);
  if (img) {
  image(img, 500, 0, 800, 800);
  }

  //future qrcode generator implementation
  //  image(qr, 70, 594, 130, 130);

  //draw hen logo
  image(hen, 12, 40, 300, 170);

  // display text from Artwork Name input
  textSize(40);
  text(input2.value(), 60, 270);
  textStyle(BOLD);

  //display text from Artist Name input
  textSize(22);
  text(input3.value(), 60, 220);
  textStyle(BOLD);

  //OBJKT counter Input
  textSize(30);
  text(input4.value(), 60, 700);
  textStyle(BOLD);

  //EDITIONS Counter Input
  textSize(30);
  text(input5.value(), 60, 667);
  textStyle(BOLD);

  //DESCRIPTION Counter Input
  textSize(20);
  text(input6.value(), 60, 390);
  textStyle(BOLD);

  //DESCRIPTION Counter Input
  textSize(14);
  text("collect this NFT now on hicetnunc.xyz/", 60, 723);
  textStyle(BOLD);



}

//put uploaded image on canvas
function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
    let c = get();
    image(c, width / 2, 0);
  } else {
    img = null;
  }


}
