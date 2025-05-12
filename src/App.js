export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <MyButton />
      <AboutPage />
    </div>
  );
}

function MyButton() {
  return (
    <button onClick={() => alert('You clicked the button!')}>
      Click me
    </button>
  );
}

function AboutPage() {
  return (
    <>
      <h2>About</h2>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
