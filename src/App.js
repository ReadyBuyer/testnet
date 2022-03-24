import "regenerator-runtime/runtime";
import ProductList from "./components/products/list";
import Layout from "./components/Layout";

export default function App() {
  // use React Hooks to store stake in component state
  const [stake, setStake] = React.useState();

  // after submitting the form, we want to show Notification
  const [showNotification, setShowNotification] = React.useState(false);

  // The useEffect hook can be used to fire side-effects during render
  // Learn more: https://reactjs.org/docs/hooks-intro.html
  React.useEffect(() => {
    // in this case, we only care to query the contract when signed in
    if (window.walletConnection.isSignedIn()) {
      // window.contract is set by initContract in index.js
      setShowNotification(true);
      window.contract
        .getGreeting({ accountId: window.accountId })
        .then((stakeFromContract) => {
          setStake(stakeFromContract);
        });
    }
  }, []);

  return (
    // use React Fragment, <>, to avoid wrapping elements in unnecessary divs

    <Layout>
      <ProductList />

      {showNotification && <Notification />}
    </Layout>
  );
}

// this component gets rendered by App after the form is submitted
function Notification() {
  const urlPrefix = `https://explorer.${networkId}.near.org/accounts`;
  return (
    <aside>
      <a
        target="_blank"
        rel="noreferrer"
        href={`${urlPrefix}/${window.accountId}`}
      >
        {window.accountId}
      </a>
      {
        " " /* React trims whitespace around tags; insert literal space character when needed */
      }
      called method: 'setGreeting' in contract:{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href={`${urlPrefix}/${window.contract.contractId}`}
      >
        {window.contract.contractId}
      </a>
      <footer>
        <div>✔ Succeeded</div>
        <div>Just now</div>
      </footer>
    </aside>
  );
}
