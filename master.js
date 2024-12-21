function addContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        const contactList = document.getElementById('contactList');
        const newRow = contactList.insertRow();

        const nameCell = newRow.insertCell(0);
        const phoneCell = newRow.insertCell(1);

        nameCell.textContent = name;
        phoneCell.textContent = phone;

        // Limpa os campos após adicionar
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    } else {
        alert('Preencha todos os campos!');
    }
}