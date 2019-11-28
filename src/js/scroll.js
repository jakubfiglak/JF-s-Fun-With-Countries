export const scrollOnClick = () => {
    const offset = (el) => {
        const rect = el.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop
        };
    }

    const startBtn = document.querySelector('.startBtn');

    startBtn.addEventListener('click', () => {
        const div = document.querySelector('.country-search');
        const divOffset = offset(div);
        window.scrollTo({
            left: 0,
            top: divOffset.top,
            behavior: 'smooth'
        });
    })
};