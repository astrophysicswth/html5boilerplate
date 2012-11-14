setInterval("updatelTime()", 1000);
					function updatelTime () 
					{
						var d = new Date();
						var x = document.getElementById("local");
						// x.innerHTML=d.toLocaleTimeString();
						var h = (d.getHours() > 12)?d.getHours()-12:d.getHours();
						if (h=="0") { h=12; }
						var m = (d.getMinutes() < 10)?'0'+d.getMinutes():d.getMinutes();
						var apm = (d.getHours() >= 12)?' P.M':' A.M';						
						var b="<blink id='blink'>:</blink>";
						x.innerHTML="<span class='timeblue'>"+h+b+m+apm+"</span>"
						
						
   }
   
 setInterval ("blinkTime()", 500);   
					function blinkTime()  
					{ 
						// for(i=0;i<document.getElementsByTagName("blink").length;i++){						
						var s=document.getElementsByTagName("blink")[0];
						s.style.visibility=(s.style.visibility=='visible')?'hidden':'visible';
						// }
  
					}
											
						//x.innerHTML= "<span class='timeblue'>"+ h+':'+ m + apm +"</span>";
						// var c = "<span class='colon'>:</span>";
						//c.blink();
						//$('.colon').fadeout(1000, .2);
						//x.innerHTML="<span class='timeblue'>"+h+c.blink()+m+apm+"</span>";
											
					
					function loadStations()
					{
						var xmlhttp;
						var txt,x,i;
						if (window.XMLHttpRequest)
							{// code for IE7+, Firefox, Chrome, Opera, Safari
								xmlhttp=new XMLHttpRequest();
							}
						else
							{// code for IE6, IE5
								xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
							}
						xmlhttp.onreadystatechange=function()
							{
								if (xmlhttp.readyState==4 && xmlhttp.status==200)
									{		
										xmlDoc=xmlhttp.responseXML;
										txt="";
										ini="<option value='' selected>Select a Station</option>"
										x=xmlDoc.getElementsByTagName("name");
										for (i=0;i<x.length;i++)
											{
												txt=txt + "<option value="+x[i].childNodes[0].nodeValue+ ">"+ x[i].childNodes[0].nodeValue + "<br>";
											}
										document.getElementById("stations").innerHTML=ini+txt;
									}
							}
						xmlhttp.open("GET","http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V",true);
						xmlhttp.send();
					}
					window.onload =loadStations();

					function isBikerFriendly(y)
						{
						//alert(y);
						var xmlhttp;
						var z,x,i;
						if (window.XMLHttpRequest)
							{// code for IE7+, Firefox, Chrome, Opera, Safari
								xmlhttp=new XMLHttpRequest();
							}
						else
							{// code for IE6, IE5
								xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
							}
						xmlhttp.onreadystatechange=function()
							{
								if (xmlhttp.readyState==4 && xmlhttp.status==200)
									{
										xmlDoc=xmlhttp.responseXML;
										txt="";
										x=xmlDoc.getElementsByTagName("station");
										for (i=0;i<x.length;i++)
											{
												z=x[i].getAttribute("bike_station_flag");
											}
																				
										if (z=="0") 
											{ 
												document.getElementById("error").innerHTML="you have to bike Home or throw away your bike :( Sorry Dude(tte)";
											}
										else 
											{ 
												document.getElementById("error").innerHTML="Better Mount Up rough and tough Rider :)";
											}
									}		
							}					
						url="http://api.bart.gov/api/stn.aspx?cmd=stnaccess&l=1&key=MW9S-E7SL-26DU-VV8V&orig="+y;
						xmlhttp.open("GET",url,true);
						xmlhttp.send();
						}
						
						/* function riderCount()
						{
						// Save the count in a counter.txt file. Read it. Increment it and Save it.
						} */

						document.getElementById("rider").innerHTML="99 riders served"; 
