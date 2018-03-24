
$(document).ready(function() {
    $('#SubmitWomen').on('click',function(event){
        event.preventDefault();
        $.ajax({
        url: 'localhost:8000/user/signup',
        // dataType: "jsonp",
        data: {
        name: $('#NameWoman').val(), 
          age: $('#AgeWoman').val(),
          address: $('#AddressWomen').val(),
          district:$('#DistrictWoman').val(),
          state:$('#StateWoman').val(),
          pincode:$('PincodeWoman').val()
        },
        type: 'POST',
        jsonpCallback: 'callback', // this is not relevant to the POST anymore
        success: function (data) {
            var ret = jQuery.parseJSON(data);
//            $('#women-signup').html(ret.msg);
            console.log('Success: ')
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
//            $('#lblResponse').html('Error connecting to the server.');
        },
    });
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