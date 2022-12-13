import "./CSS/Onboarding.css";

const Onboarding = () => {
  return (
    <div className="onboarding">
      <div className="onboarding-container">
        <h2>For Property Owners</h2>
        <br />
        <br />
        <div className="onboarding-host">
          <div>
            <span className="circle bg1">1</span>
            <h4>Create an Account</h4>
            <p>
              Add the required information, get verified to set up
              your account
            </p>
          </div>
          <div>
            <span className="circle bg2">2</span>
            <h4>Add your Properties</h4>
            <p>Add properties you own or manage</p>
          </div>
          <div>
            <span className="circle bg3">3</span>
            <h4>Get Contacted</h4>
            <p>
              Get contacted by clients interested in buying or renting
              your property
            </p>
          </div>
        </div>
      </div>
      <div className="onboarding-container">
        <h2>For Clients</h2>
        <br />
        <br />
        <div className="onboarding-host">
          <div>
            <span className="circle bg4">1</span>
            <h4>Create an Account</h4>
            <p>
              Add the required information, get verified to set up
              your account
            </p>
          </div>
          <div>
            <span className="circle bg5">2</span>
            <h4>Search for Properties</h4>
            <p>Search and compare properties you find interesting</p>
          </div>
          <div>
            <span className="circle bg6">3</span>
            <h4>Contact Property Owners</h4>
            <p>
              Contact the owners of the properties you want to buy or
              rent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
