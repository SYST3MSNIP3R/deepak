document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const closeButtons = document.querySelectorAll('.close');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const bookingModal = document.getElementById('bookingModal');
    const loginChoiceModal = createModal('loginChoiceModal');

    // Create Modal Function
    function createModal(id) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.id = id;
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal('${id}')">&times;</span>
                <h2>Login As</h2>
                <div class="login-options">
                    <div class="login-card" onclick="window.location.href='user.html'">
                        <img src="profile.png" alt="User">
                        <h2>User</h2>
                    </div>
                    <div class="login-card" onclick="window.location.href='user.html'">
                        <img src="tool-box.png" alt="Provider">
                        <h2>Service Provider</h2>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        return modal;
    }

    // Modal Show Logic
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            loginChoiceModal.style.display = 'flex';
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            signupModal.style.display = 'flex';
        });
    }

    // Close Modal Buttons
    closeButtons.forEach(btn => {
        btn.onclick = () => {
            btn.closest('.modal').style.display = 'none';
        };
    });

    // Outside Modal Click Closes It
    window.onclick = (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    };
    //search bar
    const services = [
        "Plumber",
        "Carpenter",
        "Electrician",
        "Painter",
        "Blacksmith",
        "Gardener",
        "House Cleaner",
        "AC Repair",
        "Refrigerator Technician",
        "Interior Designer",
        "Mechanic",
        "Welder",
        "Laundry Service",
        "Roof Repair"
      ];
      
      const searchInput = document.getElementById('searchInput');
      const resultsList = document.getElementById('resultsList');
      
      searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        resultsList.innerHTML = "";
      
        const filtered = services.filter(service => service.toLowerCase().includes(query));
      
        filtered.forEach(service => {
          const li = document.createElement('li');
          li.textContent = service;
          resultsList.appendChild(li);
        });
      
        if (filtered.length === 0 && query !== "") {
          resultsList.innerHTML = "<li>No matching services found</li>";
        }
      });
      
// Book Now Logic
    const bookNowBtns = document.querySelectorAll('.book-now-btn');
    bookNowBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const service = btn.parentElement.getAttribute('data-service');
            document.getElementById('serviceType').value = service;
            bookingModal.style.display = 'flex';
        });
    });

    // Navigation Active Link Highlight
    const links = document.querySelectorAll(".nav-links a");
    const currentUrl = window.location.href;

    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href !== "#" && currentUrl.includes(href)) {
            link.classList.add("active");
        }
    });

    // // Login input handling
    // function setupLoginLogic() {
    //     const continueBtn = document.querySelector("button");
    //     const inputField = document.querySelector("input");

    //     if (continueBtn && inputField) {
    //         continueBtn.addEventListener("click", () => {
    //             const inputValue = inputField.value.trim();
    //             if (inputValue === "") {
    //                 alert("Please enter your phone number or email.");
    //             } else {
    //                 alert(`Logging in with: ${inputValue}`);
    //                 // Add real login logic here
    //             }
    //         });
    //     }
    // }

    // setupLoginLogic();


    // Function to show a toast notification
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    
    const toast = document.createElement('div');
    toast.classList.add('toast', type);

    // Create icon based on message type
    const icon = document.createElement('span');
    icon.classList.add('icon');
    icon.textContent = type === 'error' ? '❌' : '✅'; // Checkmark for success, cross for error

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close');
    closeBtn.textContent = '×';
    closeBtn.onclick = () => toast.remove();

    // Set the toast message
    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    // Append everything to the toast
    toast.appendChild(icon);
    toast.appendChild(messageElement);
    toast.appendChild(closeBtn);

    // Append toast to the container
    toastContainer.appendChild(toast);

    // Remove the toast after the animation completes (3 seconds)
    setTimeout(() => toast.remove(), 3500);
}

// Login input handling
function setupLoginLogic() {
    const continueBtn = document.querySelector("button");
    const inputField = document.querySelector("input");

    if (continueBtn && inputField) {
        continueBtn.addEventListener("click", () => {
            const inputValue = inputField.value.trim();
            if (inputValue === "") {
                showToast("Please enter your phone number or email.", 'error');
            } else {
                showToast(`Logging in with: ${inputValue}`, 'success');
                // Add real login logic here
            }
        });
    }
}

setupLoginLogic();


    // Optional: You can add extra control functions if needed
    function closeModal(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.style.display = 'none';
        }
    }
});
