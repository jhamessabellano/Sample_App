<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">

	<title>Food Ordering</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<script src="https://code.jquery.com/jquery-latest.min.js"></script>
	<script type="text/javascript" src="pos1.js"></script>

					<style>
									.a{

									}
									.main{
										width: 1300px;
										box-shadow: 0 0 10px 9px rgba(0, 0, 0.2, 0.2);
										padding-left: 20px; 
										padding-right: 30px;
										margin-left: 0px;
										margin-top: 30px;
										
										border-radius: 20px;
									}
									.picborder{
										padding-right: 5px;
										padding-left: 5px;
										padding-top: 5px;
										margin-left: 10px;
										margin-right: 20px;
										margin-top: 20px;
										
									}
									h2{font-size: 26pt;
										margin-bottom: 5px;
										margin-top: 5px;
										font-family: cursive;
									}

									.tag{
										font-size: 12pt;
									}

									.divi{
										width: 100%;
										padding-top: 10px;
										padding-left: 10px;
										padding-right: 10px;
										padding-bottom: 10px;
										padding-bottom: 20px;	
									}
									.bund{
										width: 1300px;
										box-shadow: 0 0 10px 9px rgba(0, 0, 0.2, 0.2); 
										padding: 10px 20px; 
										margin-left: 20px;
										margin-top: 20px;
										margin-right: 20px;
										padding-left: 50px;

									}
									.calcu{
										width: 190px;
										height: 50px;
										margin-top: 10px;
										border-radius: 10px;
									}
									.inp{
										width: 210px;
										height: 25px;
										margin-top: 10px;
										background-color: white;
										border-width: 1px;

									}
									td{
										margin-left: 0px;
										margin-right: 0px;
									}
									.sum{
										width: 80%;
										height: 300px;
										margin-left: 40px;
									}
									.bundles{
										width: 100%;
										margin-left: 30px;
									}
									.img1{
										width: 200px;
										height: 200px;
										margin-left: 10px;
										margin-right: 10px;
										margin-bottom: 10px;
									}
									.fb1{
										margin-bottom: 20px;
									}
									input{
										color: black;
										font-weight: bold;
										font-family: monospace;
									}

									</style>
</head>

<body background="menuphotos/banig.jpg" style="background-blend-mode: screen;background-repeat: repeat;background-attachment: fixed;">
	<div style="width:280px; background-color: #9C6137; box-shadow: 0 0 10px 5px rgba(0, 0, 0.2, 0.2); padding: .2px 20px; margin: 5px auto;">
	<h1 style="text-align: center;color: white; font-size: 26pt;font-family: fantasy;">L U T O N G&nbsp;&nbsp; B A H A Y</h1>
	</div>
	<center>
	<div class="main" style="background-color: #FFCC66;border: 5px solid  #9C6137;">
		<div class="divi">
			<table style="width:100%">
			    <th style="text-align: left;"><h2>MAIN DISHES</h2></th>

			  <tr>
			    <td><div class="picborder"><center><img src="menuphotos/adobo.jpg" style="height: 160px;width: 190px;"></center></div></td>
			    <td><div class="picborder"><center><img src="menuphotos/caldereta.jpg" style="height: 160px;width: 190px;"></center></div></td>
			    <td><div class="picborder"><center><img src="menuphotos/bicol.jpg" style="height: 160px;width: 190px;"></center></div></td>
			    <td><div class="picborder"><center><img src="menuphotos/menudo.jpg" style="height: 160px;width: 190px;"></center></div></td>
			    <td><div class="picborder"><center><img src="menuphotos/tapa.jpg" style="height: 160px;width: 190px;"></center></div></td>
			  </tr>
			  <tr>
			    <td style="background-color:#CC9966; text-align: center; font-weight: bold;"> <input type='checkbox' id="adobo" name="adobo"><label class="tag" for="adobo">ADOBO</label></td>
			    <td style="background-color:#FFF4C2; text-align: center;font-weight: bold;"> <input type='checkbox' id="caldereta"><label class="tag" for="caldereta">CALDERETA</label></td>
			    <td style="background-color:#CC9966; text-align: center;font-weight: bold;"> <input type='checkbox' id="bicol" ><label class="tag" for="bicol">BICOL EXPRESS</label></td>
			    <td style="background-color:#FFF4C2; text-align: center;font-weight: bold;"> <input type='checkbox' id="menudo"><label class="tag" for="menudo">MENUDO</label></td>
			    <td style="background-color:#CC9966; text-align: center;font-weight: bold;"> <input type='checkbox' id="tapa"><label class="tag" for="tapa">BEEF TAPA</label></td>
			  </tr>

			   <tr>
			    <td><div class="picborder"><center><img src="menuphotos/lechonpaksiw.jpg" style="height: 160px;width: 190px;"></center></div></td>
			    <td><div class="picborder"><center><img src="menuphotos/tortangtalong.jpg" style="height: 150px;width: 190px;"></center></div></td>
			    <td><div class="picborder"><center><img src="menuphotos/relyeno.jpg" style="height: 160px;width: 190px;"></center></div></td>
			    <td><div class="picborder"><center><img src="menuphotos/afritada.jpg" style="height: 160px;width: 190px;"></center></div></td>
			    <td><div class="picborder"><center><img src="menuphotos/nilaga.jpg" style="height: 160px;width: 190px;"></center></div></td>
			  </tr>

				<tr>
				    <td style="background-color:#FFF4C2; text-align: center;font-weight: bold;"> <input type='checkbox' id="lechonpaksiw"><label class="tag" for="lechonpaksiw">LECHON PAKSIW</label></td>
				    <td style="background-color:#CC9966; text-align: center;font-weight: bold;"> <input type='checkbox' id="tortangtalong"><label class="tag" for="tortangtalong">TORTANG TALONG</label></td>
				    <td style="background-color:#FFF4C2; text-align: center;font-weight: bold;"> <input type='checkbox' id="relyeno"><label class="tag" for="relyeno">RELYENONG BANGUS</label></td>
				    <td style="background-color:#CC9966; text-align: center;font-weight: bold;"> <input type='checkbox' id="afritada"><label class="tag" for="afritada">AFRITADA</label></td>
				    <td style="background-color:#FFF4C2; text-align: center;font-weight: bold;"> <input type='checkbox' id="nilaga"><label class="tag" for="nilaga">NILAGANG BABOY</label></td>
				</tr>

				<tr>
					<td><div class="picborder"><center><img src="menuphotos/porksinigang.jpg" style="height: 160px;width: 190px;"></center></div></td>
					<td><div class="picborder"><center><img src="menuphotos/shrimpsinigang.jpg" style="height: 160px;width: 190px;"></center></div></td>
					<td><div class="picborder"><center><img src="menuphotos/ginataanglangka.jpg" style="height: 160px;width: 190px;"></center></div></td>
					<td><div class="picborder"><center><img src="menuphotos/karekare.jpg" style="height: 160px;width: 190px;"></center></div></td>
					<td><div class="picborder"><center><img src="menuphotos/inasal.jpg" style="height: 160px;width: 190px;"></center></div></td>
				</tr>
				<tr>
					<td style="background-color:#FFF4C2; text-align: center;font-weight: bold;"> <input type='checkbox' id="porksinigang" ><label class="tag" for="porksinigang">PORK SINIGANG</label></td>
					<td style="background-color:#CC9966; text-align: center;font-weight: bold;"> <input type='checkbox' id="shrimpsinigang" ><label class="tag" for="shrimpsinigang">SHRIMP SINIGANG</label></td>
					<td style="background-color:#FFF4C2; text-align: center;font-weight: bold;"> <input type='checkbox' id="ginataanglangka" ><label class="tag" for="ginataanglangka">GINATAANG LANGKA</label></td>
					<td style="background-color:#CC9966; text-align: center;font-weight: bold;"> <input type='checkbox' id="karekare" name="karekare"><label class="tag" for="karekare">KARE KARE</label></td>
					<td style="background-color:#FFF4C2; text-align: center;font-weight: bold;"> <input type='checkbox' id="inasal" ><label class="tag" for="inasal">CHICKEN INASAL</label></td>
				</tr>


				 <tr>
			    <td><div class="picborder"><center><img src="menuphotos/sisig.jpg" style="height: 160px;width: 190px;"></center></div></td>
			    <td><div class="picborder"><center><img src="menuphotos/sinampalukan.jpg" style="height: 150px;width: 190px;"></center></div></td>
			    <td><div class="picborder"><center><img src="menuphotos/tinola.jpg" style="height: 160px;width: 190px;"></center></div></td>
			    <td><div class="picborder"><center><img src="menuphotos/chopsuey.jpg" style="height: 160px;width: 190px;"></center></div></td>
			    <td><div class="picborder"><center><img src="menuphotos/bistek.jpg" style="height: 160px;width: 190px;"></center></div></td>
			  </tr>

				<tr>
				    <td style="background-color:#FFF4C2; text-align: center;font-weight: bold;"> <input type='checkbox' id="sisig"><label class="tag" for="sisig">SIZZLING SISIG</label></td>
				    <td style="background-color:#CC9966; text-align: center;font-weight: bold;"> <input type='checkbox' id="sinampalukan"><label class="tag" for="sinampalukan">SINAMPALUKANG MANOK</label></td>
				    <td style="background-color:#FFF4C2; text-align: center;font-weight: bold;"> <input type='checkbox' id="tinola"><label class="tag" for="tinola">TINOLANG MANOK</label></td>
				    <td style="background-color:#CC9966; text-align: center;font-weight: bold;"> <input type='checkbox' id="chopsuey"><label class="tag" for="chopsuey">CHOPSUEY</label></td>
				    <td style="background-color:#FFF4C2; text-align: center;font-weight: bold;"> <input type='checkbox' id="bistek"><label class="tag" for="bistek">BEEF STEAK</label></td>
				</tr>

			</table>
		</div>
	</div>

		<div class="bund">
			<table style="width: 100%; padding-bottom: 20px;">
				<td style="width: 40%; padding-right: 0px; margin-right: 0px; border-right: 5px dotted;">
					<h2>Order Choices</h2>
					<input type="radio" name="bundle_A" id="bundle_A">FOOD BUNDLE A<br><br>
					<input type="radio" name="bundle_B" id="bundle_B">FOOD BUNDLE B<br><br>
					<div class="bundles">
						<table style="width: 100%;">
							<td>
								<h3>Food Bundle A:</h3>
								<input type="checkbox" name="rice1" id="rice1" class="fb1">1 Pot Rice<br>
								<input type="checkbox" name="menudo1" id="menudo1" class="fb1">Menudo<br>
								<input type="checkbox" name="karekare1" id="karekare1" class="fb1">Kare-Kare<br>
								<input type="checkbox" name="shrimpsinigang1" id="shrimpsinigang1" class="fb1">Shrimp Sinigang<br>
								<input type="checkbox" name="relyeno1" id="relyeno1" class="fb1">Relyenong Bangus<br>
								<input type="checkbox" name="coke1" id="coke1" class="fb1">1.5L Coke<br>
								<input type="checkbox" name="Halo-Halo" id="Halo-Halo" class="fb1">5 Halo-Halo<br>
							</td>
							<td>
								<h3>Food Bundle A:</h3>
								<input type="checkbox" name="rice2" id="rice2" class="fb1">1 Pot Rice<br>
								<input type="checkbox" name="porksinigang1" id="porksinigang1" class="fb1">Pork Sinigang<br>
								<input type="checkbox" name="tortangtalong1" id="tortangtalong1" class="fb1">Tortang Talong<br>
								<input type="checkbox" name="afritada1" id="afritada1" class="fb1">Afritada<br>
								<input type="checkbox" name="lechonpaksiw1" id="lechonpaksiw1" class="fb1">Lechon Paksiw<br>
								<input type="checkbox" name="tea" id="tea" class="fb1">1 Pitcher Iced Tea<br>
								<input type="checkbox" name="pandan" id="pandan" class="fb1">5 Buko Pandan<br>
							</td>
						</table>
					</div>
					<br>
					<center>
						<table>
							<td style="height: 200px;width: 200px"><img id="img1"  style="height: 200px;width: 200px;visibility: hidden;" class="img1"></td>
							<td style="height: 200px;width: 200px"><img id="img2"  style="height: 200px;width: 200px;visibility: hidden;" class="img2"></td>
								<tr>
									<td style="height: 200px;width: 200px"><img id="img3"  style="height: 200px;width: 200px;visibility: hidden;" class="img3"></td>
									<td style="height: 200px;width: 200px"><img id="img4"  style="height: 200px;width: 200px;visibility: hidden;" class="img4"></td>
								</tr>
						</table>
					</center>
				</td>
	<!-----------------------------------------------------ORDER DETAILS-------------------------------------------------->		
				<td style="padding-left: 10px;">
					<h2 style="margin-bottom: 1px;">Order Details</h2>
						<table style="width: 100%; padding-left: 10px;">
							<tr>
								<td>
									<table style="width: 100%">
											<td>Price:</td>
											<td><input type="text" id="price" name="price" value="" disabled="input" class="inp"> </td>
										<tr>
											<td>Quantity:</td>
											<td><input type="number" name="quantity" id="quantity" class="inp" placeholder="0"> </td>
										</tr>
										<tr>
											<td>Discount Amount:</td>
											<td><input type="input" name="disc_amt" id="disc_amt" disabled="input" class="inp"> </td>
										</tr>
										<tr>
											<td>Discounted Amount:</td>
											<td><input type="input" name="discntd_amt" id="discntd_amt" disabled="input" class="inp"> </td>
										</tr>
										<tr>
											<td>Total Bills:</td>
											<td><input type="input" name="total_bills" id="total_bills" disabled="input" class="inp"> </td>
										</tr>
										
										<tr>
											<td>Cash Given:</td>
											<td><input type="input" name="cash" id="cash" class="inp" required="input"> </td>
										</tr>
										<tr>
											<td>Change:</td>
											<td><input type="input" name="change" id="change" disabled="input" class="inp"> </td>
										</tr>
									</table>
								</td>
								<td style="width: 30%">
									<input type="button" name="calcu" id="calculate" class="calcu" value="CALCULATE BILLS" style="background-color: #3DAAE7;">
									<input type="button" name="change" id="change_button" class="calcu" value="CHANGE" style="background-color: 	;">
									<input type="button" name="print" id="print" class="calcu" value="PRINT TRANSACTION" style="background-color: #5CBAA4;">
									<input type="button" name="remove" id="remove" class="calcu" value="REMOVE ORDER" style="background-color: #5AC452">
									<input type="button" name="new" id="new" class="calcu" value="NEW" style="background-color: #88A3A4;">
									<input type="button" name="exit" id="exit" class="calcu" value="EXIT" style="background-color: #AF3336;">
								</td>
							</table>
							<text style="margin-left: 20px;">Order Summary:</text><br>
									<textarea id="summary" style="font-size: 14pt; font-family: monospace; padding-top: 20px;padding-left: 20px;" name="summary"class="sum"></textarea>
					</td>
				</table>
			</div>
	</center>
</body>
</html>