var position = 1;
var been1 = false;
var been2 = false;
var been3 = false;
var been4 = false;
var been5 = false;
var been6 = false;
var message = "";
var score = 0;


function init () {
	/*"You have woken up in a hedge maze for a second time. You have no memory of how you got there. 
		You see a note on the floor and it says:
Welcome Agent, this is your next test. Get out of this maze to complete your second mission. -J.D."*/
	
	document.getElementById("description").innerHTML += ("You have woken up in a hedge maze for a second time. You have no memory of how you got there. You see a note on the floor and it says: Welcome Agent, this is your next test. Get out of this maze to complete your second mission. -J.D." );
	buttonUpdate();
		
}

function moveNorth () {

	switch (position) {
    case 3:
        position = 6;
        message = ( "\nYou have moved north. You are in position 6. Your score is " + score);
		updateDisplay(message);
        if (been6 == false) {
	    score+= 5;
	    been6 = true;
		}
		buttonUpdate();
        break; 
    case 4:
    	position = 5;
    	message = ("\nYou have moved north. You are in position 5. Your score is " + score);
		updateDisplay(message);
    	if (been5 == false) {
	    score+= 5;
	    been5 = true;
	    buttonUpdate();
	    break;
		}
    default: 
        message = ("\nYou can not move north. Your score is " + score);
		updateDisplay(message);
	}
}

function moveSouth () {

	switch (position) {
    case 5:
        position = 4;
        message = ("\nYou have move south. You are in position 4. Your score is " + score);
		updateDisplay(message);
        if (been4 == false) {
	    score+= 5;
	    been4 = true;
		}
		buttonUpdate();
        break; 
    case 6:
    	position = 3;
    	message = ("\nYou have moved south. You are in position 3. Your score is " + score);
		updateDisplay(message);
    	if (been3 == false) {
	    score+= 5;
	    been3 = true;
		}
		buttonUpdate();
		break;
    default: 
        message = ("\nYou can not move south. Your score is " + score);
		updateDisplay(message);
		buttonUpdate();
	}
}

function moveEast () {

	switch (position) {
    case 2:
        position = 1;
        message = ("\nYou have move east. You are in position 1. Your score is " + score);
		updateDisplay(message);
        if (been1 == false) {
	    score+= 5;
	    been1 = true;
		}
		buttonUpdate();
        break; 
    case 1:
    	position = 3;
    	message = ("\nYou have moved east. You are in position 3. Your score is " + score);
		updateDisplay(message);
    	if (been3 == false) {
	    score+= 5;
	    been3 = true;
		}
		buttonUpdate();
		break;
	case 3:
		position = 4;
    	message = ("\nYou have moved east. You are in position 4. Your score is " + score);
		updateDisplay(message);
    	if (been4 == false) {
	    score+= 5;
	    been4 = true;
		}
		buttonUpdate();
		break;
	case 6:
		position = 5;
		message = "\nYou have moved east. You are in position 5. Your score is " + score;
		updateDisplay(message);
		if (been5 == false) {
	    score+= 5;
	    been5 = true;
	    buttonUpdate();
	    break;
	}
    default: 
        message = ("\nYou can not move east. Your score is " + score);
		updateDisplay(message);
		buttonUpdate();
	}
}

function moveWest () {

	switch (position) {
    case 1:
        position = 2;
        message = ("\nYou have move west. You are in position 2. Your score is " + score);
		updateDisplay(message);
        if (been2 == false) {
	    score+= 5;
	    been2 = true;
		}
		buttonUpdate();
        break; 

    case 3:
    	position = 1;
    	message = ("\nYou have moved west. You are in position 1. Your score is " + score);
		updateDisplay(message);
		if (been1 == false) {
	    score+= 5;
	    been1 = true;
		}
		buttonUpdate();
		break;

	case 4:
		position = 3;
		message = ("\nYou have moved west. You are in position 3. Your score is " + score);
		updateDisplay(message);
		if (been3 == false) {
	    score+= 5;
	    been3 = true;
		}
		buttonUpdate();
		break;

	case 5:
		position = 6;
		message = ("\nYou have moved west. You are in position 6. Your score is " + score);
		updateDisplay(message);
		if (been6 == false) {
	    score+= 5;
	    been6 = true;
		}
		buttonUpdate();
		break;

    default: 
        message = ("\nYou can not move west. Your score is " + score);
		updateDisplay(message);
		buttonUpdate();
	}
}
