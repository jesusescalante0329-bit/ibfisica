function toggleSidebar() {
    document.body.classList.toggle('sidebar-hidden');
}

function toggleSubmenu(element) {
    const parent = element.closest('li');
    
    // Cierra otros submenús en el mismo nivel si se abre uno nuevo.
    if (!parent.classList.contains('active')) {
        const siblings = parent.parentElement.querySelectorAll('li');
        siblings.forEach(sibling => {
            sibling.classList.remove('active');
        });
    }
    
    // Abre o cierra el submenú actual.
    parent.classList.toggle('active');
}
