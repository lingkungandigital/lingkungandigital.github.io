document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navbar = document.getElementById('navbar');

    // Toggle (mengganti status) tampilan menu saat tombol hamburger diklik
    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Opsional: Tutup menu saat link di klik (hanya relevan di mobile)
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navbar.classList.remove('active');
            }
        });
    });
});
