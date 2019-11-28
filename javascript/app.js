let $platforms = $('#platforms');
const paintData = () => {
    let platforms = data.platforms;
    console.log(platforms);
    
    let template = 
        '<div class="col-4 col-image">' +
			'<h5 class="name"> NAME </h5>' +
			'<a href="URL" data-name="NAME" data-photo="PHOTO" data-url="URL" data-id="ID">' +
				'<img class="img-fluid" data-name="NAME" data-photo="PHOTO" data-url="URL" data-id="ID" src="SRC">' +
			'</a>' +
        '</div>';
        
    let templatePlatforms = "";

    for (item of platforms) {
		// console.log(item)
		templatePlatforms += template
        .replace('NAME', item.name)
        .replace('URL', item.url)
		.replace('NAME', item.name)
		.replace('PHOTO', item.photo)
        .replace('URL', item.url)
        .replace('ID', item.id)
		.replace('NAME', item.name)
		.replace('PHOTO', item.photo)
		.replace('URL', item.url)
		.replace('ID', item.id)
		.replace('SRC', item.photo);
	}

	$platforms.html(templatePlatforms);
}

paintData();
