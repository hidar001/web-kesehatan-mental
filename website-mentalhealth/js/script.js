// Animasi untuk cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.animate-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.6s ease forwards';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
    });
});

// Menambahkan event listener untuk button
document.querySelector('.btn').addEventListener('click', function() {
    alert('Terima kasih telah menghubungi kami. Kami akan segera merespon.');
}); 