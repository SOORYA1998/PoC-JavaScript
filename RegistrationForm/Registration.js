function validation(e) {
    e.preventDefault();
    var hname = document.getElementById('Hsptlname');
    var dname = document.getElementById('Dtrname');
    var specialisation = document.getElementById("spcl");
    var gender = '';
    if (document.getElementById('male').checked) {
        gender = 'Male';
      }
      if (document.getElementById('female').checked) {
        gender ='Female';
      }
      if (document.getElementById('others').checked) {
        gender = 'Others';;
      }

    var degree = document.getElementById("dgree");
    var expert = document.getElementById("expert-in");
    var mobile = document.getElementById("mobile");
    var language = document.getElementById("lang");

    var aarr = [];

    if (hname.value.length <= 0) {
        aarr.push(hname.name);
    }
    if (dname.value.length <= 0) {
        aarr.push(dname.name);

    }    

    if (specialisation.value.length <= 0) {
        aarr.push(specialisation.name);
    }

    if (expert.value.length <= 0) {
        aarr.push(expert.name);
    }

    if (degree.value == "--None--") {
        aarr.push(degree.name);
    }

    if (language.value.length <= 0) {
        aarr.push(lang.name);
    }

    if (mobile.value.length <= 0) {
        aarr.push(mobile.name);
    }
    console.log(aarr);
    if (aarr.length > 0)
        alert(`${aarr.toString()} can't be empty`);
    else{
        alert("Registration Successfull!");
        document.write("Hospital Name : " + hname.value + "<br>" +
            "Doctor Name : " + dname.value + "<br>" +
            "Gender : " + gender + "<br>" +
            "Specialization : " + specialisation.value + "<br>" +
            "Degree : " + degree.value + "<br>" +
            "Expert In : " + expert.value + "<br>" +
            "Languages Known : " + language.value + "<br>" +
            "Mobile : " + mobile.value);
        }
}
    