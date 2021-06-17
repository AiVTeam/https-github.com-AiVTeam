
    var i = 0;   
    var y = 0;

    let textanimsvg =  setInterval(function(){
        $('.rt-text-svg:eq(' + i +')').addClass('load-text-svg');
        i++;
        if(i===50){
            clearInterval(textanimsvg);
            while (i>=0){
                $('.rt-text-svg:eq(' + i +')').removeClass('load-text-svg');
                i--;
            }
            i = 0;
        }
    },150);

    setInterval(function(){

        textanimsvg =  setInterval(function(){
            $('.rt-text-svg:eq(' + i +')').addClass('load-text-svg');
            i++;
            if(i===50){
                clearInterval(textanimsvg);
                while (i>=0){
                    $('.rt-text-svg:eq(' + i +')').removeClass('load-text-svg');
                    i--;
                }
                i = 0;
            }
        },150);

    }, 8000);
   
    
    
    var path = document.querySelector('.skobisvg');
    console.log(path.getTotalLength())

