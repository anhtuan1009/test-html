

function submitFormContactDK(frm){
                                $.ajax({
                                    url: 'vindex/receiveNews',
                                    type: 'POST',
                                    data: $(frm).serialize(),
                                })
                                .done(function(e) {


                                    try{
                                        var json = $.parseJSON(e);
                                        alert(json.message);
                                    }
                                    catch(ex){

                                    }
                                })
                                .fail(function(e) {
                                    console.log(e);
                                })
                                .always(function() {
                                   try{
                                        var json = $.parseJSON(e);
                                        alert(json.message);
                                    }
                                    catch(ex){

                                    }
                                });
                                
};



function submitFormContactDG(frm){
                                $.ajax({
                                    url: 'vindex/comment',
                                    type: 'POST',
                                    data: $(frm).serialize(),
                                })
                                .done(function(e) {


                                    try{
                                        var json = $.parseJSON(e);
                                        alert(json.message);
                                    }
                                    catch(ex){

                                    }
                                })
                                .fail(function(e) {
                                    console.log(e);
                                })
                                .always(function() {
                                   try{
                                        var json = $.parseJSON(e);
                                        alert(json.message);
                                    }
                                    catch(ex){

                                    }
                                });
                                
};



function submitFormContact(frm,link){
                                $.ajax({
                                    url: 'vindex/'+link,
                                    type: 'POST',
                                    data: $(frm).serialize(),
                                })
                                .done(function(e) {


                                    try{
                                        var json = $.parseJSON(e);
                                        alert(json.message);
                                    }
                                    catch(ex){

                                    }
                                })
                                .fail(function(e) {
                                    console.log(e);
                                })
                                .always(function() {
                                   try{
                                        var json = $.parseJSON(e);
                                        alert(json.message);
                                    }
                                    catch(ex){

                                    }
                                });

};


$(document).ready(function(){

    $('.enuy').find('table').attr('width','100%');
    $('.enuy').find('tr').attr('width',' ');
    $('.enuy').find('th').attr('width',' ');
    $('.enuy').find('td').attr('width',' ');

});


$(document).ajaxStart(function() {
   $('.load').fadeIn(300);
});


$(document).ajaxComplete(function(event, xhr, settings) {
    $('.load').delay(500).fadeOut(500);
});


function scrollDiv(id){

    $('html,body').animate({
       scrollTop: $("#"+id).offset().top
    });

}
