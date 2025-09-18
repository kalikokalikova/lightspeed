import backgroundImage from "../../assets/darkwater.jpg";

export default function Home() {

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh' // Example height
  };

  return (
    <div style={backgroundStyle}>Home</div>
  )
}
