<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GrindMeter V2 Inspired</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="logo">
            <h1>GrindMeter</h1>
        </div>
    </header>

    <!-- Main Content Area -->
    <main>
        <div class="content">
            <h2>Welcome to GrindMeter V2</h2>
            <p>Your content here! This could be a chart, meter, or whatever you'd like to replicate.</p>
            <!-- Example Input for dynamic behavior -->
            <input type="range" id="meter" min="0" max="100" value="50">
            <div id="valueDisplay">Current Value: 50</div>
        </div>
    </main>

    <!-- Bottom Navbar -->
    <nav class="bottom-navbar">
        <button id="homeBtn">Home</button>
        <button id="settingsBtn">Settings</button>
        <button id="profileBtn">Profile</button>
    </nav>

    <script src="app.js"></script>
</body>
</html>
