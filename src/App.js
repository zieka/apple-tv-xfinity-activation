import Component from "inferno-component";
import "./registerServiceWorker";
import Logo from "./logo";
import "./App.css";

const apps = {
  ABC:
    "https://api.auth.adobe.com/api/v1/authenticate?reg_code=XXXXXXX&noflash=true&mso_id=Comcast_SSO&requestor_id=ABC&domain_name=watchabc.com&redirect_url=http%3A%2F%2Fwww.watchabc.com%2Factivate%3Fdevice%3Dappletv",
  "A&E":
    "https://api.auth.adobe.com/api/v1/authenticate?reg_code=XXXXXXX&noflash=true&mso_id=Comcast_SSO&requestor_id=AETV&domain_name=aetv.com&redirect_url=http%3A%2F%2Fwww.aetv.com%2Factivate%3Fdevice%3Dappletv",
  AMC:
    "https://api.auth.adobe.com/api/v1/authenticate?reg_code=XXXXXXX&noflash=true&mso_id=Comcast_SSO&requestor_id=AMC&domain_name=amc.com&redirect_url=http%3A%2F%2Fwww.amc.com%2Factivate%3Fdevice%3Dappletv",
  "Cooking Channel":
    "https://sp.auth.adobe.com/api/v1/authenticate?reg_code=XXXXXXX&noflash=true&mso_id=Comcast_SSO&requestor_id=CookingChannelTV&domain_name=watch.cookingchanneltv.com&redirect_url=http%3A%2F%2Fwatch.cookingchanneltv.com%2Factivate%2Fthanks.html",
  DIY:
    "https://api.auth.adobe.com/api/v1/authenticate?reg_code=XXXXXXX&noflash=true&mso_id=Comcast_SSO&requestor_id=DIYNetwork&domain_name=adobe.com&redirect_url=http%3A%2F%2Fwatch.diynetwork.com%2Factivate%2Fthanks.html",
  "Food Network":
    "https://api.auth.adobe.com/api/v1/authenticate?reg_code=XXXXXXX&noflash=true&mso_id=Comcast_SSO&requestor_id=FoodNetwork&domain_name=watch.foodnetwork.com&redirect_url=http%3A%2F%2Fwatch.foodnetwork.com%2Factivate%2Fthanks.html",
  FYI:
    "https://api.auth.adobe.com/api/v1/authenticate?reg_code=XXXXXXX&noflash=true&mso_id=Comcast_SSO&requestor_id=FYI&domain_name=fyi.tv&redirect_url=http%3A%2F%2Fwww.fyi.tv%2Factivate%3Fdevice%3Dappletv",
  HGTV:
    "https://api.auth.adobe.com/api/v1/authenticate?reg_code=XXXXXXX&noflash=true&mso_id=Comcast_SSO&requestor_id=HGTV&domain_name=watch.hgtv.com&redirect_url=http%3A%2F%2Fwatch.hgtv.com%2Factivate%2Fthanks.html",
  History:
    "https://api.auth.adobe.com/api/v1/authenticate?reg_code=XXXXXXX&noflash=true&mso_id=Comcast_SSO&requestor_id=HISTORY&domain_name=history.com&redirect_url=http%3A%2F%2Fwww.history.com%2Factivate%3Fdevice%3Dappletv",
  Lifetime:
    "https://api.auth.adobe.com/api/v1/authenticate?reg_code=XXXXXXX&noflash=true&mso_id=Comcast_SSO&requestor_id=LIFETIME&domain_name=mylifetime.com&redirect_url=http%3A%2F%2Fwww.mylifetime.com%2Factivate%3Fdevice%3Dappletv",
  Travel:
    "https://api.auth.adobe.com/api/v1/authenticate?reg_code=XXXXXXX&noflash=true&mso_id=Comcast_SSO&requestor_id=TravelChannel&domain_name=watch.travelchannel.com&redirect_url=http%3A%2F%2Fwatch.travelchannel.com%2Factivate%2Fthanks.html%23appletv%26Travel"
};

const appNames = Object.keys(apps);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = appNames.reduce((prev, current) => {
      prev[current] = "";
      return prev;
    }, {});

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;

    this.setState({
      [id]: value
    });
  }

  handleSubmit(event) {
    const target = event.target;
    const name = target.name;
    const activationCode = this.state[name].toUpperCase();

    if (activationCode) {
      const activationURL = apps[name];
      window.open(activationURL.replace("XXXXXXX", activationCode), "_blank");
    }

    event.preventDefault();
  }

  render() {
    return (
      <div className="body">
        <header className="App-header">
          <h1>{`Activating xfinity on apple tv`}</h1>
        </header>
        <div className="row">
          <div className="f3 col-12">Step 1</div>
          <p className="col-12">
            Login into comcast xfinity on a seperate tab:
          </p>
          <p>
            <a
              className="col-12"
              href="https://login.comcast.net/login"
              target="_blank norefer"
            >
              Comcast xfinity Login Page
            </a>
          </p>
        </div>
        <div className="row">
          <div className="f3 col-12">Step 2</div>
          <p>Open Apple TV app, login, and get an activation code</p>
        </div>
        <div className="row">
          <div className="f3 col-12">Step 3</div>
          <p>Enter the activation code and hit the activate button</p>
        </div>
        {appNames.map(each => (
          <div>
            <div className="row">
              <div className="col-5 md-10">
                <div className="io">
                  <label className="io__label" htmlFor={each} required>
                    {each}
                  </label>
                  <input
                    className="io__control"
                    type="text"
                    placeholder="enter your activation code"
                    id={each}
                    value={this.state[each]}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <button
                style={{ marginTop: "19px", height: "36px" }}
                className="btn btn--fill col-5 md-2"
                onClick={this.handleSubmit}
                name={each}
              >
                activate
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
