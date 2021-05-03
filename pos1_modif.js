$(document).ready(function(){
	//////////////////////////   E M P T Y  AND U N C H E C K //////////////////////////////////////
	function uncheck(){
			var checkboxes = document.getElementsByTagName('input');

			for (var i=0; i<checkboxes.length; i++)  {
			  if (checkboxes[i].type == 'checkbox')   {
			    checkboxes[i].checked = false;
			  }
			}
			$("#bundle_A").prop( "checked", false );
			$("#bundle_B").prop( "checked", false );
			var imgReplace1 = document.getElementsByClassName("img1")[0];
    		var imgReplace2 = document.getElementsByClassName("img2")[0];
    		var imgReplace3 = document.getElementsByClassName("img3")[0];
    		var imgReplace4 = document.getElementsByClassName("img4")[0];
    		imgReplace1.style.visibility = "hidden";
    		imgReplace2.style.visibility = "hidden";
    		imgReplace3.style.visibility = "hidden";
    		imgReplace4.style.visibility = "hidden";
	}
	
	function order(name,amount){
		document.getElementById("summary").value = name;
		document.getElementById("quantity").value = 1;
		document.getElementById("price").value = amount;
	}
	function empty(){
		document.getElementById("summary").value = "";
		document.getElementById("quantity").value = "";
		document.getElementById("price").value = "";	
		document.getElementById("disc_amt").value = "";
		document.getElementById("discntd_amt").value = "";
		document.getElementById("total_bills").value = "";
		document.getElementById("cash").value = "";
		document.getElementById("change").value = "";
	}
	function images(src1,src2,src3,src4,visibility){
			var imgReplace1 = document.getElementsByClassName("img1")[0];
    		imgReplace1.src = src1;
    		var imgReplace2 = document.getElementsByClassName("img2")[0];
    		imgReplace2.src = src2;
    		var imgReplace3 = document.getElementsByClassName("img3")[0];
    		imgReplace3.src = src3;
    		var imgReplace4 = document.getElementsByClassName("img4")[0];
    		imgReplace4.src = src4;
    		imgReplace1.style.visibility = visibility;
    		imgReplace2.style.visibility = visibility;
    		imgReplace3.style.visibility = visibility;
    		imgReplace4.style.visibility = visibility;
	}

	
	$("#karekare").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#karekare").prop( "checked", true );
			order("Kare-Kare","195.00");
 		} else {
 			empty();
 		}
 	});

 	$("#adobo").click(function(e){
 		if($(this).prop("checked") == true){
		uncheck();
 			$("#adobo").prop( "checked", true );
 			order("Adobo","250.00");
 		} else {
 			empty();
 		}
 	});

 	$("#menudo").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#menudo").prop( "checked", true );
 			order("Menudo","200.00");
 		} else {
 			empty();
 		}
 	});
 	$("#caldereta").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#caldereta").prop( "checked", true );
 			order("Caldereta","270.00");
 		} else {
 			empty();
 		}
 	});
 	$("#shrimpsinigang").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#shrimpsinigang").prop( "checked", true );
 			order("Shrimp Sinigang","220.00");
 		} else {
 			empty();
 		}
 	});
 	$("#porksinigang").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#porksinigang").prop( "checked", true );
 			order("Pork Sinigang","260.00");
 		} else {
 			empty();
 		}
 	});
 	$("#tortangtalong").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#tortangtalong").prop( "checked", true );
 			order("Tortang Talong","70.00");
 		} else {
 			empty();
 		}
 	});
 	$("#ginataanglangka").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#ginataanglangka").prop( "checked", true );
 			order("Ginataang Langka","100.00");
 		} else {
 			empty();
 		}
 	});
 	$("#lechonpaksiw").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#lechonpaksiw").prop( "checked", true );
 			order("Lechon Paksiw","220.00");
 		} else {
 			empty();
 		}
 	});
 	$("#bicol").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#bicol").prop( "checked", true );
 			order("Bicol Express","200.00");
 		} else {
 			empty();
 		}
 	});
 	$("#relyeno").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#relyeno").prop( "checked", true );
 			order("Relyenong Bangus","150.00");
 		} else {
 			empty();
 		}
 	});
 	$("#afritada").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#afritada").prop( "checked", true );
 			order("Afritada","250.00");
 		} else {
 			empty();
 		}
 	});

 	$("#bistek").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#bistek").prop( "checked", true );
			order("Beef Steak","240.00");
 		} else {
 			empty();
 		}
 	});

 	$("#tinola").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#tinola").prop( "checked", true );
			order("Tinolang Manok","255.00");
 		} else {
 			empty();
 		}
 	});

 	$("#sisig").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#sisig").prop( "checked", true );
			order("Sizzling Sisig","265.00");
 		} else {
 			empty();
 		}
 	});
 	$("#inasal").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#inasal").prop( "checked", true );	
			order("4 Large Chicken Inasal","280.00");
 		} else {
 			empty();
 		}
 	});
 	$("#sinampalukan").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#sinampalukan").prop( "checked", true );
			order("Sinampalukang Manok","300.00");
 		} else {
 			empty();
 		}
 	});
 	$("#nilaga").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#nilaga").prop( "checked", true );	
			order("1 Pot Nilagang Baboy","270.00");
 		} else {
 			empty();
 		}
 	});

 	$("#chopsuey").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#chopsuey").prop( "checked", true );
			order("Chopsuey","115.00");
 		} else {
 			empty();
 		}
 	});

 	$("#tapa").click(function(e){
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#tapa").prop( "checked", true );
			order("Beef Tapa","275.00");
 		} else {
 			empty();
 		}
 	});

 	//BUNDLES CODE
 	$("#bundle_A").click(function(e){
 		
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#bundle_A").prop( "checked", true );
 			$("#rice1").prop( "checked", true );
 			$("#menudo").prop( "checked", true );
 			$("#menudo1").prop( "checked", true );
 			$("#karekare1").prop( "checked", true );
 			$("#karekare").prop( "checked", true );
 			$("#shrimpsinigang1").prop( "checked", true );
 			$("#shrimpsinigang").prop( "checked", true );
 			$("#relyeno1").prop( "checked", true );
 			$("#relyeno").prop( "checked", true );
 			$("#coke1").prop( "checked", true );
 			$("#Halo-Halo").prop( "checked", true );
 			$("#bundle_B").prop( "checked", false );
    		images("menuphotos/menudo.jpg","menuphotos/karekare.jpg","menuphotos/shrimpsinigang.jpg","menuphotos/relyeno.jpg","visible");
    		
 			order("1 Pot Rice \nMenudo \nKareKare \nShrimp Sinigang \n1 Large Relyenong Bangus \n1.5 L Coke \n4 Summer Halo-Halo","850.00");
 		} else {
 			empty();
 		}
 	});


 	$("#bundle_B").click(function(e){
 		
 			
 		if($(this).prop("checked") == true){
 			uncheck();
 			$("#bundle_B").prop( "checked", true );
 			$("#rice2").prop( "checked", true );
 			$("#porksinigang").prop( "checked", true );
 			$("#porksinigang1").prop( "checked", true );
 			$("#tortangtalong1").prop( "checked", true );
 			$("#tortangtalong1").prop( "checked", true );
 			$("#afritada").prop( "checked", true );
 			$("#afritada1").prop( "checked", true );
 			$("#lechonpaksiw").prop( "checked", true );
 			$("#lechonpaksiw1").prop( "checked", true );
 			$("#tea").prop( "checked", true );
 			$("#pandan").prop( "checked", true );
 			
    		images("menuphotos/porksinigang.jpg","menuphotos/tortangtalong.jpg","menuphotos/afritada.jpg","menuphotos/lechonpaksiw.jpg","visible");
    		
 			order("1 Pot Rice \n1 Pot Pork Sinigang \n3 Large Tortang Talong \nAfritada \nLechon Paksiw \n1Pitcher Iced Tea \n4 Buko Pandan","790.00");
 		} else {
 			empty();
 		}
 	});

 	$("#calculate").click(function(e){
	 e.preventDefault(); 
	 var price, quantity, amount_to_pay, food;
	 //to convert string value from input box into numeric value use for computation
	 price = $("#price").val() - 0;
	 food = $("#summary").val();
	 quantity = $("#quantity").val() - 0;
	 // formulation of formula needed for the computation involved.
	 total_bills = (price * quantity);
	// displaying the javascript variable content to corresponding html input type.
	 document.getElementById("price").value = price;
	 document.getElementById("quantity").value = quantity;
	 document.getElementById("price").value = price + ".00";
	 document.getElementById("total_bills").value = total_bills + ".00";
	 });


 	$("#change_button").click(function(e){
		 e.preventDefault();
		 var price, quantity, total_bills, cash, change;
		 price = $("#price").val() - 0; 
		 quantity = $("#quantity").val() - 0;
		 cash = $("#cash").val() - 0;
		 total_bills = $("#total_bills").val() - 0;

		 if (document.getElementById("cash").value=="") {
		 	window.confirm("Enter Cash Amount.");
		 }
		 else if (cash < total_bills) {
		 	window.confirm("Insufficient Cash Amount.");
		 }
		 else{
			 change1 = cash - total_bills;
			 document.getElementById("price").value = price + ".00";
			 document.getElementById("quantity").value = quantity;
			 document.getElementById("total_bills").value = total_bills +".00";
			 document.getElementById("cash").value = cash;
			 document.getElementById("change").value = change1+".00";
		}
	 });

 	$("#new").click(function(e){
 	e.preventDefault();
 	uncheck();
 	empty();
 			
	});

 	$("#print").click(function(e){
 	e.preventDefault();
 	if($("#price").val()==""){
 		document.getElementById("summary").value = "----------- E M P T Y  T R A N S A C T I O N -------------";
 	}
 	else{
 	 var price, quantity, total_bills, cash, change, summary;
		 price = $("#price").val(); 
		 quantity = $("#quantity").val();
		 cash = $("#cash").val();
		 total_bills = $("#total_bills").val();
		 summary = $("#summary").val();
		 change = $("#change").val();
		 uncheck();
 		//empty();
 		document.getElementById("summary").value = "---------------------ORDER RECEIPT--------------------"+"\n"+"\n"+
 		summary + ".............................. P" 
 		+price+"\nQty x"+quantity+"................................ P"+total_bills+"\nCash:"+".................................. P"+cash+"\nChange:"
 		+"................................ P"+change+"\n\n\n'Thank You For Ordering, Have a Happy Family Meal!'"+"\n";
 		
 	}
 });

});