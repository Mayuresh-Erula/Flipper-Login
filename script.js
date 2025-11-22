        // Initialize Lucide Icons
        lucide.createIcons();

        const flipContainer = document.getElementById('flip-container');
        const switchToSignUpButton = document.getElementById('switchToSignUp');
        const switchToLoginButton = document.getElementById('switchToLogin');

        // --- 3D Flip Logic ---
        if (switchToSignUpButton) {
            switchToSignUpButton.addEventListener('click', () => {
                flipContainer.classList.add('flipped');
            });
        }

        if (switchToLoginButton) {
            switchToLoginButton.addEventListener('click', () => {
                flipContainer.classList.remove('flipped');
            });
        }

        // --- Form Submission Placeholder Logic (Prevent actual submission) ---
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        const loginMessage = document.getElementById('login-message');
        const signupMessage = document.getElementById('signup-message');

        const handleSubmission = (event, type, messageElement) => {
            event.preventDefault();

            // Mock success feedback
            messageElement.textContent = `${type} successful! (Mock: No backend interaction)`;
            messageElement.style.display = 'block';

            setTimeout(() => {
                messageElement.style.display = 'none';
                // Only clear form if it was a successful mock
                event.target.reset();
            }, 3000);
        };

        loginForm.addEventListener('submit', (event) => {
            handleSubmission(event, 'Login', loginMessage);
        });

        signupForm.addEventListener('submit', (event) => {
            handleSubmission(event, 'Sign up', signupMessage);
        });