const Home = ({ startListening, listening }) => {
    return (
      <div>
        <h1>🏠 Welcome to Home</h1>
        {!listening ? (
          <button onClick={startListening}>🎤 Start Voice Control</button>
        ) : (
          <p>🎧 Voice control is active. Speak to navigate!</p>
        )}
      </div>
    );
  };
  
  export default Home;
  