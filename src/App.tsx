import Links from "./UI/Links";
import SearchForm from "./UI/SearchForm";
import Copyright from "./UI/Copyright";
import { fromWLS } from "./ts/constants";

function App() {
    return (
        <div>
            <Links />
            <div className="main">
                {!fromWLS && (<SearchForm />)}
                <div id="results"></div>
            </div>
            <Copyright />
        </div>
    );
}

export default App;