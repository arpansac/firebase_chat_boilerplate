
// Initialize Firebase

// var config = {
// 	apiKey: "your_secret_key",
// 	// authDomain: "your_app_auth_domain",
// 	databaseURL: "your_datavase_url",
// 	storageBucket: "",
// };
// firebase.initializeApp(config);

// var firebase_ref = firebase.database().ref();

// new_ref = firebase_ref.child("chat_messages");


$('#chat_form').submit(function(event){
	event.preventDefault();

	var user_message = {
		username: $('#username').val(),
		message: $('#chat_message').val()
	}

	new_ref.push(user_message);
	

});



new_ref.on('child_added', function(snapshot){
	msg = snapshot.val();

	var new_message = $('<p></p>');
	new_message.append('<p><strong>' + msg.username + '</strong></p><p>' + msg.message + '</p>');
	new_message.addClass('msg');

	if(msg.user == $('#username').val()){
		new_message.addClass('me');
	}
	$('#results').append(new_message);

	$("#results").animate({scrollTop: $('#results')[0].scrollHeight});

});

