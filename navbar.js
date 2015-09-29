/**
 * Lytics Jr. Developer coding exercise
 * Created by Todd Brochu on 8/23/2015.
 */

var qty_notifications = 9;
var qty_checkmarks = 0;
var current_objective = 'OBJECTIVE';
var user_name = 'JOHN SMITH';

window.onLoad = function() {
    document.getElementById("list-heading").innerHTML = current_objective;
}

/**
 *function: showNotifications
 *@params: none
 *@return: var qty_notifications
 *gets the qty_notifications var
 */
function showNotifications() {
    if (!qty_notifications) {
        return ('');
    }
    else if (qty_notifications < 1) {
        return ('');
    }
    else {
        return(qty_notifications);
    }
}

/**
 *function: checkMark
 *@params: id, value
 *@return: none
 *toggles visibility of an input element;
 *toggles the list-heading var to the current_objective var
 */
function toggleCheckmark(id, value) {
    if (document.getElementById(id).style.display=='none' && qty_checkmarks == 0) {
        document.getElementById(id).style.display='inline-block';
        qty_checkmarks = 1;
        current_objective = value;
        document.getElementById('list-heading').innerHTML = current_objective;
    }
    else if (document.getElementById(id).style.display=='inline-block'  && qty_checkmarks == 1) {
        document.getElementById(id).style.display='none';
        qty_checkmarks = 0;
    }
}

/**
 *function: showUserName
 *@params: none
 *@return: var user_name
 *gets the user_name var
 */
function getUserName() {
    return (user_name);
}

/**
 *function: getCurrentObjective
 *@params: none
 *@return: current_objective
 *gets the current_objective var
 */
function getCurrentObjective() {
    return (current_objective);
}