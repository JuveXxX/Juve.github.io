document.getElementById('garder').addEventListener('submit', function(e) {
    e.preventDefault();
    const first = document.getElementById('nom').value;
    const email = document.getElementById('gmail').value;
    alert(`Merci ${first} pour votre inscription, un message vous sera envoyé à l'adresse ${email}. N'hésitez pas de nous conctacter en cas de besoin, et surtout de visiter la page pour plus de contenu.`);
    this.reset();
});