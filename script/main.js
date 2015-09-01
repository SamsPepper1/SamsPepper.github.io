var words1 = [	"bifurcated",
				"topological",
				"erstwhile",
				"Mancunian",
				"electronic",
				"biodegradeable",
				"carcinogenic",
				"orthogonal",
				"ancient",
				"disruptive"
			]

var words2 = [	"weasel",
				"walrus",
				"mountain",
				"human",
				"doctor",
				"telemarketer",
				"comrade",
				"misanthrope",
				"philanthrope",
				"introvert",
				"muppet",
				"octagon",
				"ocelot",
				"sock"
				]

var languages = [	"Yoruba",
					"Ancient Greek",
					"Esperanto",
					"Klingon",
					"Classical Elvish",
					"Gaelic",
					"Egyptian",
					"Mandarin",
					"15th century Orcish",
					"Sanskrit"
					]

function split_name(name) {
	var mid = Math.floor(name.length/2);
	console.log(mid)
	var name_section_1 = name.substring(0,mid)
	var name_section_2 = name.substring(mid)
	return [name_section_1, name_section_2]
}

function get_random_name(name) {
	console.log('getting name')
	names = split_name(name)
	n1 = Math.floor(Math.random()* words1.length);
	n2 = Math.floor(Math.random() * words2.length);
	language1 = Math.floor(Math.random() * languages.length);
	language2 = Math.floor(Math.random() * languages.length);

	return {
		name1: names[0],
		name2: names[1],
		word1: words1[n1],
		word2: words2[n2],
		language1: languages[language1],
		language2: languages[language2]
	}
}


$().ready(function() {
	$('#full_name').hide()
	$('#results').hide()
	$('#submit').click(function() {
		var full_name = $('#usr').val()
		var name = get_random_name(full_name);

		$('#full_name').text(full_name)
		$('#first_name').text( name.name1 );
		$('#second_name').text( name.name2 );
		$('#meaning1').text( name.word1)
		$('#meaning2').text( name.word2)
		$('#language1').text(name.language1)
		$('#language2').text(name.language2)
		$('#full_name').show()
		$('#results').show()


	})
})
