    $(function() {
       
    $("#FormWomen").submit(function(event) {

      
      event.preventDefault();

     
      var $form = $( this ),
          url = $form.attr( 'action' );

      
      var posting = $.post( url, { 
          name: $('#NameWoman').val(), 
          age: $('#AgeWoman').val(),
          address: $('#AddressWomen').val(),
          district:('#DistrictWoman').val(),
          state:$('#StateWoman').val(),
          pincode:$('PincodeWoman').val(),
      
      });

      
      posting.done(function( data ) {
        alert('success');
      });
    });
        
        });        
        
       });
     });