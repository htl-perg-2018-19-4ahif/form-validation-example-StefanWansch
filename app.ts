$(document).ready(function () {
    $("#emailMandatory").hide();
    $("#otherMediaChannel").hide();
    $("#submit").hide();
});

$(document).on("load change", function () {
    let valueE = $("#email").val();         //Email
    let valueV = $("#firstName").val();     //Vorname
    let valueN = $("#lastName").val();      //Nachname
    let valueMedia = $("#mediaChannelSelect").val();
    let news = $("#newsletter").prop('checked');

    if (valueE == "" && news == true) {
        $("#emailMandatory").show();
        $("#submit").hide();
    } else {
        $("#emailMandatory").hide();
    }
    if (valueN != "") {
        $("#lastNameMandatory").hide();
    } else {
        $("#submit").hide();
        $("#lastNameMandatory").show();
    }
    if (valueV != "") {
        $("#firstNameMandatory").hide();
    } else {
        $("#submit").hide();
        $("#firstNameMandatory").show();
    }
    if (valueMedia == "Other") $("#otherMediaChannel").show();
    //Submit
    if (valueN != "" && valueV != "" && news == true && valueE != "") $("#submit").show();
    if (valueN != "" && valueV != "" && news == false) $("#submit").show();

});