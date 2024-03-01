export default () => {
    const container = document.createElement('section');
    container.classList.add('first_section');
    
    const template = `
        <h1>Arkyn Dev</h1>
        <p>O melhor para seus sites!</p>
    `;

    container.innerHTML =  template;

    return container;
}