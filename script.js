body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #0a0a0a;
  color: #f0f0f0;
  line-height: 1.6;
}

.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #fff;
}

.subtitle {
  color: #aaa;
  font-size: 1.1rem;
}

section {
  margin-bottom: 40px;
}

h2 {
  font-size: 1.5rem;
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  margin-bottom: 15px;
  color: #ddd;
}

p, li {
  font-size: 1rem;
  color: #ccc;
}

ul {
  list-style: disc;
  padding-left: 20px;
}

footer {
  text-align: center;
  margin-top: 40px;
  font-size: 0.9rem;
  color: #555;
}

/* Spotify Card */
#spotify-card {
  display: flex;
  align-items: center;
  background: #181818;
  border-radius: 12px;
  padding: 15px;
  gap: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

#spotify-card img {
  width: 64px;
  height: 64px;
  border-radius: 8px;
}

.spotify-info {
  flex: 1;
}

#spotify-track {
  font-weight: 600;
  font-size: 1.1rem;
  color: #fff;
}

#spotify-artist {
  font-size: 0.9rem;
  color: #aaa;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: #333;
  border-radius: 2px;
  margin-top: 8px;
}

#progress {
  width: 50%;
  height: 100%;
  background: #1db954; /* Spotify green */
  border-radius: 2px;
}
