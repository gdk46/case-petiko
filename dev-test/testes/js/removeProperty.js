// Implemente a função removeProperty, que recebe um objeto e o nome de uma propriedade.

// Faça o seguinte:

// Se o objeto obj tiver uma propriedade prop, a função removerá a propriedade do objeto e retornará true;
// em todos os outros casos, retorna falso.

function removeProperty(obj, prop) {
  
	if (obj[prop] == undefined) {
		return false;
  }
  
	delete obj[prop];
	return true;
}
  const obj = {name: 'wesley', age: 20, favouriteColour:"white"};
  console.log(removeProperty(obj, 'favouriteColour'));
