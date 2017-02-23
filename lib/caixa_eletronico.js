const validNotes = [100,50,20,10,5,2];

module.exports = {
  getNotes: (value) => {
    const quantity = [];
    let index = 0;
    do {
      if (value >= validNotes[index]){
        quantity.push(validNotes[index]);
        value -= validNotes[index];
      } else index++;
    } while(value > 0);
    return quantity;
  },
  result: (notes) => {
    let result = 'Entregar ';
    const phrases = [];
    validNotes.forEach(validNote => {
      const notesGroup = notes.filter(note => note === validNote);
      if (notesGroup.length != 0)
        phrases.push(`${notesGroup.length} nota(s) de R$${validNote},00`);
    });

    result += phrases.join('; ');

    const resultAsArray = result.split('');
    lastComma = result.lastIndexOf(';');
    if (lastComma >= 0) {
      resultAsArray.splice(lastComma, 2, ' e ');
      result = resultAsArray.join('');
    }

    return result;
  }
};
