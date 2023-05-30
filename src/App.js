import "./App.css";
import Header from "../src/Components/Header";
import Body from "./Components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import Demo from "./Components/Demo";

const appRouter = createBrowserRouter([
	{
		path:'/',
		element:<Body />,
		children: [
			{
				path: '/',
				element:<MainContainer />
			},
			{
				path:'watch',
				element:<WatchPage />
			},
			{
				path:'demo',
				element:<Demo />
			}

		]
	}
])

function App() {
	return (
		<Provider store = {store}>
			<Header />
			<RouterProvider router={appRouter} />
		</Provider>
	);
}

export default App;
