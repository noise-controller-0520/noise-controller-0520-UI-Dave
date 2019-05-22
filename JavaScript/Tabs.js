class TabLink {
    constructor(tab) {
  
      this.tab = tab;
      this.tabData = this.tab.dataset.tab;
  
      // Check if user clicked 'all' cards or only a specific category.
      if (this.tabData === 'All') {

        // If true, select all cards.
        this.cards = document.querySelectorAll('.card');
      }     

      // If false, select cards matching this.tabData values.
      else {
        this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);      
      }
  
      // Convert each this.cards element to new instance of TabCard class. 
      // Pass in a card object to TabCard class. 

      this.cards = Array.from(this.cards).map(card => {
        return new TabCard(card);
      });
  
      // Add click event to invoke this.selectTab.
      this.tab.addEventListener('click', () => this.selectTab());
    }
  
    selectTab() {
  
      // Select all elements with .tab class on them.
      const tabs = document.querySelectorAll('.tab');
  
      // Iterate through NodeList and remove .active-tab class from each.
      tabs.forEach(tab => {
        tab.classList.remove('active-tab');
      })
  
      // Select all elements with the .card class.
      const cards = document.querySelectorAll('.card');
  
      // Iterate through NodeList setting display style to 'none' on each card.
      cards.forEach(card => {
        card.style.display = 'none';
      });
  
      // Add a class of ".active-tab" to this.tab.
      this.tab.classList.add('active-tab');
  
      // Loop through this.cards array and invoke selectCard() from TabCard class.
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement) {
      // Assign this.cardElement to cardElement DOM reference.
      this.cardElement = cardElement;
    }
    selectCard() {
      // Update style of this.cardElement to display = "flex".
      this.cardElement.style.display = 'flex';
    }
  }
  
  /*   
  - Select all ".tab" classes and assign them to the tabs variable.
  - Iterate over tabs node list.
  - Return new instance of TabLink for each tab and pass each tab as parameter.  
  */

  let tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    return new TabLink(tab);
  });
  
  
  
  
  
  