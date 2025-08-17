function toggleSidebar() {
    document.body.classList.toggle('sidebar-hidden');
}

function toggleSubmenu(element) {
    const parent = element.closest('li');
    
    // Cierra otros submenús en el mismo nivel
    const siblings = parent.parentElement.querySelectorAll('li');
    siblings.forEach(sibling => {
        if (sibling !== parent) {
            sibling.classList.remove('active');
        }
    });
    
    // Abre o cierra el submenú actual
    parent.classList.toggle('active');
}
