document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the stored click count
    let count = localStorage.getItem("clicks") || 0;

    // Log the count to keep it visible in the console
    console.log(`Project link has been clicked ${count} times.`);

    // Track button clicks and update the count
    document.querySelector(".btn").addEventListener("click", function() {
        count++;
        localStorage.setItem("clicks", count);
        console.log(`Project link clicked ${count} times.`);
    });
});

