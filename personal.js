console.log("Script running...");

document.querySelector('.cross').style.display = 'none';

document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    } else {
        document.querySelector('.ham').style.display = 'inline';

        setTimeout(() => {
            document.querySelector('.cross').style.display = 'none';
        }, 350);
    }
});

// Close sidebar on click outside
document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.sidebar');
    if (!event.target.closest('.container') && sidebar.classList.contains('sidebarGo')) {
        sidebar.classList.remove('sidebarGo');
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
});
