
/*
Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.

При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться к текстовому содержимому дисплея.

Кнопка очистки имеет класс clear. При клике на неё весь текст внутри дисплея должен удаляться, для этого в текстовое содержимое дисплея нужно записать пустую строку.
*/



let display = document.querySelector('.display');
let keys = document.querySelectorAll('.key');
let clear = document.querySelector('.clear');
/*let text = document.createElement('.key');*/
console.log(keys);
  keys[0].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[0].textContent;
  display.append(text);
};

keys[1].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[1].textContent;
  display.append(text);
};

keys[2].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[2].textContent;
  display.append(text);
};

keys[3].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[3].textContent;
  display.append(text);
};

keys[4].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[4].textContent;
  display.append(text);
};

keys[5].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[5].textContent;
  display.append(text);
};


keys[6].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[6].textContent;
  display.append(text);
};

keys[7].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[7].textContent;
  display.append(text);
};

keys[8].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[8].textContent;
  display.append(text);
};

keys[9].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[9].textContent;
  display.append(text);
};

keys[10].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[10].textContent;
  display.append(text);
};

keys[11].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[11].textContent;
  display.append(text);
};

keys[12].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[12].textContent;
  display.append(text);
};

keys[13].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[13].textContent;
  display.append(text);
};

keys[14].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[14].textContent;
  display.append(text);
};

keys[15].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[15].textContent;
  display.append(text);
};

keys[16].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[16].textContent;
  display.append(text);
};

keys[17].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[17].textContent;
  display.append(text);
};

keys[18].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[18].textContent;
  display.append(text);
};

keys[19].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[19].textContent;
  display.append(text);
};

keys[20].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[20].textContent;
  display.append(text);
};

keys[21].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[21].textContent;
  display.append(text);
};

keys[22].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[22].textContent;
  display.append(text);
};

keys[23].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[23].textContent;
  display.append(text);
};

keys[24].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[24].textContent;
  display.append(text);
};

keys[24].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[24].textContent;
  display.append(text);
};

keys[25].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[25].textContent;
  display.append(text);
};

keys[26].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[26].textContent;
  display.append(text);
};

keys[27].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[27].textContent;
  display.append(text);
};

keys[28].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[28].textContent;
  display.append(text);
};

keys[29].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[29].textContent;
  display.append(text);
};

keys[30].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[30].textContent;
  display.append(text);
};

keys[31].onclick = function() {
  
  let text = document.createElement('span');
  text.textContent = keys[31].textContent;
  display.append(text);
};

keys[32].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[32].textContent;
  display.append(text);
};

keys[33].onclick = function() {
  let text = document.createElement('span');
  text.textContent = keys[33].textContent;
  display.append(text);
};

clear.onclick = function () {
  let span = document.querySelectorAll('span');
  for (let spa of span) { 
  spa.remove("span")};
};
  
  
  /*clear.oninput = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.textContent = display.value;
  display.value = '';
  display.append(newComment);};*/