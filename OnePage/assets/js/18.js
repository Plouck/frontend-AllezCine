jQuery(document).ready(function() {

    var agemodal = "#agemodal",
        submit   = "#formsubmit",
        content  = "#content";

    // A handy little function to erase cookies,
    // useful when testing/debugging.
    //
    // eraseCookie('jqverify');

    if (!readCookie('jqverify')) {
        jQuery(agemodal).fadeIn();
    } else {
        jQuery(content).fadeIn();
    };

    jQuery(formsubmit).on('click', function(event){
        event.preventDefault ? event.preventDefault() : event.returnValue = false;

        var day, month, year, age, remember, mydate, currdate;

        jQuery("#day").val() ? day = jQuery("#day").val() : day = 'notset';
        jQuery("#month").val() ? month = jQuery("#month").val() : month = 'notset';
        jQuery("#year").val() ? year = jQuery("#year").val() : year = 'notset';
        //age = jQuery("#location").val();
        age = 18;
        jQuery("#remember").is(':checked') ? remember = 'checked' : remember = false;

        mydate = new Date();
        mydate.setFullYear(year, month-1, day);
        currdate = new Date();
        currdate.setFullYear(currdate.getFullYear() - age);

        if (day == 'notset' || month == 'notset' || year == 'notset' ) {
            alert("Please enter your birthdate.");
            return false;
        } else if (age == 99 ) {
            alert("Sorry, persons from your country are not permitted to view this site");
            return false;
        } else if ((currdate - mydate) < 0) {
            alert("Sorry, only persons over the age of " + age + " may enter this site");
            location.href="https://www.imdb.com/"
            return false;
        } else {
            if (remember) {
                createCookie('jqverify', 1, 3650); // expire in 10 years
            } else {
                createCookie('jqverify', 1, 1); // expire in a day
            };
            jQuery(agemodal).fadeOut();
            jQuery(content).fadeIn();
            return true;
        }
    });

    function createCookie(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";

        console.log(name+"="+value+expires+"; path=/")
    };

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    };

    function eraseCookie(name) {
        createCookie(name,"",-1);
    };

});
