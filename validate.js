function validate(){
    let date=document.getElementById("date").value;
    let currentDate=new Date().toISOString().slice(0,10);
    
    if(date<currentDate)
        {
            alert("Entered date is not valid!");
        }
    else{
        window.open("edit-menu-item-status.html");
    }
}