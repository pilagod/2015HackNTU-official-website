//post [String command, List parameter]

// [GET_ACTIVITY, [num, page]]
/*
plase pass list of sth like this, if it isn't fit the current format, please tell me, thx. Abby
{
	'id':
    'type': 'workshop',
    'name': 'make own website',
    'datetime': '2015-3-8',//date().toJSON(),
    'decription' '...',
    'imgs': ['/title/photo1.jpg', '/title/photo2.jpg', '/title/photo3.jpg'],
}
*/

function getCalender(month, handler) {
	sendAjax('/calender', JASON.parse([month]), handler);
}