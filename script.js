$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#development-image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#design-image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product-image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $(".work1").mouseover(function(){
      $("#overlay1").show();
    }).mouseout(function(){
      $("#overlay1").hide();
    });
  });

  $(document).ready(function(){
    $(".work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });

  $(document).ready(function(){
    $(".work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });
  $(document).ready(function(){
    $(".work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });
  $(document).ready(function(){
    $(".work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
  });
    $(document).ready(function(){
    $(".work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
  });
    $(document).ready(function(){
    $(".work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
  });
    $(document).ready(function(){
    $(".work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });

  $(document).ready(function () {
		$(".name").show();
	}, function () {
		$(".name").hide();
	});

function sendtext() {
	var name = $("#FNAME").val();
    var name = $("#MNAME").val();
	var email = $("EMAIL").val();

	if (name === "" || email === "") {
		alert("Please fill in all your details")
	} else {
		alert("Thank you " + name + "! We shall get back to you shortly, Thank you.");
		document.getElementById("").reset();
	};
};
$(document).ready(function () {
    document.getElementById("form").addEventListener("submit", popUp);
    function popUp() {
        alert("Your feedback has been received.");
    }
});
