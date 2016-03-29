function insertNum(){
	var nums = document.getElementsByClassName('num');
  for(var i=0, len = nums.length; i < len; i++){
    nums[i].innerHTML = (i+1) + ")";
  }
}

window.onload(insertNum);

// copy <span class="num"></span> to the elements that you want to give numbering for
