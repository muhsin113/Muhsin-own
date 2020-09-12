function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    var x = document.form ["myFrom"]["place"].value;
    if (x =="") {
        alert("place must be filled out");
        return false;
    }
    var x = document.form["myForm"]["Email"].value;
    if (x =="") {
        alert("Email must be filled out");
        return false;
    }
    var x = document.forms['subject'].value;
    if(x =="") {
        alert("write some thing");
        return false;
    }
  }
  $("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyLoWzsprBJXIRQUcmXMZ3Rzdp5xpgxG_eDidFP6A/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})