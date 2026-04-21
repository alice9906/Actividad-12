const { createApp } = Vue;

// Crear la app
const app = createApp({
    data() {
        return {
            chuck: [
                {
                    icon_url: "images/chuck norris.webp",
                    value: "Chuck Norris can skydive into outer space."
                },
                {
                    icon_url: "images/chuck norris.webp",
                    value: "The chief export of Chuck Norris is pain."
                },
                {
                    icon_url: "images/chuck norris.webp",
                    value: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants."
                },
                {
                    icon_url: "images/chuck norris.webp",
                    value: "Time waits for no man. Unless that man is Chuck Norris."
                },
                {
                    icon_url: "images/chuck norris.webp",
                    value: "If you spell Chuck Norris in Scrabble, you win. Forever."
                }
            ]
        }
    }
});

// Crear el componente
app.component('chuck-card', {
    props: ['icon_url', 'value'],
    template: `
        <div class="card h-100 shadow-sm">
            <img :src="icon_url" 
                class="card-img-top img-fluid p-3"
                alt="Chuck Norris">
            <div class="card-body">
                <p class="card-text text-center">{{ value }}</p>
            </div>
        </div>
    `
});

// Montar la app
app.mount('#app');