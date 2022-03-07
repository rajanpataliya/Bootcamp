<script type="text/javascript">
			function demoExternalAlert(){
				alert("Internal Alert.");
			}
			function demoExternalConfirm(){
				if(confirm("Are you sure..??")){
					alert("YESSS");
				}
				else{
					alert("NOOOO");
				}
			}
			function demoExternalPrompt(){
				var fName=prompt("Enter Firstname Here..");
				var lName=prompt("Enter Lastname Here..");
				alert(fName+" "+lName);
			}
            </script>