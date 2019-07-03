// this function is called when the create post button is clicked and it shows the create post modal
function showCreatePostModal(){

    // The modal data is appended to the body
    document.body.innerHTML+= `    <div class="Modal" id="createPostModal">
    <div class="modalContent">
        <div class="modalHeader">Create a new post 

                <Button style="background: white;border: 1px white;"
                onclick="closeCreatePostModal()" id="closeCreatePostModal"><i class="fa fa-times"
                    aria-hidden="true" style="font-size: 17px;"></i>
            </Button>
        </div>
        <div class="modalInputs">
            <div>
                <span>Post Title</span>
                <input type="text" placeholder="Enter a title">
            </div>
            <div>
                <span>Post Content</span>
                <textarea name="" id="" style="display: block;    width: 98.5%;
                height: 8rem;"></textarea>
            </div>
            <div class="createPostDivider"></div>
            <div>
                    <button id="submitPost">Submit post</button>
                </div>
        </div>

    </div>
</div>`;
}

// This function closes the modal
function closeCreatePostModal(){
    // The modal is removed 
    document.body.removeChild(document.getElementById('createPostModal'));
}