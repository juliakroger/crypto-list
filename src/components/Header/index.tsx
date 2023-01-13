const Header = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <img
          alt="logo"
          width={50}
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/krinnxb23kgp75s0jyhp"
        />
      </div>

      <div className="flex text-sm">
        {/* <div>Overview</div> */}
        {/* <div>Following</div> */}
        {/* <div>Portfolio</div> */}
        {/* <div>News</div> */}
        {/* <div>Scanner</div> */}
      </div>

      <div>
        {/* <div>notifications</div> */}
        {/* <div>user logo</div> */}
      </div>
    </div>
  );
};

export default Header;
