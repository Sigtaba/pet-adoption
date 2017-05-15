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
    name: 'Juniper',
    img: 'img/sclksjdf.gif',
    age: 5,
    breed: 'manimal',
    description: 'fdsalkfdsaklhfjkadshfjkasdhfkjhadsjkfhf',
    adopted: false
  },
  {
    name: 'Cloe',
    img: 'img/sclksjdf.gif',
    age: 5,
    breed: 'butterphant',
    description: 'fdsalkfdsaklhfjkadshfjkasdhfkjhadsjkfhf',
    adopted: false
  },
  {
    name: 'Awesomesauce',
    img: 'img/sclksjdf.gif',
    age: 5,
    breed: 'manimal',
    description: 'fdsalkfdsaklhfjkadshfjkasdhfkjhadsjkfhf',
    adopted: true
  }
];

$(document).ready(function() {
  var agency = new Agency();
  agency.build(agency, seededAnimals);

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
    console.log(agency);
  });
});
