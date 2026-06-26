// Add or edit your images here! Just copy an object block to add more.
const galleryData = [
    {
        id: 1,
        imgUrl: "https://assets.cdn.filesafe.space/EPf4inebxgsxDKVxjwhB/media/6a32c3db5408771d164762e2.png",
        hoverText: "Buyer's Guide"
    },
    {
        id: 2,
        imgUrl: "https://assets.cdn.filesafe.space/EPf4inebxgsxDKVxjwhB/media/6a32b7100a683b64feb20f97.png",
        hoverText: "Buyer's Newsletter"
    },
    {
        id: 3,
        imgUrl: "https://assets.cdn.filesafe.space/EPf4inebxgsxDKVxjwhB/media/6a32c1cead2dd4493c1aad03.png",
        hoverText: "Seller's Guide"
    },
    {
        id: 4,
        imgUrl: "https://assets.cdn.filesafe.space/EPf4inebxgsxDKVxjwhB/media/6a32b4c01789eaded3e59125.png",
        hoverText: "Seller's Newsletter"
    },
    {
        id: 5,
        imgUrl: "https://assets.cdn.filesafe.space/EPf4inebxgsxDKVxjwhB/media/6a32bb042c211b8ce6f39e83.png",
        hoverText: "Buyer's Checklist"
    }
];

let currentIndex = 0;

// DOM Elements
const galleryContainer = document.getElementById('galleryContainer');
const modal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
const thumbnailStrip = document.getElementById('thumbnailStrip');

// Build the Grid
function initGallery() {
    galleryData.forEach((item, index) => {
        // Create Grid Item
        const div = document.createElement('div');
        div.classList.add('gallery-item');
        div.onclick = () => openModal(index);
        
        div.innerHTML = `
            <img src="${item.imgUrl}" alt="${item.hoverText}">
            <div class="hover-overlay">
                <h3>${item.hoverText}</h3>
            </div>
        `;
        galleryContainer.appendChild(div);

        // Create Thumbnail for Modal
        const thumb = document.createElement('img');
        thumb.src = item.imgUrl;
        thumb.classList.add('thumb-img');
        thumb.onclick = () => updateModal(index);
        thumbnailStrip.appendChild(thumb);
    });
}

function openModal(index) {
    modal.style.display = 'flex';
    updateModal(index);
}

function updateModal(index) {
    currentIndex = index;
    const item = galleryData[index];
    
    modalImage.src = item.imgUrl;

    // Update active thumbnail state
    const thumbs = document.querySelectorAll('.thumb-img');
    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[index].classList.add('active');
}

function closeModal() {
    modal.style.display = 'none';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % galleryData.length;
    updateModal(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    updateModal(currentIndex);
}

// Event Listeners
document.getElementById('closeBtn').addEventListener('click', closeModal);
document.getElementById('nextBtn').addEventListener('click', nextImage);
document.getElementById('prevBtn').addEventListener('click', prevImage);

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Initialize
initGallery();