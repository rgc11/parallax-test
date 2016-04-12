var input = document.querySelector('#submit input[name=idk]');
var submit = document.querySelector('#submit input[type=submit]');
var para = document.querySelector('#title p');

submit.addEventListener('click', function(e){
   if(input.value == '' || input.value == null){
    	return;
   } else {
   		para.style.textTransform = 'capitalize';
		para.innerHTML = input.value;
		input.value = '';
   }
});