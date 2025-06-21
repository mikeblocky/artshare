document.addEventListener('DOMContentLoaded', () => {
    // get the necessary elements from the dom
    const uploadDialog = document.getElementById('upload-dialog');
    const openUploadBtn = document.getElementById('open-upload-btn');
    const closeUploadBtn = document.getElementById('close-upload-btn');

    // check if all elements exist before adding listeners
    if (uploadDialog && openUploadBtn && closeUploadBtn) {
        
        // click the 'upload' button in the taskbar to open the dialog
        openUploadBtn.addEventListener('click', (e) => {
            e.preventDefault(); // prevent link from navigating
            uploadDialog.showModal(); // built-in browser function to open a dialog
        });

        // click the 'cancel' button inside the dialog to close it
        closeUploadBtn.addEventListener('click', () => {
            uploadDialog.close(); // built-in function to close a dialog
        });

        // allow closing the dialog by clicking on the backdrop
        uploadDialog.addEventListener('click', (event) => {
            if (event.target === uploadDialog) {
                uploadDialog.close();
            }
        });
    }
});