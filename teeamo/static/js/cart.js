var updateBtns = document.getElementsByClassName('update-cart')

for (var i=0; i< updateBtns.length; i++) {
    updateBtns[i].addEventListener('click',function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        var size=this.dataset.size
        console.log(productId,action,size)

        console.log('user',user)
        if (user=='AnonymousUser'){
            addCookieItem(productId,action)
        }
        else{
        updateUserOrder(productId,action,size)
        }
    })
}
function addCookieItem(productId,action){
    console.log('Not Logged in..')
    if (action == 'add'){
		if (cart[productId] == undefined){
		cart[productId] = {'quantity':1}

		}else{
			cart[productId]['quantity'] += 1
		}
	}

	if (action == 'remove'){
		cart[productId]['quantity'] -= 1

		if (cart[productId]['quantity'] <= 0){
			console.log('Item should be deleted')
			delete cart[productId];
		}
	}
	document.cookie ='cart=' + JSON.stringify(cart) + ";domain=;path=/"
	location.reload()
}

function updateUserOrder(productId,action,size){
     console.log('User is logged in sending data');

     var url='/teeamo/update_item/'
     fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',

        'Accept': 'application/json',

            'X-CSRFToken': csrftoken,
        },
        body:JSON.stringify({'productId':productId,'action':action,'size':size})
     })
      .then((response) => {
        return response.json();
     })

     .then((data) => {
        console.log('data:',data);
     });


}


