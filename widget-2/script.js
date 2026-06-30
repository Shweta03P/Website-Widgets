// Add or edit your images here! Just copy an object block to add more.
const galleryData = [
    {
        id: 1,
        imgUrl: "https://assets.cdn.filesafe.space/EPf4inebxgsxDKVxjwhB/media/6a428b7661f2c4460922eb7b.png",
        hoverText: "Pre-Listing Flyers"
    },
    {
        id: 2,
        imgUrl: "https://assets.cdn.filesafe.space/EPf4inebxgsxDKVxjwhB/media/6a428b762fa97cb75437a200.png",
        hoverText: "New Listing Flyers"
    },
    {
        id: 3,
        imgUrl: "https://assets.cdn.filesafe.space/EPf4inebxgsxDKVxjwhB/media/6a428b760c7afddf1473ca6d.png",
        hoverText: "Listing Promotion Postcard"
    },
    {
        id: 4,
        imgUrl: "https://assets.cdn.filesafe.space/EPf4inebxgsxDKVxjwhB/media/6a4291c32fa97cb75438781a.png",
        hoverText: "Listing Presentation"
    },
    {
        id: 5,
        imgUrl: "https://assets.cdn.filesafe.space/EPf4inebxgsxDKVxjwhB/media/6a43d5dea7501a002afb287f.png",
        hoverText: "Listing Package Ads"
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