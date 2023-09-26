var wishList = document.getElementById("wishlist");
var logOut = document.getElementById("logout");
var back = document.getElementById("back");

wishList.addEventListener("click", async function () {
    const response = await fetch('/api/wishlist');
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to load wishlist.');
    }
});

logOut.addEventListener("click", async function () {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert('Logout failed');
    }
});


back.addEventListener("click", async function () {
    const response = await fetch('/api/dashboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Load dashboard failed');
    }
});