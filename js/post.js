function editBlog(){
   
    console.log('sd');
    var button = document.getElementById('editButton');
    if(document.getElementById('blogBody').contentEditable == "true"){
        button.innerHTML = `Edit <i class="fa fa-pencil-square-o" aria-hidden="true"></i>`;
        console.log('eidt')
        document.getElementById('blogBody').contentEditable =  false;
        document.getElementById('blogBody').style.border="none";
    }else{

        button.innerHTML =  `Save <i class="fa fa-floppy-o" aria-hidden="true"></i>`
        document.getElementById('blogBody').style.border="1px solid #a8c9ff";
        document.getElementById('blogBody').contentEditable= true;
    }
}
var likeCount = 0;
function like(){
    if(likeCount == 0){
        document.getElementById('thumbsUp').innerHTML = `<i class="fa fa-thumbs-up"></i> Liked `
        document.getElementById('likeCount').innerText = '1 person likes this!';
    }else{
        document.getElementById('likeCount').innerText = `${likeCount} persons have liked this!`;

    }
    likeCount++;
}
function postComment(){
    var comment = document.getElementById('userComment').value;
    if(comment != ""){
    var p = document.createElement('p');
    p.innerText = comment;
    document.getElementById('commentsContainer').appendChild(p);
    console.log(p.innerText)
    document.getElementById('userComment').value = "";
    }
}