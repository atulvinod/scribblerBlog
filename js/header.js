// This function is called when the modal is to be dismissed
function closeSigninModal(){
    document.body.removeChild(document.getElementById('signinModal'));
}
// This function is called when signin modal is to be shown
function showSigninModal(){
    document.body.innerHTML += `<div class="Modal" id="signinModal">
    <div class="modalContent">
        <div class="modalHeader" style="font-size: 25px;">
            <span>Welcome Back!</span><span><Button style="background: white;border: 1px white;"
                    onclick="closeSigninModal()" id="closeSigninModal"><i class="fa fa-times"
                        aria-hidden="true" style="font-size: 17px;"></i>
                </Button></span>
        </div>
        <div class="modalInputs">
            <div>
                <span>Username</span>
                <input type="text" placeholder="Enter your username" required></div>
            <div>
                <span>Password</span>
                <input type="password" placeholder="Enter Your Password" required></div>
                <div class="divider"></div>
                <div>
                        <button id="signInButton">Sign-in</button>
                    </div>
                    <div class="notAMember">
                        <span>Not a member ?</span><a href="#" onclick="signUpModalRedirect()">Sign Up!</a>
                    </div>
                
        </div>
        

    </div>
</div>`
}
// This function is called when signup modal is to be dismissed
function closeSignupModal(){
    document.body.removeChild(document.getElementById('signupModal'));
}
// This function is called when signup modal is to be shown 
function showSignUpModal(){
    document.body.innerHTML += `    <!-- Insert code for Sign In modal here -->
    <div class="Modal" id="signupModal">
        <div class="modalContent">
            <div class="modalHeader">
                <span>Get Started!</span>
                <Button style="background: white;border: 1px white;" onclick="closeSignupModal()"
                    id="closeSigninModal"><i class="fa fa-times" aria-hidden="true" style="font-size: 17px;"></i>
                </Button>
            </div>
            <div class="modalInputs">
                <div>
                    <span>Full Name</span>
                    <input type="text" placeholder="Enter your full name" required></div>
                <div>
                    <div>
                        <span>User Name</span>
                        <input type="text" placeholder="Enter your user name" required>
                    </div>
                    <div>
                        <span>Password</span>
                        <input type="password" placeholder="Enter your password" required>
                    </div>
                    <div>
                        <span>Confirm Password</span>
                        <input type="password" placeholder="Confirm Password" required>
                    </div>
                    <div class="divider2"></div>
                    <div>
                        <button id="signUpButton">Sign-up</button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

    </div>  
`
}
// This function is called when Sign up button from the signin modal is clicked
function signUpModalRedirect(){
    closeSigninModal()
    showSignUpModal();
}