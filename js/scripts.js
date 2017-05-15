// BUSINESS LOGIC //

function Agency () {
  this.adopted = [];
  this.available = [];
}

function Animal (name, img, age, breed, description, adopted) {
  this.name = name;
  this.img = img;
  this.age = age;
  this.breed = breed;
  this.description = description;
  this.adopted = adopted; //boolean
}

Agency.prototype.addAnimal = function(name, img, age, breed, description, adopted) {
  var animal = new Animal(name, img, age, breed, description, adopted);
  if (animal.adopted) {
    this.adopted.push(animal);
  } else {
    this.available.push(animal);
  }
}

Agency.prototype.build = function(agency, arrayOfAnimals) {
  arrayOfAnimals.forEach(function(element) {
    agency.addAnimal(element.name, element.img, element.age, element.breed, element.description, element.adopted);
  });
}

//prototype to move animal to adopted array when its adopted
Agency.prototype.adoptAnimal = function(agency, animalName) {
  this.available.forEach(function(animal, index) {
    if (animal.name === animalName) {
      agency.adopted.push(animal);
      agency.available.splice(index, 1);
    }
  });
}

var seededAnimals = [
  {
    name: 'Cecil',
    img: 'img/otter.png',
    age: 5,
    breed: 'Sea Otterpus',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    adopted: false
  },
  {
    name: 'Sally',
    img: 'img/sloth.png',
    age: 4,
    breed: 'Sloth Moth',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    adopted: false
  },
  {
    name: 'Frankie',
    img: 'img/frenchie.png',
    age: 3,
    breed: 'French Bullfrog',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    adopted: false
  },
  {
    name: 'Rascal',
    img: 'img/deer.png',
    age: 4,
    breed: 'Rattle Deer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    adopted: false
  },
  {
    name: 'Pip',
    img: 'img/pug.png',
    age: 4,
    breed: 'Pugasus',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    adopted: true
  },
  {
    name: 'Paulie',
    img: 'img/pit.png',
    age: 4,
    breed: 'Pitasaurus',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    adopted: true
  }
];



// USER INTERFACE LOGIC //
$(document).ready(function() {
  //standardize image sizes
  function resize() {
    $('img').each(function() {
      $(this).css('height', $(this).css('width'));
    });
  }
  $(window).on('resize', function() {
    resize();
  });


  //build agency
  var agency = new Agency();
  agency.build(agency, seededAnimals);

  function drawAvailable() {
    $('#animals').empty();
    agency.available.forEach(function(animal) {
      $('#animals').append('<div class="col-md-6">' +
          '<span class="clickName"><h3>' + animal.name + '</h3></span>' +
          '<img src="' + animal.img + '" class="" alt="' + animal.name + '" />' +
          '<p class="description">' + animal.age + ' - ' + animal.breed + ' - ' + animal.description +
          '</p>' +
          '<center><button type="button" class="btn-adopt" id="test">Adopt!</button>' +
          '<p class="animalAdopted">' +
          '<b>This wonder animal has been adopted!</b>' +
          '</p>' +
          '</center>' +
        '</div>');
    });
    resize();
  }

  function drawAdopted() {
    $('#animals').empty();
    agency.adopted.forEach(function(animal) {
      $('#animals').append('<div class="col-md-6">' +
          '<span class="clickName"><h3>' + animal.name + '</h3></span>' +
          '<img src="' + animal.img + '" class="" alt="' + animal.name + '" />' +
          '<p class="description">' + animal.age + ' - ' + animal.breed + ' - ' + animal.description +
          '</p>' +
          '<center><button type="button" class="btn-adopt" id="test">Adopt!</button>' +
          '<p class="animalAdopted">' +
          '<b>This wonder animal has been adopted!</b>' +
          '</p>' +
          '</center>' +
        '</div>');
    });
    resize();
  }

  function drawAnimals() {
    $('#animals').empty();
    agency.available.forEach(function(animal) {
      $('#animals').append('<div class="col-md-6">' +
          '<span class="clickName"><h3>' + animal.name + '</h3></span>' +
          '<img src="' + animal.img + '" class="" alt="' + animal.name + '" />' +
          '<p class="description">' + animal.age + ' - ' + animal.breed + ' - ' + animal.description +
          '</p>' +
          '<center><button type="button" class="btn-adopt" id="test">Adopt!</button>' +
          '<p class="animalAdopted">' +
          '<b>This wonder animal has been adopted!</b>' +
          '</p>' +
          '</center>' +
        '</div>');
    });
    agency.adopted.forEach(function(animal) {
      $('#animals').append('<div class="col-md-6">' +
          '<span class="clickName"><h3>' + animal.name + '</h3></span>' +
          '<img src="' + animal.img + '" class="" alt="' + animal.name + '" />' +
          '<p class="description">' + animal.age + ' - ' + animal.breed + ' - ' + animal.description +
          '</p>' +
          '<center><button type="button" class="btn-adopt" id="test">Adopt!</button>' +
          '<p class="animalAdopted">' +
          '<b>This wonder animal has been adopted!</b>' +
          '</p>' +
          '</center>' +
        '</div>');
        resize();
    });

    $('#available').click(function() {
      drawAvailable();
    });

    $('#adopted').click(function() {
      drawAdopted();
    });

    $('#all').click(function() {
      drawAnimals();
    });

    $(".clickName").click(function(){
      $(this).siblings(".description").animate({opacity: 1});
    });

    $(".btn-adopt").click(function(){
      $(this).siblings(".animalAdopted").animate({opacity: 1});
      $(this).hide();
    });
  }
  drawAnimals();
  resize();

  //deal with form
  function resetForm() {
    $('#add-animal-form .form-group input').each(function() {
      $(this).val("");
    });
  }
  $('#add-animal-form').submit(function(event) {
    event.preventDefault();
    var name = $('#animalName').val();
    var img = $('#animalImage').val();
    var age = $('#animalAge').val();
    var breed = $('#animalBreed').val();
    var description = $('#animalDescription').val();
    resetForm();
    $('#myModal').modal('hide');
    agency.addAnimal(name, img, age, breed, description, false);
    //redraw the screen
    $('#animals').empty();
    drawAnimals();
    resize();
  });
});
