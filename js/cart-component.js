class Cart extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        
    }

    connectedCallback() {
        document.addEventListener("openModal", (event) => {
            this.openModal();
        });    
        this.render()
    }

    render() {
        this.shadow.innerHTML =
      /*html*/`
        <style>
            .content{
                background-color:#EDF7C6;
                min-height:100%;
                min-width:25%;
             

            }
            .cart-content{
                display:flex;
                gap:0.8rem;
                padding: 0.5rem;
                justify-content:center;
               
            }
            .cart-content-details{
                display:flex;
                gap:0.8rem;
                padding: 0.5rem;
                flex-direction:column;
                
            }
            .cart-quantity{
                flex-direction:row;
            }
            
            .modal {
                background-color: hsla(0, 7%, 3%, 0.5);
                align-items: flex-end;
                display: flex;
                flex-direction: column;
                justify-content:center;
                opacity: 0;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                z-index: 3000;
                visibility: hidden;
                transition: opacity 0.3s, visibility 0.3s;
            }
    
            .modal.active {
                opacity: 1;
                visibility: visible;
                
            }
            h2,h3,p{
                color: #EA5656;
            }
            img{
                width:70px;
                height:70px;
                
            }
            .user-button{
                justify-content:flex-end;
            }
        </style>
            
        <div class="modal">
            <div class="content">
                <div class="cart-content">
                    <div class="cart-content-details">
                        <a href="game-description.html"><img src="https://www.neoteo.com/wp-content/images/BAC2.jpg"></a>
                        <h3>Gears of war 2</h3>
                    </div>

                    <div class="cart-quantity">
                        <h3>CANTIDAD</h3>
                        <div class="add"><h3>+</h3></div>
                        <h3>1</h3>
                        <div class="remove"><h3>-</h3></div>
                    </div>

                    <div class="cart-content-details">
                        <h3>PRECIO</h3>
                        <h3>xx,xx €</h3> 
                        
                    </div>
                    
                    <div class="user-button">
                        <button class="cancel">cancelar</button>
                        <button>checkout</button>
                    </div>
                </div>
            </div>
        </div>

      `
      const cancelButton = this.shadow.querySelector('.cancel');
    
      cancelButton.addEventListener("click", async (event) => {
          this.closeModal()
      })
    }

    openModal(){
        const modal = this.shadow.querySelector(".modal");
        modal.classList.add("active");
    }
    closeModal(){
        const modal = this.shadow.querySelector(".modal");
        modal.classList.remove("active");
    }
}

customElements.define('cart-component', Cart);