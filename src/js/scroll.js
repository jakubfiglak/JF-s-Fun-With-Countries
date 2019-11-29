export const scrollToSection = (button, section) => {
    const offset = (el) => {
        const rect = el.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop
        };
    }

    const startBtn = document.querySelector(button);

    startBtn.addEventListener('click', () => {
        const div = document.querySelector(section);
        const divOffset = offset(div);
        window.scrollTo({
            left: 0,
            top: divOffset.top,
            behavior: 'smooth'
        });
    })
};