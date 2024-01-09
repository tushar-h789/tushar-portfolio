const Navbar = () => {
  return (
    <div className=" text-center bg-primary w-full ">
      <div className="max-w-screen-xl mx-auto flex justify-between text-white py-4 ">
        <div className="w-1/4 flex md:text-xl">Tushar H.</div>
        <div className="w-3/4">
          <ul className="flex items-center gap-20 justify-center ">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
