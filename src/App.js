import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        {/* <div className="share-button">
          <a href="https://midnighbakes.netlify.app/">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 512 512">
              <title>ionicons-v5-f</title>
              <path
                d="M336,192h40a40,40,0,0,1,40,40V424a40,40,0,0,1-40,40H136a40,40,0,0,1-40-40V232a40,40,0,0,1,40-40h40"
                style={{
                  fill: 'none',
                  stroke: '#000',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '32px',
                }}
              />
              <polyline points="336 128 256 48 176 128"
                style={{
                  fill: 'none',
                  stroke: '#000',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '32px',
                }}
              />
              <line x1="256" y1="321" x2="256" y2="48"
                style={{
                  fill: 'none',
                  stroke: '#000',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '32px',
                }}
              />
            </svg>
          </a>
        </div> */}
      </header>
      <div className="container">
        <div className="image-container">
          <img src="/midnight.jpg" alt="midnight" />
        </div>
        {/* Name */}
        <h1>@MIDNIGHT__BAKES</h1>
        {/* Instagram */}
        <a className="title" href="https://www.instagram.com/midnight__bakes/?fbclid=IwAR16rFn7FWb8b4fNQua5HYmwR1pL80KKOsF3yQwFL79DGsGPoL4Jv92N0qI">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor"
              class="bi bi-instagram" viewBox="0 0 16 16">
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </div>
          <p>Instagram</p>
          <div className="title-share-button">
            <a href="https://www.instagram.com/midnight__bakes/?fbclid=IwAR16rFn7FWb8b4fNQua5HYmwR1pL80KKOsF3yQwFL79DGsGPoL4Jv92N0qI">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512">
                <title>ionicons-v5-f</title>
                <path
                  d="M336,192h40a40,40,0,0,1,40,40V424a40,40,0,0,1-40,40H136a40,40,0,0,1-40-40V232a40,40,0,0,1,40-40h40"
                  style={{
                    fill: 'none',
                    stroke: 'rgb(255, 255, 255)',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px',
                  }}
                />
                <polyline points="336 128 256 48 176 128"
                  style={{
                    fill: 'none',
                    stroke: 'rgb(255, 255, 255)',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px',
                  }}
                />
                <line x1="256" y1="321" x2="256" y2="48"
                  style={{
                    fill: 'none',
                    stroke: 'rgb(255, 255, 255)',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px',
                  }}
                />
              </svg> */}
            </a>
          </div>
        </a>

        {/* Facebook */}
        <a className="title" href="https://www.facebook.com/profile.php?id=100087489354196">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              />
            </svg>
          </div>
          <p>Facebook</p>
          <div className="title-share-button">
            <a href="https://www.facebook.com/profile.php?id=100087489354196">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512">
                <title>ionicons-v5-f</title>
                <path
                  d="M336,192h40a40,40,0,0,1,40,40V424a40,40,0,0,1-40,40H136a40,40,0,0,1-40-40V232a40,40,0,0,1,40-40h40"
                  style={{
                    fill: 'none',
                    stroke: 'rgb(255, 255, 255)',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px',
                  }}
                />
                <polyline points="336 128 256 48 176 128"
                  style={{
                    fill: 'none',
                    stroke: 'rgb(255, 255, 255)',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px',
                  }}
                />
                <line x1="256" y1="321" x2="256" y2="48"
                  style={{
                    fill: 'none',
                    stroke: 'rgb(255, 255, 255)',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px',
                  }}
                />
              </svg> */}
            </a>
          </div>
        </a>
        {/* Telephone Num */}
        <a className="title" href="tel:0915828369">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </div>
          <p>0915828369</p>
          <div className="title-share-button">
            <a href="tel:0915828369">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512">
                <title>ionicons-v5-f</title>
                <path
                  d="M336,192h40a40,40,0,0,1,40,40V424a40,40,0,0,1-40,40H136a40,40,0,0,1-40-40V232a40,40,0,0,1,40-40h40"
                  style={{
                    fill: 'none',
                    stroke: 'rgb(255, 255, 255)',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px',
                  }}
                />
                <polyline points="336 128 256 48 176 128"
                  style={{
                    fill: 'none',
                    stroke: 'rgb(255, 255, 255)',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px',
                  }}
                />
                <line x1="256" y1="321" x2="256" y2="48"
                  style={{
                    fill: 'none',
                    stroke: 'rgb(255, 255, 255)',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '32px',
                  }}
                />
              </svg> */}
            </a>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
