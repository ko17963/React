function Submit() {
  return <button onClick={Click}>submit</button>;
}

function Delete() {
  return <button>delete</button>;
}

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Hello <br />
        How do you do?
      </p>
    </div>
  );
}

function Detail() {
  return (
    <>
      <h2>Outline</h2>
      <h2>Map</h2>
      <h2>History</h2>
    </>
  );
}

const author = {
  name: "Ko",
  imageurl: "https://i.imgur.com/yXOvdOSs.jpg",
  size: 150,
};

//ChatGPTのチュートリアル
const Click = () => {
  alert("Button clicked!");
};

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Submit />
      <br />
      <Delete />
      <AboutPage />
      <Detail />
      <h3>{author.name}</h3>
      <img
        src={author.imageurl}
        alt={"Photo of " + author.name}
        style={{
          width: author.size,
          height: author.size,
        }}
      />
    </div>
  );
}
