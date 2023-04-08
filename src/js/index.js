import * as bootstrap from 'bootstrap';

window.closeModal =  function closeModal() {
    const myModal = bootstrap.Modal.getInstance('#myModal');
    myModal.hide();
}