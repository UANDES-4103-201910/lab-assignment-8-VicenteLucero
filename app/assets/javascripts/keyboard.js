// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(document).ready(function() {

    class KeyboardController{

        constructor(id){
         this.target=$(id);
         this.element = document.getElementById("target");
         this.shift = 0
        }

        toggle(){
            var key = document.getElementById("kcontainer");
            if (key.style.display == "none"){
                key.style.display = "block"
            }
            else{
                key.style.display = "none"
            }
        }

        Press(key){

            if (key.text().includes("Tab")){
                this.element.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            else if (key.text().includes("Accept")){
                alert("Accepted")
            }
            else if (key.text().includes("Cancel")){
                alert("Canceled")
            }
            else if (key.text().includes("Enter")){
                this.element.innerHTML += "<br>";
            }

            else if (key.text().includes("Bksp")){
                var a = this.element.innerHTML;
                var len = this.element.innerHTML.length;
                if (a.length > 0){
                    this.element.innerHTML = a.substring(0, a.length -1);
                }
                var other_len = this.element.innerHTML.length;
                if (len == other_len){
                    var place = this.element.innerHTML.lastIndexOf("&nbsp;");
                    this.element.innerHTML = this.element.innerHtml.substring(0,place) + this.element.innerHTML.substring(pos+6);
                }
            }

            else if (key.hasClass("key-space")){
                this.element.innerHTML += "&nbsp"
            }
            else if (key.text().includes("Accept")){
                alert("Accepted")
            }
            else if (key.text().includes("Shift")){
                this.shift=1
            }
            else{
                var mayuscula = key.text().trim();
                if(this.shift == 0){
                 mayuscula = mayuscula.toLowerCase();
                 this.element.innerHTML += mayuscula;
                }
                if(this.shift==1){
                    this.element.innerHTML += mayuscula;
                    this.shift = 0;
                }
            }
        }

    }

    var input = new KeyboardController("target");

    $(".key").click(function(){
        input.Press($(this))
    });

    $("#button").click(function(){
        input.toggle()
    });


	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
});