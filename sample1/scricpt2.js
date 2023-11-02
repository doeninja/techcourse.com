  <script>
        // JavaScript code can be added here to handle user ratings
        // For a simple example, you can use JavaScript to capture and process the user's rating.
    </script>
</body>
</html>
<script><div class="rating">
    <span class="star">☆</span>
    <span class="star">☆</span>
    <span class="star">☆</span>
    <span class="star">☆</span>
    <span class="star">☆</span>
</div>

<script>
    const stars = document.querySelectorAll(".star");

    stars.forEach((star, index) => {
        star.addEventListener("click", () => {
            // Reset all stars
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.textContent = "★"; // Filled star
                } else {
                    s.textContent = "☆"; // Empty star
                }
            });

            // You can send the rating (index + 1) to your server for further processing.
            const rating = index + 1;
            console.log("You rated the website: " + rating + " stars");
        });
    });
</script>


