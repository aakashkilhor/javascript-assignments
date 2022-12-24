const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function unique(element, indexofelement) {
    return words.indexOf(element) === indexofelement;}

console.log(words.filter(unique))
