function whatsapp(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var message = document.getElementById("message").value;
    
    var url = "https://wa.me/8591295272?text="
    +"Name : "+name+"%0a"
    +"Email : "+email+"%0a"
    +"Phone : "+phone+"%0a"
    +"Date : "+date+"%0a"
    +"Message : "+message;
    
    window.open(url,'_blank').focus();
    }