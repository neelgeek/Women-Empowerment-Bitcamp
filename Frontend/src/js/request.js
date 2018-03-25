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
                "password": $('#PasswordWoman').val(),
                "confirmpassword": $('#ConfirmPasswordWoman').val(),
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


    $('#WomenLogin').submit(function(event) {

        event.preventDefault();

        console.log('AjaX CALLED');
        $.ajax({
            url: 'http://localhost:8000/user/signin',
            dataType: "json",
            data: {
                "mobile": $('#pno').val(),
                "password": $('#pass').val(),

            },
            type: 'POST',
            jsonpCallback: 'callback', // this is not relevant to the POST anymore
            success: function(data) {
                // var ret = jQuery.parseJSON(data);
                //            $('#women-signup').html(ret.msg);
                console.log(data)
                if (data) {
                    window.location = "../Frontend/loginpage-women.html";
                }
            },
            error: function(xhr, status, error) {
                console.log('Error: ' + status + ' ' + error.message);
                //            $('#lblResponse').html('Error connecting to the server.');
            },
        });
    });


    $('#FormCompany').submit(function(event) {

        event.preventDefault();

        console.log('AjaX CALLED');
        $.ajax({
            url: 'http://localhost:8000/company/signup',
            dataType: "json",
            data: {
                "name": $('#NameEnterprise').val(),
                "email": $('#EmailEnterprise').val(),
                "password": $('#password').val(),
                "district": $('#DistrictEnterprise').val(),
                "state": $('#StateEnterprise').val(),
                "isIndus": ($('#Enterprise').val() == "Enterprise") ? true : false,

            },
            type: 'POST',
            jsonpCallback: 'callback', // this is not relevant to the POST anymore
            success: function(data) {

                // var ret = jQuery.parseJSON(data);
                //            $('#women-signup').html(ret.msg);
                console.log(data)
                if (data) {
                    window.location = "../Frontend/loginpage-company.html";
                }
            },
            error: function(xhr, status, error) {
                console.log('Error: ' + status + ' ' + error.message);
                //            $('#lblResponse').html('Error connecting to the server.');
            },
        });
    });


    $('#CompanyLogin').submit(function(event) {

        event.preventDefault();

        console.log('AjaX CALLED');
        $.ajax({
            url: 'http://localhost:8000/company/signin',
            dataType: "json",
            data: {
                "email": $('#comp_email').val(),
                "password": $('#comp_password').val(),

            },
            type: 'POST',
            jsonpCallback: 'callback', // this is not relevant to the POST anymore
            success: function(data) {
                // var ret = jQuery.parseJSON(data);
                //            $('#women-signup').html(ret.msg);
                console.log(data)
                if (data) {
                    window.location = "../Frontend/loginpage-company.html";
                }
            },
            error: function(xhr, status, error) {
                console.log('Error: ' + status + ' ' + error.message);
                //            $('#lblResponse').html('Error connecting to the server.');
            },
        });
    });

    // $.each(data.name,function(index,value){
    //     console.log(value);
    // });

    //    $('#FormCompany').submit(function(event){
    //         event.preventDefault();
    //         console.log("Ajax called?");   
    //         $.ajax({
    //             url: 'http://localhost:8000/user/signup',
    //             dataType:JSON,
    //             data: {
    //                 "name":$('#NameEnterprise').val(),
    //                 "email":$('#EmailEnterprise').val(),
    //                 "address":$('#AddressEnterprise').val(),
    //                 "state":$('#StateEnterprise').val(),
    //                 "district":$('#DistrictEnterprise').val(),
    //                 "pincode":$('#PincodeEnterprise').val(),
    //                 "enterprise":$('#Enterprise').val()

    //             },
    //             type: 'POST',
    //             jsonpCallback: 'callback', // this is not relevant to the POST anymore
    //             success: function(data) {
    //                 // var ret = jQuery.parseJSON(data);
    //                 //            $('#women-signup').html(ret.msg);
    //                 console.log(data)
    //             },
    //             error: function(xhr, status, error) {
    //                 console.log('Error: ' + status + ' ' + error.message);
    //             }
    //         });


});