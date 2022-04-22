
window.addEventListener ("load", function () {
    const slider = this.document.querySelector(".discover-list");
    const slider_main = this.document.querySelector(".discover-list-main");
    const slider_items = this.document.querySelector(".discover-list-item");
    const next_btn = this.document.querySelector('.slider-next');
    const prev_btn = this.document.querySelector('.slider-prev');
    const slider_item_width = 468;
    const slider_length = 10;
    let positonX = 0;
    let index = 1;
    
    next_btn.addEventListener("click", function () {
        handle_ChangeSlide(1);
    });

    prev_btn.addEventListener("click", function () {
        handle_ChangeSlide(-1);
    });

    function handle_ChangeSlide (direction) {
        if (direction == 1)
        {
            index++;
            if (index >= slider_length)
            {
                index = slider_length;
                return;
            } 
            positonX = positonX - slider_item_width;
            slider_main.style = `transform: translateX(${positonX}px)`;
        }else if (direction == -1)
        {
            index--;
            if (index <= 1)
            {
                index = 1;
                return;
            } 
            positonX = positonX + slider_item_width;
            slider_main.style = `transform: translateX(${positonX}px)`;
        }
    }
});