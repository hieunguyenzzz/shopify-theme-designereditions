
  
  class LoadMoreButton extends HTMLElement {
    constructor() {
      super();
        const selector = this.getAttribute('data-selector')
        const targets = document.querySelectorAll(selector)
        const createInteraction=(target)=>{
            const handleIntersection = (entries, observer) => {
                if (!entries[0].isIntersecting) return;
                observer.unobserve(target);
                target.classList.add('visible')
              }
        
            new IntersectionObserver(handleIntersection.bind(this), {rootMargin: '0px 0px 200px 0px'}).observe(target);
        }
        targets.forEach(createInteraction.bind(this))
    }
  
    
  }
  customElements.define('load-more-button', LoadMoreButton);