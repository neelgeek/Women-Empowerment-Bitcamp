$(document).ready(function() {

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
                "pincode": $('PincodeWoman').val(),
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
    });

   $('#FormCompany').submit(function(event){
    
        event.preventDefault();
        console.log("Ajax called?");   
        $.ajax({
            url: 'http://localhost:8000/user/signup',
            dataType:JSON,
            data: {
                "name":$('#NameEnterprise').val(),
                "email":$('#EmailEnterprise').val(),
                "address":$('#AddressEnterprise').val(),
                "state":$('#StateEnterprise').val(),
                "district":$('#DistrictEnterprise').val(),
                "pincode":$('#PincodeEnterprise').val(),
                "enterprise":$('#Enterprise').val()

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
            }
        });
   }); 

});

