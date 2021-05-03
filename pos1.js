$(document).ready(function(){
	
	



	$("#karekare").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#afritada").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#tinola").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );

 			document.getElementById("karekare").onclick = document.getElementById("summary").value = "Kare - Kare";
			document.getElementById("quantity").value = 1;
			document.getElementById("price").value = 195 + ".00";
 		} else {
 			document.getElementById("karekare").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});

 	$("#adobo").click(function(e){
 		if($(this).prop("checked") == true){
		$("#menudo").prop( "checked", false );
		$("#karekare").prop( "checked", false );
		$("#shrimpsinigang").prop( "checked", false );
		$("#porksinigang").prop( "checked", false );
		$("#afritada").prop( "checked", false );
		$("#bicol").prop( "checked", false );
		$("#caldereta").prop( "checked", false );
		$("#relyeno").prop( "checked", false );
		$("#ginataanglangka").prop( "checked", false );
		$("#lechonpaksiw").prop( "checked", false );
		$("#tortangtalong").prop( "checked", false );
		$("#bistek").prop( "checked", false );
			$("#tinola").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );

 			document.getElementById("adobo").onclick = document.getElementById("summary").value = "Adobo";
			document.getElementById("price").value = 250 +".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("adobo").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});

 	$("#menudo").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#afritada").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#tinola").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );

 			document.getElementById("menudo").onclick = document.getElementById("summary").value = "Menudo";
			document.getElementById("price").value = 200 + ".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("menudo").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});
 	$("#caldereta").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#afritada").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
 			$("#bistek").prop( "checked", false );
			$("#tinola").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );

 			document.getElementById("caldereta").onclick = document.getElementById("summary").value = "Caldereta";
			document.getElementById("price").value = 270+".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("caldereta").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});
 	$("#shrimpsinigang").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#afritada").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#tinola").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );

 			document.getElementById("shrimpsinigang").onclick = document.getElementById("summary").value = "1 Pot Shrimp Sinigang";
			document.getElementById("price").value = 220+".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("shrimpsinigang").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});
 	$("#porksinigang").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#afritada").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#tinola").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );

 			document.getElementById("porksinigang").onclick = document.getElementById("summary").value = "1 Pot Pork Sinigang";
			document.getElementById("price").value = 260 +".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("porksinigang").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});
 	$("#tortangtalong").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#afritada").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#tinola").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );

 			document.getElementById("tortangtalong").onclick = document.getElementById("summary").value = "3 Large Tortang Talong";
			document.getElementById("price").value = 70 + ".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("tortangtalong").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});
 	$("#ginataanglangka").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#afritada").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#tinola").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );

 			document.getElementById("ginataanglangka").onclick = document.getElementById("summary").value = "Ginataang Langka";
			document.getElementById("price").value = 100 +".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("ginataanglangka").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});
 	$("#lechonpaksiw").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#afritada").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#tinola").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );

 			document.getElementById("lechonpaksiw").onclick = document.getElementById("summary").value = "Lechon Paksiw";
			document.getElementById("price").value = 220+".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("lechonpaksiw").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});
 	$("#bicol").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#afritada").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#tinola").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );

 			document.getElementById("bicol").onclick = document.getElementById("summary").value = "Bicol Express";
			document.getElementById("price").value = 200+".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("bicol").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});
 	$("#relyeno").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#afritada").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#tinola").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );

 			document.getElementById("relyeno").onclick = document.getElementById("summary").value = "1 Large Relyenong Bangus";
			document.getElementById("price").value = 130+".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("relyeno").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});
 	$("#afritada").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#tinola").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );

 			document.getElementById("afritada").onclick = document.getElementById("summary").value = "Afritada";
			document.getElementById("price").value = 250+".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("afritada").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});

 	$("#bistek").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#tinola").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );
			
 			document.getElementById("afritada").onclick = document.getElementById("summary").value = "Beef Steak";
			document.getElementById("price").value = 240+".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("bistek").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});

 	$("#tinola").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );	
			$("#afritada").prop( "checked", false );	
			
 			document.getElementById("tinola").onclick = document.getElementById("summary").value = "TINOLANG MANOK";
			document.getElementById("price").value = 255+".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("afritada").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});

 	$("#sisig").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );	
			$("#tinola").prop( "checked", false );
			$("#afritada").prop( "checked", false );	
			
 			document.getElementById("afritada").onclick = document.getElementById("summary").value = "Sizzling Sisig";
			document.getElementById("price").value = 265+".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("sisig").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});
 	$("#inasal").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );	
			$("#tinola").prop( "checked", false );
			$("#afritada").prop( "checked", false );	
			
 			document.getElementById("inasal").onclick = document.getElementById("summary").value = "4 Large Chicken Inasal";
			document.getElementById("price").value = 280+".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("inasal").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});
 	$("#sinampalukan").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );	
			$("#tinola").prop( "checked", false );
			$("#afritada").prop( "checked", false );	
			
 			document.getElementById("sinampalukan").onclick = document.getElementById("summary").value = "Sinammpalukang Manok";
			document.getElementById("price").value = 300+".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("sinampalukan").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});
 	$("#nilaga").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );
			$("#tapa").prop( "checked", false );	
			$("#tinola").prop( "checked", false );
			$("#afritada").prop( "checked", false );	
			
 			document.getElementById("nilaga").onclick = document.getElementById("summary").value = "1 Pot Nilagang Baboy";
			document.getElementById("price").value = 270+".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("nilaga").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});

 	$("#chopsuey").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#tapa").prop( "checked", false );	
			$("#tinola").prop( "checked", false );
			$("#afritada").prop( "checked", false );	
			
 			document.getElementById("chopsuey").onclick = document.getElementById("summary").value = "Chopsuey";
			document.getElementById("price").value = 115+".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("chopsuey").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});

 	$("#tapa").click(function(e){
 		if($(this).prop("checked") == true){
 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );	
			$("#tinola").prop( "checked", false );
			$("#afritada").prop( "checked", false );	
			
 			document.getElementById("tapa").onclick = document.getElementById("summary").value = "Beef Tapa";
			document.getElementById("price").value = 275+".00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("tapa").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});

 	//BUNDLES CODE
 	$("#bundle_A").click(function(e){
 		
 		if($(this).prop("checked") == true){
 			$("#rice2").prop( "checked", false );
 			$("#porksinigang").prop( "checked", false );
 			$("#porksinigang1").prop( "checked", false );
 			$("#tortangtalong1").prop( "checked", false );
 			$("#tortangtalong").prop( "checked", false );
 			$("#afritada").prop( "checked", false );
 			$("#afritada1").prop( "checked", false );
 			$("#lechonpaksiw").prop( "checked", false );
 			$("#lechonpaksiw1").prop( "checked", false );
 			$("#tea").prop( "checked", false );
 			$("#pandan").prop( "checked", false );


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

 			var imgReplace1 = document.getElementsByClassName("img1")[0];
    		imgReplace1.src = "menuphotos/menudo.jpg";
    		var imgReplace2 = document.getElementsByClassName("img2")[0];
    		imgReplace2.src = "menuphotos/karekare.jpg";
    		var imgReplace3 = document.getElementsByClassName("img3")[0];
    		imgReplace3.src = "menuphotos/shrimpsinigang.jpg";
    		var imgReplace4 = document.getElementsByClassName("img4")[0];
    		imgReplace4.src = "menuphotos/relyeno.jpg";
    		imgReplace1.style.visibility = "visible";
    		imgReplace2.style.visibility = "visible";
    		imgReplace3.style.visibility = "visible";
    		imgReplace4.style.visibility = "visible";


 			document.getElementById("bundle_A").onclick = document.getElementById("summary").value = "1 Pot Rice \nMenudo \nKareKare \nShrimp Sinigang \n1 Large Relyenong Bangus \n1.5 L Coke \n4 Summer Halo-Halo";
			document.getElementById("price").value = "850.00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("bundle_A").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});


 	$("#bundle_B").click(function(e){
 		
 			
 		if($(this).prop("checked") == true){
 			$("#rice1").prop( "checked", false );
 			$("#menudo").prop( "checked", false );
 			$("#menudo1").prop( "checked", false );
 			$("#karekare1").prop( "checked", false );
 			$("#karekare").prop( "checked", false );
 			$("#shrimpsinigang1").prop( "checked", false );
 			$("#shrimpsinigang").prop( "checked", false );
 			$("#relyeno1").prop( "checked", false );
 			$("#relyeno").prop( "checked", false );
 			$("#coke1").prop( "checked", false );
 			$("#Halo-Halo").prop( "checked", false );
 			$("#bundle_A").prop( "checked", false );
 			
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
 			
 			var imgReplace1 = document.getElementsByClassName("img1")[0];
    		imgReplace1.src = "menuphotos/porksinigang.jpg";
    		var imgReplace2 = document.getElementsByClassName("img2")[0];
    		imgReplace2.src = "menuphotos/tortangtalong.jpg";
    		var imgReplace3 = document.getElementsByClassName("img3")[0];
    		imgReplace3.src = "menuphotos/afritada.jpg";
    		var imgReplace4 = document.getElementsByClassName("img4")[0];
    		imgReplace4.src = "menuphotos/lechonpaksiw.jpg";
    		imgReplace1.style.visibility = "visible";
    		imgReplace2.style.visibility = "visible";
    		imgReplace3.style.visibility = "visible";
    		imgReplace4.style.visibility = "visible";


 			document.getElementById("bundle_B").onclick = document.getElementById("summary").value = "1 Pot Rice \n1 Pot Pork Sinigang \n3 Large Tortang Talong \nAfritada \nLechon Paksiw \n1Pitcher Iced Tea \n4 Buko Pandan";
			document.getElementById("price").value = "790.00";
			document.getElementById("quantity").value = 1;
 		} else {
 			document.getElementById("bundle_B").onclick = document.getElementById("summary").value = "";
 			document.getElementById("price").value = "";
 		}
 	});

 	$("#calculate").click(function(e){
 		if($("#price").val()==""){
 		window.confirm("Pls select your order first.");
 	}
 	else{
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
	}
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
 	document.getElementById("price").value ="";
 	document.getElementById("quantity").value = "";
 	document.getElementById("total_bills").value = "";
 	document.getElementById("cash").value = "";
 	document.getElementById("change").value = "";
 	document.getElementById("summary").value = "";

 	$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );	
			$("#tinola").prop( "checked", false );
			$("#afritada").prop( "checked", false );
			$("#tapa").prop( "checked", false );
			$("#bundle_A").prop( "checked", false );
			$("#bundle_B").prop( "checked", false );
			$("#rice1").prop( "checked", false );
 			$("#menudo1").prop( "checked", false );
 			$("#karekare1").prop( "checked", false );
 			$("#shrimpsinigang1").prop( "checked", false );
 			$("#relyeno1").prop( "checked", false );
 			$("#coke1").prop( "checked", false );
 			$("#Halo-Halo").prop( "checked", false );	 
 			$("#rice2").prop( "checked", false );
 			$("#porksinigang1").prop( "checked", false );
 			$("#tortangtalong1").prop( "checked", false );
 			$("#afritada1").prop( "checked", false );
 			$("#lechonpaksiw1").prop( "checked", false );
 			$("#tea").prop( "checked", false );
 			$("#pandan").prop( "checked", false );
 			var imgReplace1 = document.getElementsByClassName("img1")[0];
    		imgReplace1.style.visibility = "hidden";
    		var imgReplace2 = document.getElementsByClassName("img2")[0];
    		imgReplace2.style.visibility = "hidden";
    		var imgReplace3 = document.getElementsByClassName("img3")[0];
    		imgReplace3.style.visibility = "hidden";
    		var imgReplace4 = document.getElementsByClassName("img4")[0];
    		imgReplace4.style.visibility = "hidden";
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

 		document.getElementById("bundle_B").onclick = document.getElementById("summary").value = "-----------------------ORDER RECEIPT--------------------"+"\n"+"\n"+
 		summary + ".............................. P" 
 		+price+"\nQty x"+quantity+"................................ P"+total_bills+"\nCash:"+".................................. P"+cash+"\nChange:"
 		+"................................ P"+change+"\n\n\n'Thank You For Ordering, Have a Happy Family Meal!'"+"\n";

 			$("#adobo").prop( "checked", false );
			$("#menudo").prop( "checked", false );
			$("#karekare").prop( "checked", false );
			$("#shrimpsinigang").prop( "checked", false );
			$("#porksinigang").prop( "checked", false );
			$("#bicol").prop( "checked", false );
			$("#caldereta").prop( "checked", false );
			$("#relyeno").prop( "checked", false );
			$("#ginataanglangka").prop( "checked", false );
			$("#lechonpaksiw").prop( "checked", false );
			$("#tortangtalong").prop( "checked", false );
			$("#bistek").prop( "checked", false );
			$("#sisig").prop( "checked", false );
			$("#inasal").prop( "checked", false );
			$("#sinampalukan").prop( "checked", false );
			$("#nilaga").prop( "checked", false );
			$("#chopsuey").prop( "checked", false );	
			$("#tinola").prop( "checked", false );
			$("#afritada").prop( "checked", false );
			$("#tapa").prop( "checked", false );
			$("#bundle_A").prop( "checked", false );
			$("#bundle_B").prop( "checked", false );
			$("#rice1").prop( "checked", false );
 			$("#menudo1").prop( "checked", false );
 			$("#karekare1").prop( "checked", false );
 			$("#shrimpsinigang1").prop( "checked", false );
 			$("#relyeno1").prop( "checked", false );
 			$("#coke1").prop( "checked", false );
 			$("#Halo-Halo").prop( "checked", false );	 
 			$("#rice2").prop( "checked", false );
 			$("#porksinigang1").prop( "checked", false );
 			$("#tortangtalong1").prop( "checked", false );
 			$("#afritada1").prop( "checked", false );
 			$("#lechonpaksiw1").prop( "checked", false );
 			$("#tea").prop( "checked", false );
 			$("#pandan").prop( "checked", false );
 			var imgReplace1 = document.getElementsByClassName("img1")[0];
    		imgReplace1.style.visibility = "hidden";
    		var imgReplace2 = document.getElementsByClassName("img2")[0];
    		imgReplace2.style.visibility = "hidden";
    		var imgReplace3 = document.getElementsByClassName("img3")[0];
    		imgReplace3.style.visibility = "hidden";
    		var imgReplace4 = document.getElementsByClassName("img4")[0];
    		imgReplace4.style.visibility = "hidden";

    		document.getElementById("price").value ="";
		 	document.getElementById("quantity").value = "";
		 	document.getElementById("total_bills").value = "";
		 	document.getElementById("cash").value = "";
		 	document.getElementById("change").value = "";
		 }
 });
});