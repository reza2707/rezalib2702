document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const bookCards = document.querySelectorAll('.book-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            
            bookCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        
        bookCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const author = card.querySelector('.author').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || author.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Modal functionality
    const modal = document.getElementById('bookModal');
    const detailButtons = document.querySelectorAll('.detail-btn');
    const closeModal = document.querySelector('.close-modal');

    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.book-card');
            const title = card.querySelector('h3').textContent;
            const author = card.querySelector('.author').textContent;
            const category = card.querySelector('.category').textContent;
            const imgSrc = card.querySelector('img').src;

            document.getElementById('modalBookTitle').textContent = title;
            document.getElementById('modalBookAuthor').textContent = author;
            document.getElementById('modalBookCategory').textContent = category;
            document.getElementById('modalBookImage').src = imgSrc;

            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}); 