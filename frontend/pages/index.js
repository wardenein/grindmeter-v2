<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GrindMeter v2 Inspired</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header">
    <div class="header-inner">
      <h1 class="site-title">GrindMeter v2</h1>
      <nav class="top-nav">
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#stats">Stats</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="site-main">
    <section id="dashboard" class="section dashboard">
      <h2>Dashboard</h2>
      <p>Here’s your main content area.</p>
      <!-- Example interactive element -->
      <div class="meter-control">
        <label for="grindLevel">Grind Level:</label>
        <input type="range" id="grindLevel" min="0" max="100" value="50">
        <div id="grindValue">50</div>
      </div>
    </section>

    <section id="stats" class="section stats">
      <h2>Stats</h2>
      <p>Statistics, graphs, history go here.</p>
    </section>

    <section id="settings" class="section settings">
      <h2>Settings</h2>
      <p>Configuration and preferences.</p>
    </section>
  </main>

  <nav class="bottom-nav">
    <button id="navDashboard" class="nav-btn">🏠</button>
    <button id="navStats" class="nav-btn">📊</button>
    <button id="navSettings" class="nav-btn">⚙️</button>
  </nav>

  <script src="app.js"></script>
</body>
</html>
