function Movie(id, title, genre, poster, year, trailer, price, story) {
	this.id = id;
	this.title = title;
	this.genre = genre;
	this.poster = poster;
	this.year = year;
	this.trailer = trailer;
	this.price = price;
	this.story = story;
};

const movieLib = [
	new Movie(
		1,
		"Alien",
		"Horror | Sci-Fi",
		"assets/img/poster_alien.jpg",
		1979,
		'<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/jQ5lPt9edzQ"></iframe>',
		"15,00 €",
		"In the distant future, the crew of the commercial spaceship Nostromo are on their way home when they pick up a distress call from a distant moon. The crew are under obligation to investigate and the spaceship descends on the moon afterwards. After a rough landing, three crew members leave the spaceship to explore the area on the moon. At the same time as they discover a hive colony of some unknown creature, the ship's computer deciphers the message to be a warning, not a distress call."
	),
	new Movie(
		2,
		"Stand By Me",
		"Adventure | Drama",
		"assets/img/poster_standbyme.jpg",
		1986,
		'<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/oYTfYsODWQo"></iframe>',
		"12,00 €",
		"It's the summer of 1959 in Castlerock, Oregon and four 12 year-old boys - Gordie, Chris, Teddy and Vern - are fast friends. After learning of the general location of the body of a local boy who has been missing for several days, they set off into woods to see it. Along the way, they learn about themselves, the meaning of friendship and the need to stand up for what is right."
	),
	new Movie(
		3,
		"Memento",
		"Drama | Thriller",
		"assets/img/poster_memento.jpg",
		2000,
		'<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/0vS0E9bBSL0"></iframe>',
		"17,00 €",
		"Memento chronicles two separate stories of Leonard, an ex-insurance investigator who can no longer build new memories, as he attempts to find the murderer of his wife, which is the last thing he remembers. One story line moves forward in time while the other tells the story backwards revealing more each time."
	),
	new Movie(
		4,
		"Triangle",
		"Horror | Fantasy",
		"assets/img/poster_triangle.jpg",
		2007,
		'<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/17XqBdCiHOI"></iframe>',
		"12,00 €",
		"When Jess sets sail on a yacht with a group of friends, she cannot shake the feeling that there is something wrong. Her suspicions are realized when the yacht hits a storm and the group is forced to board a passing ocean liner to get to safety, a ship Jess is convinced she's been on before. The ship appears deserted, the clock on board has stopped, but they are not alone... Someone is intent on hunting them down, one by one. And Jess unknowingly holds the key to end the terror."
	),
	new Movie(
		5,
		"Reservoir Dogs",
		"Drama | Thriller",
		"assets/img/poster_reservoir.jpg",
		1992,
		'<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/GLPJSmUHZvU"></iframe>',
		"13,50 €",
		"Six criminals, who are strangers to each other, are hired by a crime boss, Joe Cabot, to carry out a diamond robbery. Right at the outset, they are given false names with the intention that they won't get too close and will concentrate on the job instead. They are completely sure that the robbery is going to be a success. But, when the police show up right at the time and the site of the robbery, panic spreads amongst the group members, and two of them are killed in the subsequent shootout, along with a few policemen and civilians. When the remaining people assemble at the premeditated rendezvous point (a warehouse), they begin to suspect that one of them is an undercover cop."
	),
	new Movie(
		6,
		"Donnie Darko",
		"Drama | Sci-Fi | Thriller",
		"assets/img/poster_donnie.jpg",
		2001,
		'<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ZZyBaFYFySk"></iframe>',
		"12,00 €",
		"Donnie Darko doesn't get along too well with his family, his teachers, and his classmates; but he does manage to find a sympathetic friend in Gretchen, who agrees to date him. He has a compassionate psychiatrist, who discovers hypnosis is the means to unlock hidden secrets. His other companion may not be a true ally. Donnie has a friend named Frank, a large bunny which only Donnie can see. When an engine falls off a plane and destroys his bedroom, Donnie is not there. Both the event, and Donnie's escape, seem to have been caused by supernatural events. Donnie's mental illness, if such it is, may never allow him to find out for sure."
	),
	new Movie(
		7,
		"Avatar",
		"Adventure | Fantasy | Sci-Fi",
		"assets/img/poster_avatar.jpg",
		2009,
		'<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/5PSNL1qE6VY"></iframe>',
		"22,00 €",
		"When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora. There he learns of greedy corporate figurehead Parker Selfridge's intentions of driving off the native humanoid 'Na'vi' in order to mine for the precious material scattered throughout their rich woodland. In exchange for the spinal surgery that will fix his legs, Jake gathers intel for the cooperating military unit spearheaded by gung-ho Colonel Quaritch, while simultaneously attempting to infiltrate the Na'vi people with the use of an 'avatar' identity. While Jake begins to bond with the native tribe and quickly falls in love with the beautiful alien Neytiri, the restless Colonel moves forward with his ruthless extermination tactics, forcing the soldier to take a stand - and fight back in an epic battle for the fate of Pandora."
	),
	new Movie(
		8,
		"Jagten",
		"Drama",
		"assets/img/poster_jagten.jpg",
		2012,
		'<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ieLIOBkMgAQ"></iframe>',
		"18,00 €",
		"Lucas is a Kindergarten teacher who takes great care of his students. Unfortunately for him, young Klara has a run-away imagination and concocts a lie about her teacher. Before Lucas is even able to understand the consequences, he has become the outcast of the town. The hunt is on to prove his innocence before it's taken from him for good."
	),
	new Movie(
		9,
		"Little Miss Sunshine",
		"Comedy | Drama",
		"assets/img/poster_sunshine.jpg",
		2006,
		'<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/wvwVkllXT80"></iframe>',
		"14,00 €",
		"In Albuquerque, Sheryl Hoover brings her suicidal brother Frank to the breast of her dysfunctional and emotionally bankrupted family. Frank is homosexual, an expert in Proust. He tried to commit suicide when he was rejected by his boyfriend and his great competitor became renowned and recognized as number one in the field of Proust. Sheryl's husband Richard is unsuccessfully trying to sell his self-help and self-improvement technique using nine steps to reach success, but he is actually a complete loser. Her son Dwayne has taken a vow of silence as a follower of Nietzsche and aims to be a jet pilot. Dwayne's grandfather Edwin was sent away from the institution for elders (Sunset Manor) and is addicted in heroin. When her seven-year-old daughter Olive has a chance to dispute the Little Miss Sunshine pageant in Redondo Beach, California, the whole family travels together in their old Volkswagen Type 2."
	)
];


$(".shopImg").click(function(){
	for (i=0 ; i < movieLib.length ; i++) {
			if ($(this).attr("src") == movieLib[i].poster) {
				// console.log('cacaboudin');
				if (movieLib[i].id < 9) {
					document.getElementById("detailVid").innerHTML = movieLib[i].trailer;
					document.getElementById("detailTitle").innerHTML = movieLib[i].title;
					document.getElementById("detailPrice").innerHTML = movieLib[i].price;
					document.getElementById("detailStory").innerHTML = movieLib[i].story;
					document.getElementById("detailGenre").innerHTML = movieLib[i].genre;
					document.getElementById("detailYear").innerHTML = movieLib[i].year;
				} else {
					document.getElementById("detailVid2").innerHTML = movieLib[i].trailer;
					document.getElementById("detailTitle2").innerHTML = movieLib[i].title;
					document.getElementById("detailPrice2").innerHTML = movieLib[i].price;
					document.getElementById("detailStory2").innerHTML = movieLib[i].story;
					document.getElementById("detailGenre2").innerHTML = movieLib[i].genre;
					document.getElementById("detailYear2").innerHTML = movieLib[i].year;
				}

		}
	}
});
