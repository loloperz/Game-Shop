class User extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadow.innerHTML =
      /*html*/`
        <style>
            .cart{
                display:flex;
                gap:0.8em;
                padding: 1rem;
                margin-left:50%;

            }
            
            .users{
                align-items:center;
                display:flex;
                gap:0.8em;
                justify-content:flex-start;
                margin-left:20%;
                padding: 1rem;

            }
           .user{
            background-color:transparent;
            border-radius:25px;
            display: inline-block;
            width: 120px;
            height: 30px;  
            font-size: 15px; 
            border:none; 
            background-image:url("https://img.freepik.com/fotos-premium/fondo-carton-textura-papel-marron-oscuro-foto-alta-resolucion_463999-31.jpg");
            font-family: arial;
            color:#EDF7C6;
            box-shadow: 0px -0.5px 7px black;
            
           }
           .cart-button{
            background-color:transparent;
            border-radius:50px;
            display: inline-block;
            width: 50px;
            height: 50px;  
            font-size: 15px; 
            border:none; 
            background-image:url("https://img.freepik.com/fotos-premium/fondo-carton-textura-papel-marron-oscuro-foto-alta-resolucion_463999-31.jpg");
            color: #EDF7C6;
            box-shadow: 0px -0.5px 7px black;
           }
           .filter-button{
            background-color:transparent;
            border-radius:50px;
            display: inline-block;
            width: 50px;
            height: 50px;  
            font-size: 15px; 
            border:none; 
            background-image:url("https://img.freepik.com/fotos-premium/fondo-carton-textura-papel-marron-oscuro-foto-alta-resolucion_463999-31.jpg");
            color: #EDF7C6;
            box-shadow: 0px -0.5px 7px black;
           }
          svg{
            fill:#EDF7C6;
          }
        </style>
  
        <div class="users">
            <button class="user">New-member</button>
            <button class="user">Login</button>
            <div class="cart">
                <button class="filter-button"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16"> <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/> </svg></button>
                <button class="cart-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="250" height="250" fill="none"/><path d="M96,216a16,16,0,1,1-16-16A16,16,0,0,1,96,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,184,200ZM228.1,67.2a8.1,8.1,0,0,0-6.4-3.2H48.3L40.2,35.6A16.1,16.1,0,0,0,24.8,24H8A8,8,0,0,0,8,40H24.8l9.8,34.1v.2L61,166.6A24.1,24.1,0,0,0,84.1,184h95.8A24.1,24.1,0,0,0,203,166.6l26.4-92.4A8,8,0,0,0,228.1,67.2Z"/></svg></button>
            </div>
        </div>
        
      `
      const usersArea = this.shadow.querySelector('.users');
 
      usersArea.addEventListener("click", async (event) => {
  
          if (event.target.closest(".cart-button")){
              document.dispatchEvent(new CustomEvent("openModal"))
          }
  
      })
    }

    
}

customElements.define('user-component', User);