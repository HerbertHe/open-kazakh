import React, { FC } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

// 页面组件
import Home from "./pages/Home"
import About from "./pages/About"
import Contributors from "./pages/Contributors"
import AlphabetOld from "./pages/alphabet/AlphabetOld"
import AlphabetCyrillic from "./pages/alphabet/AlphabetCyrillic"
// import RoadmapVideo from "./pages/roadmap/Video"

// 组件
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

const App: FC = () => (
    <div className="w-full flex flex-col justify-start items-center">
        <Router>
            <Header />
            <main className="pt-20 w-full <lg:(pt-50)">
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/contributors" exact component={Contributors} />
                <Route path="/alphabet/old" exact component={AlphabetOld} />
                <Route
                    path="/alphabet/cyrillic"
                    exact
                    component={AlphabetCyrillic}
                />
                {/* <Route path="/roadmap/video" exact component={RoadmapVideo} /> */}
            </main>
            <Footer />
        </Router>
    </div>
)

export default App
