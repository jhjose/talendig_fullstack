const formCreateUser = document.getElementById('form-create-user');

formCreateUser.addEventListener('submit', function(event){
    event.preventDefault();
    
    console.log('event', event)
});