import { useState } from 'react';



export default function MyApp() {
  const [count, setCount] = useState(0);

function handleAlertClick() {
    alert('You clicked the button!');
  }

function handleClick() {
  setCount(count + 1);
}

  return (
    <div>
      <h1>Welcome to my app!</h1>
       <MyButton label="Click me (alert)" onClick={handleAlertClick} />
       <MyButton label={`Clicked ${count} times`} onClick={handleClick} />
      <AboutPage />
       <Profile />
       <ShoppingList />
    </div>
  );
}

function MyButton({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {label}
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

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return <ul>{listItems}</ul>;
}