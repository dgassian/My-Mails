const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>New message</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;

document.querySelector('#msg-container').innerHTML += newMessage;

const messagesCount = document.querySelectorAll('p').length;
document.querySelector('#count').textContent = messagesCount;

let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`;

//Supprimer les messages en cliquant sur tout les X via élément parents
for (let i = 0; i < document.querySelectorAll('.delete').length; i++) {
  document.querySelectorAll('.delete')[i].addEventListener('click',
    function () {
      this.parentNode.remove();

      const messagesCount = document.querySelectorAll('.row').length;
      document.querySelector('#count').textContent = messagesCount;
    }
  );
 };

document.querySelector('#btn-add').addEventListener('click',
function () {
  const message = document.querySelector('#add-message').value;
  const newMessage = ` 
    <div class="row new-row">
      <img class="avatar" src="images/avatar-1.jpg" />
      <div class="text-container">
      <h6>John Doe</h6>
      <p>${message}</p>
      </div>
      <span class="delete">✖</span>
    </div>
  `;

  document.querySelector('#msg-container').innerHTML += newMessage;

  for (let i = 0; i < document.querySelectorAll('.delete').length; i++) {
    document.querySelectorAll('.delete')[i].addEventListener('click',
      function () {
        this.parentNode.remove();
        const messagesCount = document.querySelectorAll('.row').length;
        document.querySelector('#count').textContent = messagesCount;
      }
    );
   };
    const messagesCount = document.querySelectorAll('.row').length;
    document.querySelector('#count').textContent = messagesCount;

    if(message) {
      document.querySelector('#add-message').value = '';
    }
  }
);

document.querySelector('#btn-search').addEventListener('click',
function () {
  const textToCompare = document.querySelector('#search-message').value.toLowerCase();
  for (let i = 0; i <document.querySelectorAll('h6').length; i++) {
    if (document.querySelectorAll('h6')[i].textContent.toLowerCase().includes(textToCompare) === false ) {
      const textToShow = document.querySelectorAll('h6')[i].parentNode.parentNode;
      textToShow.style.display = 'none';
    } else {
      const textToHide = document.querySelectorAll('h6')[i].parentNode.parentNode;
      textToHide.style.display = 'flex';
    }
  }
  if(textToCompare) {
    document.querySelector('#search-message').value = '';
  }
}
);