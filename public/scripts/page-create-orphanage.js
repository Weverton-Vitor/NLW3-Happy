// create map
const map = L.map("mapid").setView([-27.2192089, -49.6490542], 13);

// create  and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [48, 58],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar o campo de fotos
function addPhotofield() {
  // Pegar o container de fotos #images
  const container = document.querySelector("#images");

  console.log(container);

  // Pegar o container para duplicar #new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // Realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // Verificar se o campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // Limpar o campo antes de adicionar ao container imagens
  input.value = "";

  // Adicionar o clone ao container de images
  container.appendChild(newFieldContainer);
}

// Deletar campos de fotos
function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    // Limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // Deletar o campo
  span.parentNode.remove();
}

// Alternando o botão de atendimento em finais de semana
function toggleSelect(event) {
  // Remover a classe .active dos botôes
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  // Pegar o botão clicado
  const button = event.currentTarget;

  // colocar a classe .active no botão clicado
  button.classList.add("active");

  // Verificar se o valor é sim ou não
  const input = document.querySelector('[name = "open_on_weekends"]');

  // Atualizar o input hidden com o valor selecionado
  input.value = button.dataset.value;
}

function validate(event) {
  const lat = document.querySelector('[name = "lat"]');
  const lng = document.querySelector('[name = "lng"]');

  if (lat.value == "" || lng.value == "") {
    event.preventDefault();
    alert("Selecione a localização do Orfanato");
  } else {
    document.getElementById("form-save-orphanage").submit;
  }
}
