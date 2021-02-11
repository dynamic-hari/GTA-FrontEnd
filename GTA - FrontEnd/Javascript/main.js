if(document.images)
	{
        var image1 = new Image(); 
        image1.src = "../Images/gun.png";
        var image2 = new Image(); 
        image2.src = "../Images/download3.png";
    }
function getConfirmation()
	{
        var retVal = confirm("DO YOU WANT TO PLAY THIS MODE?");
        if( retVal == true ){
            document.write ("User wants to continue!");
            return true;
        }
        else{
            Document.write ("User does not want to continue!");
            return false;
            }
    }