const Header = () => {
  // const addButton = () => {
  //   console.log('click');
  // };

  return (
    <div sx={imgbackground}>
      <header className="header">
        <h1 style={headingStyle}>hero is zero</h1>
      </header>
    </div>
  );
};

const headingStyle = {
  color: "blue",
  backgroundColor: "orange",
  textAlign: "center",
};
const  imgbackground= {
    backgroundImage: '/back.jpg'
  };


export default Header;
