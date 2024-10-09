document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('item-form');
    const newItemInput = document.getElementById('new-item');
    const itemsToBuy = document.getElementById('items-to-buy');
    const itemsBought = document.getElementById('items-bought');
  
    // Função para adicionar novo item
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const itemName = newItemInput.value.trim();
      if (itemName === '') return;
  
      addItem(itemName);
      newItemInput.value = ''; // Limpa o campo de texto
    });
  
    // Função para criar item na lista
    function addItem(name) {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = name;
      li.appendChild(span);
  
      // Botão de Marcar como Comprado
      const checkBtn = document.createElement('button');
      checkBtn.textContent = '✔️';
      checkBtn.addEventListener('click', () => {
        markAsBought(li);
      });
  
      // Botão de Excluir Item
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '🗑️';
      deleteBtn.addEventListener('click', () => {
        li.remove();
      });
  
      li.appendChild(checkBtn);
      li.appendChild(deleteBtn);
      itemsToBuy.appendChild(li); // Adiciona item na lista de "a comprar"
    }
  
    // Função para marcar item como comprado
    function markAsBought(item) {
      item.classList.add('item-comprado'); // Aplica estilo de item comprado
      item.querySelector('button').remove(); // Remove o botão de marcar
      itemsBought.appendChild(item); // Move o item para a lista de comprados
    }
  });
  