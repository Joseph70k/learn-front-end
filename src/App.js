export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <MyButton />
      <AboutPage />
       <Profile />
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

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}