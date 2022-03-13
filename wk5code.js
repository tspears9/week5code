class Skate{
  constructor(name, type){                    //type refers to type of skate equipment 
    this.name = name;                         // Ex. Chicago, Moxi, Magneto
    this.type = type;                         // Ex. quad, inline, cruiser, dancer 
  }

  describe() {
    return `${this.name} is a ${this.type}.`;
  }
}

class Category {                              //ex. skateboard, rollerskate, ice skate
  constructor(name) {
    this.name = name;
    this.skates = [];
  }

  addSkate(skate) {
    if(skate instanceof Skate) {
      this.skate.push(skate);
    } else {
      throw new Error('You can only add an instance of Skate. Argument is not a skate: ${skate}');
    }
  }

  describe() {
    return `${this.name} is 1 of ${this.skates.length} skates.`;
  }

}

class Menu{
  constructor() {
    this.category = [];
    this.selectedCategory = null;
  }

  start() {
    let selection = this.showMainMenuOptions();
    while(selection !=0) {
      switch (selection) {
        case '1':
          this.createCategory();
          break;
        case '2':
          this.viewCategory();
          break;
        case '3':
          this.deleteCategory();
          break;
        case '4':
          this.displayCategory();
          break;
        default:
          selection = 0
      }
      selection = this.showMainMenuOptions();
    }

    alert('See Ya Later!');
  }

  showMainMenuOptions() {
    return prompt(`
    
      0) back
      1) create new category
      2) view category
      3) delete category
      4) display category
    `);
  }

  showCategoryMenuOptions(categoryInfo) {
    return prompt(`
      0) back
      1) create skate
      2) delete skate
      ---------------------
      ${categoryInfo}
    `);
  }

  displayCategory() {
    let categoryString = '';
    for(let i = 0; i < this.category.length; i++) {
      categoryString += i + ') ' + this.category[i].name + '\n';
    }
    alert(categoryString);
  }

  createCategory(){
    let name = prompt('Enter name for new category:');
    this.category.push(new Category(name));
  }

  viewCategory() {
    let index = prompt('Enter the index of the category you wish to view:');
    if(index > -1 && index < this.category.length) {
      this.selectedCategory = this.category[index];
      let description = 'Category name: ' + this.selectedCategory.name + '\n';

      for(let i = 0; i < this.selectedCategory.skates.length; i++) {
        description += i + ')' + this.selectedCategory.skates[i].name
        + ' - ' + this.selectedCategory.skates[i].type + '\n';
    }

    let selection = this.showCategoryMenuOptions(description);
    switch (selection) {
      case '1':
        this.createSkate();
        break;
      case '2':
        this.deleteSkate();
    }
  }
}

    deleteCategory() {
      let index = prompt('Enter index of category you wish to delete:');
      if(index > -1 && index < this.category.length) {
        this.category.splice(index, 1);
  }
}

    createSkate() {
      let name = prompt('Enter name of new skate:');
      let type = prompt('Enter type of new skate:');
        this.selectedCategory.skates.push(new Skate(name, type));
}

    deleteSkate() {
      let index = prompt('Enter the index of the skate you wish to delete:');
      if(index > -1 && index < this.selectedCategory.skates.length) {
        this.selectedCategory.skates.splice(index, 1);
  }
}
}

let menu = new Menu();
menu.start();