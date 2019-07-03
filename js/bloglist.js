// This function is called when the modal is to be deleted
function dismissDelete(){
    document.body.removeChild(document.getElementById('deleteModal'));
}

// This function is called when the modal is to be shown
function showDeleteModal(){
    document.body.innerHTML += `<div class="Modal"id="deleteModal">
    <div class="modalContent deleteModal">
        <h4>Are you sure that you want to delete this post?</h4>
        <div id="deleteModalButtons">
            <button id="deleteYes" onclick="dismissDelete()">Yes</button>
            <button id="deleteNo" onclick="dismissDelete()">No</button>
        </div>
    </div>
</div>`
}