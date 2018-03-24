$(document).ready(function() {
<
    $('#FormWomen').submit(function(event) {

        event.preventDefault();
        console.log('AjaX CALLED');
        $.ajax({
            url: 'http://localhost:8000/user/signup',
            dataType: "json",
            data: {
                "name": $('#NameWoman').val(),
                "age": $('#AgeWoman').val(),
                "address": $('#AddressWomen').val(),
                "district": $('#DistrictWoman').val(),
                "state": $('#StateWoman').val(),
                "pincode": $('PincodeWoman').val()
            },
            type: 'POST',
            jsonpCallback: 'callback', // this is not relevant to the POST anymore
            success: function(data) {
                // var ret = jQuery.parseJSON(data);
                //            $('#women-signup').html(ret.msg);
                console.log(data)
            },
            error: function(xhr, status, error) {
                console.log('Error: ' + status + ' ' + error.message);
                //            $('#lblResponse').html('Error connecting to the server.');
            },
        });
>>>>>>> 18892ea88a20fa3634635a48cc3cb13206c622cd
    });

});



//    $(function() {
//       
//    $("#FormWomen").submit(function(event) {
//
//      
//      event.preventDefault();
//
//     
//      var $form = $( this ),
//          url = $form.attr( 'action' );
//
//      
//      var posting = $.post( url, { 
//          name: $('#NameWoman').val(), 
//          age: $('#AgeWoman').val(),
//          address: $('#AddressWomen').val(),
//          district:('#DistrictWoman').val(),
//          state:$('#StateWoman').val(),
//          pincode:$('PincodeWoman').val(),
//      
//      });
//
//      
//      posting.done(function( data ) {
//        alert('success');
//      });
//    });
//        
//        });        
//        
//       });
//     });