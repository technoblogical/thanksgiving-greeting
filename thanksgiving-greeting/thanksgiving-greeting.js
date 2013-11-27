var thanksgivingGreeting='Happy Thanksgiving!'
//This is the function that builds the message
function thanksgivingFunction(){
	$( "body" ).prepend('<div id="holidayMessage">'+thanksgivingGreeting+'</div>');
};
//get today's date
var todaysDate = new Date();
// if it's the tenth month, AND it's the 4th day of the week, AND the date is no lower than 22 or no higher than 28
if (todaysDate.getMonth()==10 && todaysDate.getDay()==4 && todaysDate.getDate()>=22 && todaysDate.getDate()<29){
	//run the funtion to show the message
	thanksgivingFunction();
};
//Some basic CSS
$('#holidayMessage').css({
	'background':'#006600',
	'color':'#ffff00',
	'margin':'0px',
	'padding':'5px',
	'text-align':'center'
});