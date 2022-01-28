$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });


    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
}); 


// for contact and the icon of title
    function fun() {
        alert ("Thank You for you response");
    }
    var d = new Date();
    var s= 0;
    var m=0;
    var h=0;
    var count = 2;
    setInterval(function() {
        d = new Date();
        // m=d.getMilliseconds();
        if (count<=43){
            document.getElementById("icon").href = "icon/apngframe"+count+".png";
            count=count+1;
        }else{count=1;}
        // document.title =m;
    },23.255814)
    
